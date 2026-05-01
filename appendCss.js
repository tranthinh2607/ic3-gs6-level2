const fs = require('fs');
const css = `
/* GAMIFICATION STYLES */

/* Coin Counter */
.coin-counter {
    background: rgba(0, 0, 0, 0.2);
    padding: 5px 15px;
    border-radius: 20px;
    font-weight: bold;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    margin-left: 15px;
}
.coin-icon {
    font-size: 20px;
    color: #FFD700;
    text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
}

/* Map Layout for index.html */
.map-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 40px 0;
}
.map-container::before {
    content: '';
    position: absolute;
    top: 50px;
    bottom: 50px;
    left: 50%;
    width: 6px;
    background: #FFB347;
    transform: translateX(-50%);
    z-index: 0;
    border-radius: 3px;
    border: 2px dashed #FFF;
}
.island-card {
    position: relative;
    z-index: 1;
    width: 300px;
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0 8px 15px rgba(0,0,0,0.1);
    border: 4px solid #4A90E2;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-align: center;
}
.island-card:nth-child(odd) {
    margin-right: 350px;
    border-color: #66CC99;
}
.island-card:nth-child(even) {
    margin-left: 350px;
    border-color: #FF6B6B;
}
.island-card:hover {
    transform: scale(1.05) translateY(-5px);
}
.island-icon {
    font-size: 40px;
    margin-bottom: 10px;
}
.island-title {
    color: #333;
    font-size: 18px;
    font-weight: bold;
}

@media (max-width: 768px) {
    .map-container::before {
        left: 20px;
    }
    .island-card:nth-child(odd), .island-card:nth-child(even) {
        margin: 0 0 20px 40px;
        width: calc(100% - 40px);
    }
}

/* Mascot */
.mascot-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.mascot-bubble {
    background: #fff;
    padding: 10px 15px;
    border-radius: 15px;
    border-bottom-right-radius: 0;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    margin-bottom: 10px;
    font-weight: bold;
    color: #4A90E2;
    animation: float 3s ease-in-out infinite;
    max-width: 200px;
    text-align: center;
}
.mascot-img {
    font-size: 60px;
    filter: drop-shadow(0 5px 5px rgba(0,0,0,0.2));
    cursor: pointer;
    transition: transform 0.3s;
}
.mascot-img:hover {
    transform: scale(1.1) rotate(5deg);
}

@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
}

/* Racing Progress */
.racing-track {
    position: relative;
    background-color: rgba(0, 0, 0, 0.1);
    height: 15px;
    border-radius: 10px;
    margin: 30px 0;
    width: 100%;
}
.racing-car {
    position: absolute;
    top: -20px;
    font-size: 30px;
    transition: left 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 2;
    margin-left: -15px;
}
.racing-fill {
    background: linear-gradient(90deg, #FFB347, #FF6B6B);
    height: 100%;
    border-radius: 10px;
    transition: width 0.5s ease;
}

/* Minigame Card */
.minigame-card {
    background: linear-gradient(135deg, #FF6B6B, #FFB347);
    color: white;
    padding: 20px;
    border-radius: 15px;
    margin-top: 20px;
    cursor: pointer;
    animation: pulse 2s infinite;
    font-weight: bold;
    font-size: 18px;
    display: inline-block;
}
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
}

/* Badge System */
.badge-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    flex-wrap: wrap;
}
.badge {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    padding: 10px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    border: 2px solid #E2E8F0;
    width: 100px;
}
.badge.unlocked {
    border-color: #FFD700;
    background: #FFFBE6;
}
.badge-icon {
    font-size: 30px;
    margin-bottom: 5px;
    filter: grayscale(100%);
    opacity: 0.5;
}
.badge.unlocked .badge-icon {
    filter: grayscale(0%);
    opacity: 1;
}
.badge-name {
    font-size: 12px;
    font-weight: bold;
    text-align: center;
}
`;
fs.appendFileSync('style.css', css);
console.log('Appended styles successfully.');
