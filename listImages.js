const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataFile, 'utf-8');

// evaluate the quizSets variable
content = content.replace('const quizSets = ', 'module.exports = ');
fs.writeFileSync(path.join(__dirname, 'temp_data.js'), content, 'utf-8');

const quizSets = require('./temp_data.js');

let result = '';

quizSets.forEach(test => {
    let hasImage = false;
    test.questions.forEach((q, idx) => {
        if (q.images && q.images.length > 0) {
            if (!hasImage) {
                result += `\n**${test.title}**\n`;
                hasImage = true;
            }
            result += `- Câu ${idx + 1} (${q.question.substring(0, 50)}...)\n`;
            q.images.forEach((img, i) => {
                result += `  + Ảnh ${i+1}: ${img}\n`;
            });
        }
    });
});

console.log(result);
