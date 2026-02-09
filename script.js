let currentLevelIndex = 0;
let levels = [];

// تحميل الألغاز من ملف JSON
fetch('levels.json')
    .then(res => res.json())
    .then(data => { levels = data; });

function startGame() {
    showScreen('game-screen');
    loadLevel();
}

function loadLevel() {
    const level = levels[currentLevelIndex];
    document.getElementById('riddle-text').innerText = level.riddle;
    document.getElementById('current-level').innerText = level.id;
    document.getElementById('answer-input').value = "";
}

function checkAnswer() {
    const input = document.getElementById('answer-input').value.trim();
    if (input === levels[currentLevelIndex].answer) {
        showScreen('victory-screen');
    } else {
        document.getElementById('feedback').innerText = "إجابة خاطئة، حاول مجدداً!";
    }
}

function nextLevel() {
    currentLevelIndex++;
    if (currentLevelIndex < levels.length) {
        showScreen('game-screen');
        loadLevel();
    } else {
        alert("مبروك! أنهيت كل الألغاز.");
    }
}

function showScreen(screenId) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}
