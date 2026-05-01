
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
    localStorage.removeItem(`answers_${pendingTestId}`);
    localStorage.removeItem(`order_${pendingTestId}`);
    
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
    return `${m}:${s < 10 ? '0'+s : s}`;
}

// Common function to load current test
function loadCurrentTest() {
    if (currentTestId === 'final_exam') {
        return JSON.parse(localStorage.getItem('final_exam_data'));
    }
    return quizSets.find(t => t.id === currentTestId);
}

// Common state
let currentTestId = localStorage.getItem('currentTestId');
let currentTest = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let totalCoins = parseInt(localStorage.getItem('totalCoins') || '0');

// Audio setup
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playTing() {
    if(audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, audioCtx.currentTime); 
    osc.frequency.exponentialRampToValueAtTime(1760, audioCtx.currentTime + 0.1); 
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.5);
}
function playTada() {
    if(audioCtx.state === 'suspended') audioCtx.resume();
    [261.63, 329.63, 392.00, 523.25].forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        const startTime = audioCtx.currentTime + (idx * 0.15);
        const duration = idx === 3 ? 0.8 : 0.15;
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.3, startTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        osc.start(startTime);
        osc.stop(startTime + duration);
    });
}

function updateCoinUI() {
    const coinEls = document.querySelectorAll('#header-coin-amount');
    coinEls.forEach(el => el.textContent = totalCoins);
}
document.addEventListener('DOMContentLoaded', updateCoinUI);

// DOM Elements
const topicList = document.getElementById('topic-list');
const quizTitle = document.getElementById('quiz-title');
const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-bar');
const quizCard = document.getElementById('quiz-card');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnSubmit = document.getElementById('btn-submit');

// Page: index.html
function renderTopicList() {
    if (!topicList) return;

    if (!quizSets || quizSets.length === 0) {
        topicList.innerHTML = '<p>Không tìm thấy dữ liệu bài kiểm tra.</p>';
        return;
    }

    const icons = ['🌴', '🌋', '⛺', '🗿', '🏰', '🏜️', '🗻', '⚓', '🚢', '🏯', '🛸', '💎'];

    quizSets.forEach((test, i) => {
        const card = document.createElement('div');
        card.className = 'island-card';
        card.innerHTML = `
            <div class="island-icon">${icons[i % icons.length]}</div>
            <h3 class="island-title">${test.title}</h3>
            <p>Số câu hỏi: ${test.questions.length}</p>
        `;
        card.addEventListener('click', () => {
            showModeModal(test.id);
        });
        topicList.appendChild(card);
    });
}

// Page: quiz.html
function initQuiz() {
    if (!quizCard) return;

    if (!currentTestId) {
        window.location.href = 'index.html';
        return;
    }

    currentTest = loadCurrentTest();
    if (!currentTest) {
        alert('Không tìm thấy bài kiểm tra!');
        window.location.href = 'index.html';
        return;
    }

    quizTitle.textContent = currentTest.title;

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
            timerHtml.innerHTML = `⏱️ <span>${formatTime(timeLeft)}</span>`;
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

    
    // Shuffle logic
    let orderStr = localStorage.getItem(`order_${currentTestId}`);
    if (!orderStr) {
        let order = currentTest.questions.map(q => q.id);
        for (let i = order.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [order[i], order[j]] = [order[j], order[i]];
        }
        localStorage.setItem(`order_${currentTestId}`, JSON.stringify(order));
        orderStr = localStorage.getItem(`order_${currentTestId}`);
    }

    let order = JSON.parse(orderStr);
    let shuffledQuestions = [];
    order.forEach(id => {
        let q = currentTest.questions.find(q => q.id === id);
        if(q) shuffledQuestions.push(q);
    });
    if (shuffledQuestions.length === currentTest.questions.length) {
        currentTest.questions = shuffledQuestions;
    }

    // Load saved answers if any
    const saved = localStorage.getItem(`answers_${currentTestId}`);
    if (saved) {
        userAnswers = JSON.parse(saved);
    } else {
        userAnswers = new Array(currentTest.questions.length).fill(null);
    }

    renderQuestion();
}

function renderQuestion() {
    const q = currentTest.questions[currentQuestionIndex];
    
    // Update Progress
    questionCounter.textContent = `Câu: ${currentQuestionIndex + 1}/${currentTest.questions.length}`;
    const progressPercent = ((currentQuestionIndex + 1) / currentTest.questions.length) * 100;
    const pBar = document.getElementById('progress-bar');
    const pCar = document.getElementById('progress-car');
    if (pBar) pBar.style.width = `${progressPercent}%`;
    if (pCar) pCar.style.left = `calc(${progressPercent}% - 15px)`;

    const msgs = ["Sắp tới đích rồi!", "Câu này dễ ẹc!", "Bạn làm tốt lắm!", "Tuyệt vời ông mặt trời!", "Tiếp tục phát huy nhé!"];
    const msgEl = document.getElementById('mascot-message');
    if (msgEl) msgEl.textContent = msgs[Math.floor(Math.random() * msgs.length)];

    // Render Question Content
    let html = `<div class="question-text">Câu ${currentQuestionIndex + 1}: ${q.question}</div>`;
    
    if (q.images && q.images.length > 0) {
        q.images.forEach(imgSrc => {
            html += `<img src="${imgSrc}" class="question-image" alt="Hình ảnh minh họa">`;
        });
    }

    if (q.videos && q.videos.length > 0) {
        q.videos.forEach(vidSrc => {
            html += `<video src="${vidSrc}" controls class="question-video" style="max-width:100%; border-radius:8px; margin-bottom:15px;"></video>`;
        });
    }

    html += `<div class="options-container">`;

    if (q.type === 'single' || q.type === 'multiple') {
        const inputType = q.type === 'single' ? 'radio' : 'checkbox';
        
        q.options.forEach((opt, idx) => {
            const isChecked = userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex].includes(opt) ? 'checked' : '';
            const selectedClass = isChecked ? 'selected' : '';
            
            html += `
                <div class="option-item ${selectedClass}" onclick="toggleOption(this, '${inputType}', '${opt.replace(/'/g, "\\'")}')">
                    <input type="${inputType}" name="q${q.id}" value="${idx}" ${isChecked} onclick="event.stopPropagation(); toggleOption(this.parentElement, '${inputType}', '${opt.replace(/'/g, "\\'")}')">
                    <label>${opt}</label>
                </div>
            `;
        });
    } else if (q.type === 'matching') {
        const savedAns = userAnswers[currentQuestionIndex] || {};
        
        q.options.forEach((opt, idx) => {
            html += `<div class="matching-row">
                <p>${opt.text}</p>
                <select onchange="saveMatchingAnswer(${idx}, this.value)">
                    <option value="">-- Chọn --</option>`;
            
            opt.choices.forEach(choice => {
                const isSelected = savedAns[idx] === choice ? 'selected' : '';
                html += `<option value="${choice}" ${isSelected}>${choice}</option>`;
            });
            
            html += `</select></div>`;
        });
    }

    html += `</div>`;
    quizCard.innerHTML = html;

    // Navigation buttons
    btnPrev.style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
    
    if (currentQuestionIndex === currentTest.questions.length - 1) {
        btnNext.style.display = 'none';
        btnSubmit.style.display = 'inline-block';
    } else {
        btnNext.style.display = 'inline-block';
        btnSubmit.style.display = 'none';
    }
}

function toggleOption(el, type, value) {
    if (type === 'single') {
        // Clear all selected classes
        const items = document.querySelectorAll('.option-item');
        items.forEach(item => {
            item.classList.remove('selected');
            item.querySelector('input').checked = false;
        });
        
        el.classList.add('selected');
        el.querySelector('input').checked = true;
        
        userAnswers[currentQuestionIndex] = [value];
    } else {
        // Checkbox
        const input = el.querySelector('input');
        // If the click came from the div, toggle the input manually
        if(event.target.tagName !== 'INPUT') {
            input.checked = !input.checked;
        }
        
        if (input.checked) {
            el.classList.add('selected');
        } else {
            el.classList.remove('selected');
        }

        // Gather all checked values
        const checkedInputs = document.querySelectorAll(`input[name="q${currentTest.questions[currentQuestionIndex].id}"]:checked`);
        const values = [];
        checkedInputs.forEach(inp => {
            values.push(inp.nextElementSibling.textContent);
        });
        userAnswers[currentQuestionIndex] = values;
    }
    
    playTing();
    saveAnswers();
}

function saveMatchingAnswer(rowIdx, value) {
    if (!userAnswers[currentQuestionIndex]) {
        userAnswers[currentQuestionIndex] = {};
    }
    userAnswers[currentQuestionIndex][rowIdx] = value;
    playTing();
    saveAnswers();
}

function saveAnswers() {
    localStorage.setItem(`answers_${currentTestId}`, JSON.stringify(userAnswers));
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentTest.questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    }
}

function submitQuiz(isAuto = false) {
    if (isAuto) {
        window.location.href = 'result.html';
        return;
    }
    const confirmSubmit = confirm('Bạn có chắc chắn muốn nộp bài?');
    if (confirmSubmit) {
        window.location.href = 'result.html';
    }
}

// Page: result.html
function renderResult() {
    const resultTitle = document.getElementById('result-title');
    const scoreText = document.getElementById('score-text');
    const resultMessage = document.getElementById('result-message');

    if (!resultTitle) return;

    if (!currentTestId) {
        window.location.href = 'index.html';
        return;
    }

    currentTest = loadCurrentTest();
    
    // Apply shuffle logic
    let orderStr = localStorage.getItem(`order_${currentTestId}`);
    if (orderStr) {
        let order = JSON.parse(orderStr);
        let shuffledQuestions = [];
        order.forEach(id => {
            let q = currentTest.questions.find(q => q.id === id);
            if(q) shuffledQuestions.push(q);
        });
        if (shuffledQuestions.length === currentTest.questions.length) {
            currentTest.questions = shuffledQuestions;
        }
    }

    const saved = localStorage.getItem(`answers_${currentTestId}`);
    if (saved) {
        userAnswers = JSON.parse(saved);
    } else {
        userAnswers = new Array(currentTest.questions.length).fill(null);
    }

    let correctCount = 0;

    currentTest.questions.forEach((q, i) => {
        const uAns = userAnswers[i];
        const cAns = q.correctAnswers;
        
        if(!cAns || cAns.length === 0) {
             // Treat as wrong if no correct answer is defined, or just ignore. 
             // Currently the data lacks correct answers.
             return;
        }

        if (q.type === 'single' || q.type === 'multiple') {
            if (uAns && Array.isArray(uAns)) {
                // Check if arrays have same elements
                const isCorrect = uAns.length === cAns.length && uAns.every(val => cAns.includes(val));
                if (isCorrect) correctCount++;
            }
        } else if (q.type === 'matching') {
            if (uAns && typeof uAns === 'object') {
                let allMatch = true;
                q.options.forEach((opt, idx) => {
                    // Assuming cAns is an object/array mapping
                    if (uAns[idx] !== cAns[idx]) {
                        allMatch = false;
                    }
                });
                if (allMatch) correctCount++;
            }
        }
    });

    scoreText.textContent = `${correctCount}/${currentTest.questions.length}`;
    
    // Add coins
    const coinsEarned = correctCount * 10;
    if (coinsEarned > 0) {
        totalCoins += coinsEarned;
        localStorage.setItem('totalCoins', totalCoins);
        updateCoinUI();
    }

    if (correctCount >= currentTest.questions.length / 2) {
        resultMessage.innerHTML = `Tuyệt vời! Bạn nhận được <strong>${coinsEarned} Xu ⭐</strong>`;
        playTada();
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    } else {
        resultMessage.innerHTML = `Hãy cố gắng hơn nhé! Bạn nhận được <strong>${coinsEarned} Xu ⭐</strong>`;
    }

    // Minigame trigger (every 3rd test roughly, based on ID string or index)
    const testIndex = quizSets.findIndex(t => t.id === currentTestId);
    if ((testIndex + 1) % 3 === 0) {
        document.getElementById('minigame-container').style.display = 'block';
    }
}

function retryQuiz() {
    localStorage.removeItem(`answers_${currentTestId}`);
    localStorage.removeItem(`order_${currentTestId}`);
    window.location.href = 'quiz.html';
}

// Page: review.html
function renderReview() {
    const reviewContainer = document.getElementById('review-container');
    if (!reviewContainer) return;

    if (!currentTestId) {
        window.location.href = 'index.html';
        return;
    }

    currentTest = loadCurrentTest();
    
    // Apply shuffle logic
    let orderStr = localStorage.getItem(`order_${currentTestId}`);
    if (orderStr) {
        let order = JSON.parse(orderStr);
        let shuffledQuestions = [];
        order.forEach(id => {
            let q = currentTest.questions.find(q => q.id === id);
            if(q) shuffledQuestions.push(q);
        });
        if (shuffledQuestions.length === currentTest.questions.length) {
            currentTest.questions = shuffledQuestions;
        }
    }

    const saved = localStorage.getItem(`answers_${currentTestId}`);
    if (saved) {
        userAnswers = JSON.parse(saved);
    } else {
        userAnswers = new Array(currentTest.questions.length).fill(null);
    }

    let html = '';

    currentTest.questions.forEach((q, i) => {
        const uAns = userAnswers[i];
        let uAnsText = 'Chưa trả lời';
        let isCorrectClass = ''; // 'correct' or 'incorrect'
        
        if (q.type === 'single' || q.type === 'multiple') {
            if (uAns && Array.isArray(uAns) && uAns.length > 0) {
                uAnsText = uAns.join(', ');
            }
        } else if (q.type === 'matching') {
             if (uAns && Object.keys(uAns).length > 0) {
                 const pairs = [];
                 q.options.forEach((opt, idx) => {
                     pairs.push(`<strong>${opt.text}</strong> ➔ ${uAns[idx] || 'Chưa chọn'}`);
                 });
                 uAnsText = pairs.join('<br>');
             }
        }

        let cAnsText = 'Chưa có dữ liệu đáp án đúng';
        if (q.correctAnswers && q.correctAnswers.length > 0) {
             if (q.type === 'matching') {
                  // If matching has answers
                  cAnsText = JSON.stringify(q.correctAnswers);
             } else {
                  cAnsText = q.correctAnswers.join(', ');
             }
        }

        html += `
            <div class="review-item ${isCorrectClass}">
                <div class="review-question">Câu ${i + 1}: ${q.question}</div>
        `;
        
        if (q.images && q.images.length > 0) {
            q.images.forEach(imgSrc => {
                html += `<img src="${imgSrc}" style="max-width:200px; border-radius:4px; margin-bottom:10px;">`;
            });
        }

        if (q.videos && q.videos.length > 0) {
            q.videos.forEach(vidSrc => {
                html += `<video src="${vidSrc}" controls style="max-width:100%; border-radius:8px; margin-bottom:10px;"></video>`;
            });
        }

        html += `
                <div class="review-answer user">Lựa chọn của bạn: <br>${uAnsText}</div>
                <div class="review-answer correct-ans">Đáp án đúng: <br>${cAnsText}</div>
                <div class="review-explanation"><strong>Giải thích:</strong> ${q.explanation}</div>
            </div>
        `;
    });

    reviewContainer.innerHTML = html;
}

function mascotCheer() {
    playTing();
    const msgEl = document.getElementById('mascot-message');
    if (msgEl) msgEl.textContent = 'Bạn là số một! ❤️';
}
