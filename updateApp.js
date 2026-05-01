const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf-8');

// 1. Add mode selection and final exam generation functions
const newFunctions = `
let pendingTestId = null;

function showModeModal(testId) {
    pendingTestId = testId;
    const modal = document.getElementById('mode-modal');
    if(!modal) return;
    const titleEl = document.getElementById('modal-test-name');
    
    if (testId === 'final_exam') {
        titleEl.textContent = 'BÀI KIỂM TRA TỔNG HỢP (40 CÂU)';
    } else {
        const test = quizSets.find(t => t.id === testId);
        titleEl.textContent = test ? test.title : '';
    }
    
    modal.style.display = 'flex';
}

function closeModeModal() {
    const modal = document.getElementById('mode-modal');
    if(modal) modal.style.display = 'none';
    pendingTestId = null;
}

function startQuizMode(mode) {
    localStorage.setItem('quizMode', mode);
    localStorage.setItem('currentTestId', pendingTestId);
    localStorage.removeItem(\`answers_\${pendingTestId}\`);
    localStorage.removeItem(\`order_\${pendingTestId}\`);
    
    if (pendingTestId === 'final_exam') {
        generateFinalExam();
    }
    
    window.location.href = 'quiz.html';
}

function generateFinalExam() {
    let allQuestions = [];
    quizSets.forEach(t => {
        allQuestions = allQuestions.concat(t.questions);
    });
    
    // Shuffle all questions
    for (let i = allQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
    
    // Pick 40
    let selected = allQuestions.slice(0, 40);
    let finalExamData = {
        id: 'final_exam',
        title: 'BÀI KIỂM TRA TỔNG HỢP',
        questions: selected
    };
    
    localStorage.setItem('final_exam_data', JSON.stringify(finalExamData));
}

let quizTimer;
let timeLeft;

function formatTime(sec) {
    let m = Math.floor(sec / 60);
    let s = sec % 60;
    return \`\${m}:\${s < 10 ? '0'+s : s}\`;
}

// Common function to load current test
function loadCurrentTest() {
    if (currentTestId === 'final_exam') {
        return JSON.parse(localStorage.getItem('final_exam_data'));
    }
    return quizSets.find(t => t.id === currentTestId);
}
`;

appJs = appJs.replace('// Common state', newFunctions + '\n// Common state');

// 2. Change click handler in renderTopicList
appJs = appJs.replace(/card\.addEventListener\('click', \(\) => {[\s\S]*?}\);/g, `card.addEventListener('click', () => {
            showModeModal(test.id);
        });`);

// 3. Replace all currentTest = quizSets.find... with loadCurrentTest()
appJs = appJs.replace(/currentTest = quizSets\.find\(t => t\.id === currentTestId\);/g, `currentTest = loadCurrentTest();`);

// 4. Update initQuiz to handle mode/timer
const initQuizStart = `function initQuiz() {`;
const timerLogic = `
    const mode = localStorage.getItem('quizMode') || 'practice';
    if (mode === 'exam') {
        const mascot = document.querySelector('.mascot-container');
        if(mascot) mascot.style.display = 'none';
        
        timeLeft = currentTest.questions.length * 60; // 1 minute per question
        const headerContainer = document.querySelector('.quiz-header');
        if(headerContainer) {
            const timerHtml = document.createElement('div');
            timerHtml.className = 'timer-display';
            timerHtml.id = 'exam-timer';
            timerHtml.innerHTML = \`⏱️ <span>\${formatTime(timeLeft)}</span>\`;
            headerContainer.appendChild(timerHtml);
            
            quizTimer = setInterval(() => {
                timeLeft--;
                const span = document.querySelector('#exam-timer span');
                if(span) span.textContent = formatTime(timeLeft);
                if (timeLeft <= 0) {
                    clearInterval(quizTimer);
                    alert('Hết giờ làm bài!');
                    submitQuiz(true);
                }
            }, 1000);
        }
    }
`;

// Insert timerLogic after quizTitle.textContent = currentTest.title;
appJs = appJs.replace(/quizTitle\.textContent = currentTest\.title;/g, `quizTitle.textContent = currentTest.title;\n${timerLogic}`);

// 5. Update submitQuiz
appJs = appJs.replace(/function submitQuiz\(\) {/g, `function submitQuiz(isAuto = false) {
    if (isAuto) {
        window.location.href = 'result.html';
        return;
    }`);

fs.writeFileSync('app.js', appJs);
console.log('Updated app.js successfully.');
