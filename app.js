// ============================================
// NYP Final Çalışma Sitesi - App Logic
// ============================================

// ===== STATE =====
let currentSection = 'home';
let currentTopic = 5; // Start with Kalıtım (priority)
let completedTopics = new Set();
let quizCorrect = 0;
let quizTotal = 0;
let streak = 0;
let currentFilter = 'all';
let currentTopicFilter = 'all';
let examTimer = null;
let examTimeLeft = 3600; // 60 minutes

// Load saved progress
try {
    const saved = JSON.parse(localStorage.getItem('nypProgress') || '{}');
    if (saved.completedTopics) completedTopics = new Set(saved.completedTopics);
    if (saved.quizCorrect) quizCorrect = saved.quizCorrect;
    if (saved.quizTotal) quizTotal = saved.quizTotal;
    if (saved.streak) streak = saved.streak;
} catch (e) { }

function saveProgress() {
    localStorage.setItem('nypProgress', JSON.stringify({
        completedTopics: [...completedTopics],
        quizCorrect,
        quizTotal,
        streak
    }));
}

// ===== PARTICLES =====
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (8 + Math.random() * 15) + 's';
        p.style.animationDelay = Math.random() * 10 + 's';
        p.style.width = (2 + Math.random() * 3) + 'px';
        p.style.height = p.style.width;
        p.style.opacity = 0.1 + Math.random() * 0.3;
        container.appendChild(p);
    }
}

// ===== NAVIGATION =====
function navigateTo(section) {
    currentSection = section;
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(section).classList.add('active');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector(`.nav-link[data-section="${section}"]`).classList.add('active');

    if (section === 'topics') showTopic(currentTopic);
    if (section === 'quiz') renderQuiz();

    window.scrollTo(0, 0);
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(link.dataset.section);
    });
});

// ===== UPDATE UI =====
function updateStats() {
    document.getElementById('correctCount').textContent = quizCorrect;
    document.getElementById('streakCount').textContent = streak;

    const progress = completedTopics.size / TOPICS.length * 100;
    document.getElementById('progressText').textContent = Math.round(progress) + '%';
    document.getElementById('progressRing').setAttribute('stroke-dasharray', `${progress}, 100`);

    // Update topic checks
    for (let i = 0; i < TOPICS.length; i++) {
        const el = document.getElementById(`check-${i}`);
        if (el) el.textContent = completedTopics.has(i) ? '✓' : '○';
        if (el && completedTopics.has(i)) el.style.color = '#00b894';
    }

    saveProgress();
}

// ===== TOPICS =====
function showTopic(topicId) {
    currentTopic = topicId;

    // Navigate to topics section if not there
    if (currentSection !== 'topics') {
        navigateTo('topics');
        return;
    }

    // Update sidebar
    document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`.topic-btn[data-topic="${topicId}"]`);
    if (btn) btn.classList.add('active');

    const topic = TOPICS[topicId];
    if (!topic) return;

    const container = document.getElementById('topicsContent');
    let html = `<div class="topic-content-wrapper">
        <div class="topic-header">
            <h2>${topic.title}</h2>
            <p class="subtitle">${topic.subtitle}</p>
        </div>`;

    topic.content.forEach(block => {
        html += `<div class="content-block">
            <h3>${block.title}</h3>
            ${block.body}
        </div>`;
    });

    html += `<div class="mark-topic-btn">
        <button class="btn ${completedTopics.has(topicId) ? 'btn-secondary' : 'btn-primary'}" 
                onclick="toggleTopicComplete(${topicId})">
            ${completedTopics.has(topicId) ? '✓ Tamamlandı' : '☐ Tamamlandı Olarak İşaretle'}
        </button>
        ${topicId < TOPICS.length - 1 ? `<button class="btn btn-accent" style="margin-left:12px" onclick="showTopic(${topicId + 1})">Sonraki Konu →</button>` : ''}
    </div></div>`;

    container.innerHTML = html;
    container.scrollTo(0, 0);
}

function toggleTopicComplete(topicId) {
    if (completedTopics.has(topicId)) {
        completedTopics.delete(topicId);
    } else {
        completedTopics.add(topicId);
    }
    updateStats();
    showTopic(topicId);
}

// ===== QUIZ =====
let answeredQuestions = new Set();

function filterQuiz(type) {
    currentFilter = type;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    renderQuiz();
}

function filterQuizByTopic(topic) {
    currentTopicFilter = topic;
    renderQuiz();
}

function getFilteredQuestions() {
    return QUESTIONS.filter(q => {
        const typeMatch = currentFilter === 'all' || q.type === currentFilter;
        const topicMatch = currentTopicFilter === 'all' || q.topic === currentTopicFilter;
        return typeMatch && topicMatch;
    });
}

function renderQuiz() {
    const questions = getFilteredQuestions();
    const container = document.getElementById('quizBody');

    if (questions.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted)">Bu filtreleme için soru bulunamadı.</div>';
        return;
    }

    let html = '';
    questions.forEach((q, idx) => {
        const answered = answeredQuestions.has(q.id);
        html += renderQuestion(q, idx, answered);
    });

    container.innerHTML = html;
    document.getElementById('scoreCorrect').textContent = quizCorrect;
    document.getElementById('scoreTotal').textContent = quizTotal;
}

function renderQuestion(q, idx, answered) {
    const badgeClass = `badge-${q.type}`;
    const badgeText = {
        'fillblank': 'Boşluk Doldurma',
        'output': 'Çıktı Bulma',
        'error': 'Hata Bulma',
        'concept': 'Kavram'
    }[q.type];

    const topicLabels = {
        'inheritance': 'Kalıtım',
        'polymorphism': 'Çok Biçimlilik',
        'interface': 'Arayüzler',
        'generic': 'Generic',
        'class': 'Sınıflar',
        'array': 'Diziler',
        'control': 'Kontrol',
        'file': 'Dosyalar'
    };

    let html = `<div class="question-card" id="qcard-${q.id}">
        <div class="question-header">
            <span class="question-badge ${badgeClass}">${badgeText}</span>
            <span class="question-badge" style="background:rgba(108,92,231,0.1);color:var(--accent-2)">${topicLabels[q.topic] || q.topic}</span>
            <span class="question-points">${q.points} puan</span>
        </div>
        <p class="question-text"><strong>Soru ${idx + 1}:</strong> ${q.question}</p>`;

    if (q.type === 'fillblank') {
        html += renderFillBlank(q);
    } else if (q.type === 'output') {
        html += renderOutput(q);
    } else if (q.type === 'error') {
        html += renderError(q);
    } else if (q.type === 'concept') {
        html += renderConcept(q);
    }

    html += `<div class="feedback" id="feedback-${q.id}"></div>`;
    html += `</div>`;
    return html;
}

function renderFillBlank(q) {
    // Replace _____ with input fields
    let codeHtml = escapeHtml(q.code);
    let blankIdx = 0;
    codeHtml = codeHtml.replace(/_____/g, () => {
        const input = `<input type="text" class="blank-input" id="blank-${q.id}-${blankIdx}" 
            data-qid="${q.id}" data-bidx="${blankIdx}" placeholder="...">`;
        blankIdx++;
        return input;
    });

    return `<div class="question-code"><pre>${codeHtml}</pre></div>
        <button class="check-btn" onclick="checkFillBlank(${q.id})">✓ Kontrol Et</button>`;
}

function renderOutput(q) {
    return `<div class="question-code"><pre>${escapeHtml(q.code)}</pre></div>
        <div class="answer-area">
            <textarea id="answer-${q.id}" placeholder="Çıktıyı buraya yazın..."></textarea>
        </div>
        <button class="check-btn" onclick="checkOutput(${q.id})">✓ Kontrol Et</button>`;
}

function renderError(q) {
    return `<div class="question-code"><pre>${escapeHtml(q.code)}</pre></div>
        <div class="answer-area">
            <textarea id="answer-${q.id}" placeholder="Hataları ve düzeltmeleri buraya yazın..." rows="6"></textarea>
        </div>
        <button class="check-btn" onclick="checkError(${q.id})">✓ Cevabı Göster</button>`;
}

function renderConcept(q) {
    const letters = ['A', 'B', 'C', 'D'];
    let html = '<div class="options-list">';
    q.options.forEach((opt, i) => {
        html += `<button class="option-btn" id="opt-${q.id}-${i}" 
            onclick="selectOption(${q.id}, ${i})">
            <span class="option-letter">${letters[i]}</span>
            <span>${opt}</span>
        </button>`;
    });
    html += '</div>';
    html += `<button class="check-btn" onclick="checkConcept(${q.id})" id="checkbtn-${q.id}">✓ Kontrol Et</button>`;
    return html;
}

// ===== CHECK ANSWERS =====
let selectedOptions = {};

function selectOption(qid, optIdx) {
    if (answeredQuestions.has(qid)) return;
    selectedOptions[qid] = optIdx;
    document.querySelectorAll(`[id^="opt-${qid}-"]`).forEach(b => b.classList.remove('selected'));
    document.getElementById(`opt-${qid}-${optIdx}`).classList.add('selected');
}

function checkConcept(qid) {
    if (answeredQuestions.has(qid)) return;
    const q = QUESTIONS.find(q => q.id === qid);
    if (!q || selectedOptions[qid] === undefined) return;

    answeredQuestions.add(qid);
    quizTotal++;

    const correct = selectedOptions[qid] === q.correct;
    if (correct) {
        quizCorrect++;
        streak++;
    } else {
        streak = 0;
    }

    // Highlight options
    q.options.forEach((_, i) => {
        const el = document.getElementById(`opt-${qid}-${i}`);
        if (i === q.correct) el.classList.add('correct');
        else if (i === selectedOptions[qid]) el.classList.add('incorrect');
    });

    showFeedback(qid, correct, q.explanation);
    updateStats();
    document.getElementById(`checkbtn-${qid}`).disabled = true;
}

function checkFillBlank(qid) {
    if (answeredQuestions.has(qid)) return;
    const q = QUESTIONS.find(q => q.id === qid);
    if (!q) return;

    answeredQuestions.add(qid);
    quizTotal++;

    let allCorrect = true;
    q.blanks.forEach((answer, i) => {
        const input = document.getElementById(`blank-${qid}-${i}`);
        if (!input) return;
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = answer.toLowerCase();

        // Flexible matching
        const isCorrect = userAnswer === correctAnswer ||
            userAnswer.replace(/\s/g, '') === correctAnswer.replace(/\s/g, '') ||
            userAnswer === correctAnswer.replace(/\(\)/g, '') ||
            (correctAnswer === '+= 1' && (userAnswer === '++' || userAnswer === '+= 1' || userAnswer === '+=1'));

        if (isCorrect) {
            input.classList.add('correct');
            input.value = answer;
        } else {
            input.classList.add('incorrect');
            allCorrect = false;
            // Show correct answer
            const span = document.createElement('span');
            span.style.cssText = 'color:#00b894;font-family:JetBrains Mono,monospace;font-size:0.8rem;margin-left:8px;';
            span.textContent = `→ ${answer}`;
            input.parentNode.insertBefore(span, input.nextSibling);
        }
        input.readOnly = true;
    });

    if (allCorrect) {
        quizCorrect++;
        streak++;
    } else {
        streak = 0;
    }

    showFeedback(qid, allCorrect, q.explanation);
    updateStats();
}

function checkOutput(qid) {
    if (answeredQuestions.has(qid)) return;
    const q = QUESTIONS.find(q => q.id === qid);
    if (!q) return;

    answeredQuestions.add(qid);
    quizTotal++;

    const textarea = document.getElementById(`answer-${qid}`);
    const userAnswer = textarea.value.trim().replace(/\s+/g, ' ').toLowerCase();
    const correctAnswer = q.answer.trim().replace(/\s+/g, ' ').toLowerCase();

    const isCorrect = userAnswer === correctAnswer ||
        normalize(userAnswer) === normalize(correctAnswer);

    if (isCorrect) {
        quizCorrect++;
        streak++;
        textarea.style.borderColor = '#00b894';
    } else {
        streak = 0;
        textarea.style.borderColor = '#ff6b6b';
    }

    showFeedback(qid, isCorrect, `<strong>Doğru cevap:</strong><br><pre style="margin-top:8px;font-family:JetBrains Mono,monospace;white-space:pre-wrap;">${escapeHtml(q.answer)}</pre><br>${q.explanation}`);
    textarea.readOnly = true;
    updateStats();
}

function checkError(qid) {
    if (answeredQuestions.has(qid)) return;
    const q = QUESTIONS.find(q => q.id === qid);
    if (!q) return;

    answeredQuestions.add(qid);
    quizTotal++;
    // For error questions, just show the answer
    showFeedback(qid, null, `<strong>Cevap:</strong><br><pre style="margin-top:8px;font-family:JetBrains Mono,monospace;white-space:pre-wrap;color:var(--text-primary);">${escapeHtml(q.answer)}</pre><br>${q.explanation}`);
    updateStats();
}

function showFeedback(qid, correct, message) {
    const el = document.getElementById(`feedback-${qid}`);
    if (!el) return;
    el.className = `feedback show ${correct === true ? 'correct' : correct === false ? 'incorrect' : ''}`;

    let prefix = '';
    if (correct === true) prefix = '✅ Doğru! ';
    else if (correct === false) prefix = '❌ Yanlış. ';
    else prefix = '📋 ';

    el.innerHTML = prefix + message;

    // Scroll to feedback
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function resetQuiz() {
    answeredQuestions.clear();
    selectedOptions = {};
    quizCorrect = 0;
    quizTotal = 0;
    streak = 0;
    updateStats();
    renderQuiz();
    window.scrollTo(0, 0);
}

// ===== EXAM SIMULATION =====
function startExam() {
    document.getElementById('examHeader').style.display = 'none';
    document.getElementById('examBody').style.display = 'block';
    examTimeLeft = 3600;

    let html = `<div class="exam-timer" id="examTimer">
        <div>
            <strong>📝 BİL 2012 Nesneye Yönelik Programlama - Final Sınavı</strong>
        </div>
        <div class="timer-display" id="timerDisplay">60:00</div>
    </div>`;

    EXAM_QUESTIONS.forEach(eq => {
        html += `<div class="exam-question">
            <div class="exam-question-header">
                <span class="exam-question-num">Soru ${eq.num}</span>
                <span class="exam-question-points">${eq.points} puan</span>
            </div>
            <h3 style="margin-bottom:8px;">${eq.title}</h3>
            <p style="color:var(--text-secondary);margin-bottom:16px;">${eq.description}</p>`;

        if (eq.blanks) {
            // Fill-in-the-blank exam question
            let codeHtml = escapeHtml(eq.code);
            eq.blanks.forEach(blank => {
                codeHtml = codeHtml.replace(
                    `___${getCircledNum(blank.num)}___`,
                    `<span style="color:var(--accent-3);font-weight:700;">①②③④⑤⑥⑦⑧⑨</span>`.charAt(0) +
                    `<input type="text" class="blank-input" id="exam-blank-${eq.num}-${blank.num}" 
                        placeholder="${blank.hint}" style="width:180px;" data-answer="${blank.answer}">`
                );
            });

            // Simpler approach - replace numbered markers
            let code = eq.code;
            eq.blanks.forEach(blank => {
                const marker = `___${getCircledNum(blank.num)}___`;
                code = code.replace(marker, `___BLANK_${blank.num}___`);
            });

            let escapedCode = escapeHtml(code);
            eq.blanks.forEach(blank => {
                escapedCode = escapedCode.replace(
                    `___BLANK_${blank.num}___`,
                    `<span style="color:var(--accent-3);font-weight:700">${getCircledNum(blank.num)}</span> <input type="text" class="blank-input" id="exam-blank-${eq.num}-${blank.num}" placeholder="${blank.hint}" style="width:200px;" data-answer="${blank.answer}">`
                );
            });

            html += `<div class="question-code"><pre>${escapedCode}</pre></div>`;
        } else if (eq.answer) {
            // Output/Error question
            html += `<div class="question-code"><pre>${escapeHtml(eq.code)}</pre></div>
                <div class="answer-area">
                    <textarea id="exam-answer-${eq.num}" placeholder="Cevabınızı buraya yazın..." rows="8"></textarea>
                </div>`;
        }

        html += `<div class="feedback" id="exam-feedback-${eq.num}"></div></div>`;
    });

    html += `<div class="exam-submit-area">
        <button class="btn btn-primary btn-lg" onclick="submitExam()">
            📤 Sınavı Bitir ve Kontrol Et
        </button>
    </div>`;

    document.getElementById('examBody').innerHTML = html;

    // Start timer
    examTimer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    examTimeLeft--;
    const mins = Math.floor(examTimeLeft / 60);
    const secs = examTimeLeft % 60;
    const display = document.getElementById('timerDisplay');
    if (!display) return;

    display.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    if (examTimeLeft <= 300) display.className = 'timer-display danger';
    else if (examTimeLeft <= 600) display.className = 'timer-display warning';

    if (examTimeLeft <= 0) {
        clearInterval(examTimer);
        submitExam();
    }
}

function submitExam() {
    clearInterval(examTimer);
    let totalScore = 0;
    let maxScore = 0;

    EXAM_QUESTIONS.forEach(eq => {
        maxScore += eq.points;

        if (eq.blanks) {
            let correct = 0;
            eq.blanks.forEach(blank => {
                const input = document.getElementById(`exam-blank-${eq.num}-${blank.num}`);
                if (!input) return;
                const userVal = input.value.trim().toLowerCase();
                const correctVal = blank.answer.toLowerCase();

                const isMatch = userVal === correctVal ||
                    userVal.replace(/\s/g, '') === correctVal.replace(/\s/g, '') ||
                    (correctVal === 'public interface' && userVal === 'interface');

                if (isMatch) {
                    input.classList.add('correct');
                    correct++;
                } else {
                    input.classList.add('incorrect');
                    const span = document.createElement('span');
                    span.style.cssText = 'color:#00b894;font-size:0.8rem;margin-left:6px;font-family:JetBrains Mono,monospace;';
                    span.textContent = `→ ${blank.answer}`;
                    input.parentNode.insertBefore(span, input.nextSibling);
                }
                input.readOnly = true;
            });

            const questionScore = Math.round((correct / eq.blanks.length) * eq.points);
            totalScore += questionScore;

            const feedbackEl = document.getElementById(`exam-feedback-${eq.num}`);
            if (feedbackEl) {
                feedbackEl.className = `feedback show ${correct === eq.blanks.length ? 'correct' : 'incorrect'}`;
                feedbackEl.innerHTML = `${correct}/${eq.blanks.length} doğru — ${questionScore}/${eq.points} puan`;
            }
        } else if (eq.answer) {
            const feedbackEl = document.getElementById(`exam-feedback-${eq.num}`);
            if (feedbackEl) {
                feedbackEl.className = 'feedback show';
                feedbackEl.innerHTML = `<strong>Doğru Cevap:</strong><br><pre style="margin-top:8px;white-space:pre-wrap;font-family:JetBrains Mono,monospace;color:var(--success);">${escapeHtml(eq.answer)}</pre>`;
            }
        }
    });

    // Show score
    const scoreHtml = `<div style="text-align:center;padding:40px;background:var(--bg-card);border-radius:var(--radius);border:1px solid var(--border);margin-bottom:24px;">
        <h2 style="margin-bottom:16px;">Sınav Sonucu</h2>
        <div style="font-size:4rem;font-weight:900;background:var(--gradient-hero);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;">
            ${totalScore} / ${maxScore}
        </div>
        <p style="color:var(--text-secondary);font-size:1.1rem;">
            ${totalScore >= 90 ? '🎉 Mükemmel! Sınava çok hazırsın!' :
            totalScore >= 70 ? '👍 İyi gidiyorsun! Biraz daha pratik yap.' :
            totalScore >= 50 ? '⚠️ Konuları tekrar gözden geçirmelisin.' :
            '📚 Konuları baştan çalışmanı öneririm.'}
        </p>
        <button class="btn btn-primary" style="margin-top:20px;" onclick="location.reload()">🔄 Yeniden Dene</button>
    </div>`;

    const timerEl = document.getElementById('examTimer');
    if (timerEl) {
        timerEl.innerHTML = scoreHtml;
        timerEl.style.position = 'relative';
        timerEl.style.top = '0';
    }

    window.scrollTo(0, 0);
}

// ===== UTILITY =====
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function normalize(str) {
    return str.replace(/[\n\r\t ]+/g, ' ').trim();
}

function getCircledNum(n) {
    const nums = ['', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨'];
    return nums[n] || `(${n})`;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    updateStats();
});
