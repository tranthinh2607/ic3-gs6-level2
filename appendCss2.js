const fs = require('fs');
const css = `
/* Modal & Modes */
.modal-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
}
.modal-content {
    background: #fff;
    padding: 30px;
    border-radius: 20px;
    max-width: 600px;
    width: 90%;
    text-align: center;
    animation: fadeIn 0.3s;
}
.mode-options {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}
.mode-card {
    flex: 1;
    padding: 20px;
    border-radius: 15px;
    cursor: pointer;
    border: 3px solid transparent;
    transition: 0.3s;
}
.mode-card:hover {
    transform: scale(1.05);
}
.practice-mode {
    background: #EBF4FF;
    border-color: #4A90E2;
}
.exam-mode {
    background: #FFEBEB;
    border-color: #FF6B6B;
}
.timer-display {
    font-size: 20px;
    font-weight: bold;
    color: #FF6B6B;
    background: #fff;
    padding: 5px 15px;
    border-radius: 10px;
    margin-right: 15px;
    border: 2px solid #FF6B6B;
    display: flex;
    align-items: center;
    gap: 5px;
}
@media (max-width: 600px) {
    .mode-options {
        flex-direction: column;
    }
}
`;
fs.appendFileSync('style.css', css);
