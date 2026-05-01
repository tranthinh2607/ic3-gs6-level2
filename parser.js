const fs = require('fs');
const path = require('path');

const dataDir = __dirname;
const outputFilePath = path.join(dataDir, 'data.js');

const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.TXT'));

let quizData = [];

files.forEach(file => {
    const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
    
    // Extract topic and test number
    // IC3.LEVEL2.CHUDE1.TEST1.TXT
    const match = file.match(/CHUDE(\d+)\.TEST(\d+)/i);
    if (!match) return;
    const topicId = match[1];
    const testId = match[2];

    const testItem = {
        id: `c${topicId}-t${testId}`,
        title: `Chủ đề ${topicId} - Bài Test ${testId}`,
        topic: `Chủ đề ${topicId}`,
        questions: []
    };

    // Split by <div class="formulation clearfix">
    const questionBlocks = content.split(/<div class="formulation clearfix">/i);
    questionBlocks.shift(); // Remove the first split which is the header

    questionBlocks.forEach((block, qIndex) => {
        const qData = {
            id: qIndex + 1,
            question: '',
            type: '',
            options: [],
            correctAnswers: [], // We don't have this in the raw html
            explanation: 'Chưa có giải thích cho câu hỏi này.'
        };

        // Extract question text
        const qtextMatch = block.match(/<div class="qtext">([\s\S]*?)<\/div>\s*<(?:fieldset|div)[^>]*class="ablock/i);
        if (qtextMatch) {
            // cleanup html
            qData.question = qtextMatch[1].replace(/<[^>]+>/g, '').trim();
        } else {
             const qtextMatchFallback = block.match(/<div class="qtext">([\s\S]*?)<\/div>/i);
             if (qtextMatchFallback) qData.question = qtextMatchFallback[1].replace(/<[^>]+>/g, '').trim();
        }
        
        // Extract images in question
        const imgMatch = (qtextMatch ? qtextMatch[1] : '').match(/<img[^>]+src="([^">]+)"/g);
        if (imgMatch) {
            qData.images = imgMatch.map(img => {
                const src = img.match(/src="([^">]+)"/)[1];
                return src;
            });
        }

        // Determine type and extract options
        if (block.includes('type="checkbox"')) {
            qData.type = 'multiple';
            const optionMatches = block.matchAll(/<input type="checkbox"[^>]*value="1"[^>]*id="([^"]+)"[^>]*>[\s\S]*?<div[^>]*data-region="answer-label">[\s\S]*?<span[^>]*>(?:[A-Z]\.\s*)?<\/span>[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi);
            for (const opt of optionMatches) {
                 qData.options.push(opt[2].replace(/<[^>]+>/g, '').trim());
            }
            // fallback if structure differs
            if(qData.options.length === 0) {
                 const fallbackMatches = block.matchAll(/<input type="checkbox"[^>]*>[\s\S]*?<div[^>]*data-region="answer-label">[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>/gi);
                 for (const opt of fallbackMatches) {
                     qData.options.push(opt[1].replace(/<[^>]+>/g, '').trim());
                 }
            }
        } else if (block.includes('type="radio"') && !block.includes('<table class="answer">')) {
            qData.type = 'single';
            const optionMatches = block.matchAll(/<input type="radio"[^>]*>[\s\S]*?<div[^>]*data-region="answer-label">[\s\S]*?<span[^>]*>(?:[A-Z]\.\s*)?<\/span>[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi);
            for (const opt of optionMatches) {
                 let text = opt[1].replace(/<[^>]+>/g, '').trim();
                 if(text && text !== 'Xóa lựa chọn hiện tại') {
                     qData.options.push(text);
                 }
            }
            // filter out "Xóa lựa chọn hiện tại"
            qData.options = qData.options.filter(o => !o.includes('Xóa lựa chọn hiện tại'));
        } else if (block.includes('<table class="answer">')) {
            qData.type = 'matching'; // could be matching or matrix
            const rowMatches = block.matchAll(/<tr[^>]*>[\s\S]*?<td class="text">([\s\S]*?)<\/td>[\s\S]*?<select[^>]*>([\s\S]*?)<\/select>/gi);
            for (const row of rowMatches) {
                const text = row[1].replace(/<[^>]+>/g, '').trim();
                const selectHtml = row[2];
                const optMatches = selectHtml.matchAll(/<option value="[^0]"(?:[^>]*)?>([\s\S]*?)<\/option>/gi);
                const opts = [];
                for (const o of optMatches) {
                    opts.push(o[1].trim());
                }
                qData.options.push({ text: text, choices: opts });
            }
        } else {
             qData.type = 'unknown';
        }

        testItem.questions.push(qData);
    });

    quizData.push(testItem);
});

// Write to data.js
const jsContent = `const quizSets = ${JSON.stringify(quizData, null, 2)};\n`;
fs.writeFileSync(outputFilePath, jsContent, 'utf-8');
console.log('Parsed successfully! Written to data.js');
