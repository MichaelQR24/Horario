// Schedule Configuration
const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const START_HOUR = 7;
const END_HOUR = 23;
const SLOT_DURATION = 45;

// Firebase Initialization
let firebaseApp = null;
let firebaseAuth = null;
let firebaseDb = null;
let currentUser = null;

try {
    if (typeof firebase !== 'undefined' && typeof firebaseConfig !== 'undefined') {
        firebaseApp = firebase.initializeApp(firebaseConfig);
        firebaseAuth = firebase.auth();
        firebaseDb = firebase.firestore();
        console.log('Firebase initialized successfully');
    }
} catch (e) {
    console.log('Firebase not available:', e.message);
}

// Activity Types
const ACTIVITIES = {
    WETALK: { name: '🗣️ WeTalk', class: 'wetalk', duration: 120 },
    EXERCISE: { name: '💪 Ejercicio', class: 'exercise', duration: 45 },
    DATACAMP: { name: '📊 DataCamp', class: 'datacamp', duration: 45, link: 'https://www.datacamp.com' },
    PLATZI: { name: '🚀 Platzi', class: 'platzi', duration: 45, link: 'https://platzi.com' },
    HYGIENE: { name: '🚿 Aseo', class: 'hygiene', duration: 30 },
    BREAKFAST: { name: '🍳 Desayuno', class: 'breakfast', duration: 30 },
    LUNCH: { name: '🍲 Almuerzo', class: 'lunch', duration: 45 },
    DINNER: { name: '🌙 Cena', class: 'dinner', duration: 45 },
    BREAK: { name: '☕ Descanso', class: 'break', duration: 15 },
    FREE: { name: '✨ Libre', class: 'free', duration: 45 }
};

// Schedule Data
const scheduleData = {
    0: [
        { start: "07:00", activity: ACTIVITIES.HYGIENE, duration: 30 },
        { start: "07:30", activity: ACTIVITIES.BREAKFAST, duration: 30 },
        { start: "08:00", activity: ACTIVITIES.WETALK, duration: 120 },
        { start: "10:00", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "10:15", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "11:00", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "11:15", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "12:00", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "12:15", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "13:00", activity: ACTIVITIES.LUNCH, duration: 45 },
        { start: "13:45", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "14:30", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "14:45", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "15:30", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "15:45", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "16:30", activity: ACTIVITIES.FREE, duration: 30 },
        { start: "17:00", activity: ACTIVITIES.EXERCISE, duration: 45 },
        { start: "17:45", activity: ACTIVITIES.FREE, duration: 45 },
        { start: "18:30", activity: ACTIVITIES.FREE, duration: 30 },
        { start: "19:00", activity: ACTIVITIES.DINNER, duration: 45 },
        { start: "19:45", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "20:30", activity: ACTIVITIES.FREE, duration: 150 }
    ],
    1: [
        { start: "07:00", activity: ACTIVITIES.HYGIENE, duration: 30 },
        { start: "07:30", activity: ACTIVITIES.BREAKFAST, duration: 30 },
        { start: "08:00", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "08:45", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "09:00", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "09:45", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "10:00", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "10:45", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "11:00", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "11:45", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "12:00", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "12:45", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "13:00", activity: ACTIVITIES.LUNCH, duration: 45 },
        { start: "13:45", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "14:30", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "14:45", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "15:30", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "15:45", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "16:30", activity: ACTIVITIES.FREE, duration: 30 },
        { start: "17:00", activity: ACTIVITIES.EXERCISE, duration: 45 },
        { start: "17:45", activity: ACTIVITIES.FREE, duration: 45 },
        { start: "18:30", activity: ACTIVITIES.FREE, duration: 30 },
        { start: "19:00", activity: ACTIVITIES.DINNER, duration: 45 },
        { start: "19:45", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "20:30", activity: ACTIVITIES.FREE, duration: 150 }
    ],
    2: [
        { start: "07:00", activity: ACTIVITIES.HYGIENE, duration: 30 },
        { start: "07:30", activity: ACTIVITIES.BREAKFAST, duration: 30 },
        { start: "08:00", activity: ACTIVITIES.WETALK, duration: 120 },
        { start: "10:00", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "10:15", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "11:00", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "11:15", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "12:00", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "12:15", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "13:00", activity: ACTIVITIES.LUNCH, duration: 45 },
        { start: "13:45", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "14:30", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "14:45", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "15:30", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "15:45", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "16:30", activity: ACTIVITIES.FREE, duration: 30 },
        { start: "17:00", activity: ACTIVITIES.EXERCISE, duration: 45 },
        { start: "17:45", activity: ACTIVITIES.FREE, duration: 45 },
        { start: "18:30", activity: ACTIVITIES.FREE, duration: 30 },
        { start: "19:00", activity: ACTIVITIES.DINNER, duration: 45 },
        { start: "19:45", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "20:30", activity: ACTIVITIES.FREE, duration: 150 }
    ],
    3: [
        { start: "07:00", activity: ACTIVITIES.HYGIENE, duration: 30 },
        { start: "07:30", activity: ACTIVITIES.BREAKFAST, duration: 30 },
        { start: "08:00", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "08:45", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "09:00", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "09:45", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "10:00", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "10:45", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "11:00", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "11:45", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "12:00", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "12:45", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "13:00", activity: ACTIVITIES.LUNCH, duration: 45 },
        { start: "13:45", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "14:30", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "14:45", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "15:30", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "15:45", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "16:30", activity: ACTIVITIES.FREE, duration: 30 },
        { start: "17:00", activity: ACTIVITIES.EXERCISE, duration: 45 },
        { start: "17:45", activity: ACTIVITIES.FREE, duration: 45 },
        { start: "18:30", activity: ACTIVITIES.FREE, duration: 30 },
        { start: "19:00", activity: ACTIVITIES.DINNER, duration: 45 },
        { start: "19:45", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "20:30", activity: ACTIVITIES.FREE, duration: 150 }
    ],
    4: [
        { start: "07:00", activity: ACTIVITIES.HYGIENE, duration: 30 },
        { start: "07:30", activity: ACTIVITIES.BREAKFAST, duration: 30 },
        { start: "08:00", activity: ACTIVITIES.WETALK, duration: 120 },
        { start: "10:00", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "10:15", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "11:00", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "11:15", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "12:00", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "12:15", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "13:00", activity: ACTIVITIES.LUNCH, duration: 45 },
        { start: "13:45", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "14:30", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "14:45", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "15:30", activity: ACTIVITIES.FREE, duration: 90 },
        { start: "17:00", activity: ACTIVITIES.EXERCISE, duration: 45 },
        { start: "17:45", activity: ACTIVITIES.FREE, duration: 75 },
        { start: "19:00", activity: ACTIVITIES.DINNER, duration: 45 },
        { start: "19:45", activity: ACTIVITIES.FREE, duration: 195 }
    ],
    5: [
        { start: "07:00", activity: ACTIVITIES.HYGIENE, duration: 30 },
        { start: "07:30", activity: ACTIVITIES.BREAKFAST, duration: 30 },
        { start: "08:00", activity: ACTIVITIES.FREE, duration: 60 },
        { start: "09:00", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "09:45", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "10:00", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "10:45", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "11:00", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "11:45", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "12:00", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "12:45", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "13:00", activity: ACTIVITIES.LUNCH, duration: 45 },
        { start: "13:45", activity: ACTIVITIES.FREE, duration: 75 },
        { start: "15:00", activity: ACTIVITIES.FREE, duration: 120 },
        { start: "17:00", activity: ACTIVITIES.EXERCISE, duration: 45 },
        { start: "17:45", activity: ACTIVITIES.FREE, duration: 75 },
        { start: "19:00", activity: ACTIVITIES.DINNER, duration: 45 },
        { start: "19:45", activity: ACTIVITIES.FREE, duration: 195 }
    ],
    6: [
        { start: "07:00", activity: ACTIVITIES.HYGIENE, duration: 30 },
        { start: "07:30", activity: ACTIVITIES.BREAKFAST, duration: 30 },
        { start: "08:00", activity: ACTIVITIES.FREE, duration: 120 },
        { start: "10:00", activity: ACTIVITIES.PLATZI, duration: 45 },
        { start: "10:45", activity: ACTIVITIES.BREAK, duration: 15 },
        { start: "11:00", activity: ACTIVITIES.DATACAMP, duration: 45 },
        { start: "11:45", activity: ACTIVITIES.FREE, duration: 75 },
        { start: "13:00", activity: ACTIVITIES.LUNCH, duration: 45 },
        { start: "13:45", activity: ACTIVITIES.FREE, duration: 195 },
        { start: "17:00", activity: ACTIVITIES.EXERCISE, duration: 45 },
        { start: "17:45", activity: ACTIVITIES.FREE, duration: 75 },
        { start: "19:00", activity: ACTIVITIES.DINNER, duration: 45 },
        { start: "19:45", activity: ACTIVITIES.FREE, duration: 195 }
    ]
};

// ==================== PHASE 1 FEATURES ====================

// LocalStorage keys
const STORAGE_KEYS = {
    COMPLETED: 'schedule_completed',
    THEME: 'schedule_theme'
};

// Load completed tasks from localStorage
function loadCompleted() {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED);
    return saved ? JSON.parse(saved) : {};
}

// Save completed tasks to localStorage
function saveCompleted(completed) {
    localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(completed));
}

// Get today's date key
function getTodayKey() {
    return new Date().toISOString().split('T')[0];
}

// Toggle task completion
function toggleComplete(dayIndex, slotIndex) {
    const completed = loadCompleted();
    const todayKey = getTodayKey();

    if (!completed[todayKey]) {
        completed[todayKey] = {};
    }

    const key = `${dayIndex}-${slotIndex}`;
    completed[todayKey][key] = !completed[todayKey][key];

    saveCompleted(completed);
    updateCellCompletion(dayIndex, slotIndex, completed[todayKey][key]);
    updateProgress();
}

// Update cell visual state
function updateCellCompletion(dayIndex, slotIndex, isCompleted) {
    const cell = document.querySelector(`[data-day="${dayIndex}"][data-slot="${slotIndex}"]`);
    if (cell) {
        cell.classList.toggle('completed', isCompleted);
        const checkbox = cell.querySelector('.task-checkbox');
        if (checkbox) {
            checkbox.checked = isCompleted;
        }
    }
}

// Update progress indicator
function updateProgress() {
    const completed = loadCompleted();
    const todayKey = getTodayKey();
    const todayCompleted = completed[todayKey] || {};

    const today = new Date().getDay();
    const dayIndex = today === 0 ? 6 : today - 1; // Convert to 0=Monday
    const daySchedule = scheduleData[dayIndex] || [];

    const total = daySchedule.filter(s => s.activity.class !== 'free' && s.activity.class !== 'break').length;
    const done = Object.keys(todayCompleted).filter(k => {
        const [d] = k.split('-');
        return parseInt(d) === dayIndex && todayCompleted[k];
    }).length;

    const progressEl = document.getElementById('progressCount');
    if (progressEl) {
        progressEl.textContent = `${done}/${total}`;
    }

    const progressBar = document.getElementById('progressBar');
    if (progressBar && total > 0) {
        progressBar.style.width = `${(done / total) * 100}%`;
    }
}

// Theme management
function loadTheme() {
    return localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
}

function saveTheme(theme) {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
}

function applyTheme(theme) {
    document.body.classList.toggle('light-theme', theme === 'light');
    const icon = document.querySelector('.theme-icon');
    if (icon) {
        icon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
}

function toggleTheme() {
    const current = loadTheme();
    const newTheme = current === 'dark' ? 'light' : 'dark';
    saveTheme(newTheme);
    applyTheme(newTheme);
}

// Helper functions
function timeToString(hours, minutes) {
    const h = hours > 12 ? hours - 12 : hours;
    const period = hours >= 12 ? 'PM' : 'AM';
    const m = minutes.toString().padStart(2, '0');
    return `${h}:${m} ${period}`;
}

function parseTime(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return { hours, minutes };
}

function formatTimeDisplay(timeStr) {
    const { hours, minutes } = parseTime(timeStr);
    return timeToString(hours, minutes);
}

function addMinutes(timeStr, mins) {
    const { hours, minutes } = parseTime(timeStr);
    const totalMinutes = hours * 60 + minutes + mins;
    const newHours = Math.floor(totalMinutes / 60);
    const newMinutes = totalMinutes % 60;
    return `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
}

// Generate the schedule grid
function generateSchedule() {
    const grid = document.getElementById('scheduleGrid');
    grid.innerHTML = '';

    const completed = loadCompleted();
    const todayKey = getTodayKey();
    const todayCompleted = completed[todayKey] || {};

    const today = new Date().getDay();
    const currentDayIndex = today === 0 ? 6 : today - 1;

    DAYS.forEach((day, dayIndex) => {
        const dayColumn = document.createElement('div');
        dayColumn.className = 'day-column';
        if (dayIndex === currentDayIndex) {
            dayColumn.classList.add('current-day');
        }

        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-header';
        dayHeader.innerHTML = `${day}${dayIndex === currentDayIndex ? ' <span class="today-badge">HOY</span>' : ''}`;
        dayColumn.appendChild(dayHeader);

        const daySchedule = scheduleData[dayIndex];
        daySchedule.forEach((slot, slotIndex) => {
            const cell = document.createElement('div');
            cell.className = `activity-cell ${slot.activity.class}`;
            cell.dataset.day = dayIndex;
            cell.dataset.slot = slotIndex;

            const key = `${dayIndex}-${slotIndex}`;
            const isCompleted = todayCompleted[key] || false;
            if (isCompleted) {
                cell.classList.add('completed');
            }

            const endTime = addMinutes(slot.start, slot.duration);
            const timeRange = `${formatTimeDisplay(slot.start)} - ${formatTimeDisplay(endTime)}`;

            const showCheckbox = slot.activity.class !== 'free' && slot.activity.class !== 'break';
            const noteKey = `note-${dayIndex}-${slotIndex}`;
            const hasNote = localStorage.getItem(noteKey);

            cell.innerHTML = `
                ${showCheckbox ? `<input type="checkbox" class="task-checkbox" ${isCompleted ? 'checked' : ''} onclick="event.stopPropagation(); toggleComplete(${dayIndex}, ${slotIndex})">` : ''}
                <button class="note-btn ${hasNote ? 'has-note' : ''}" onclick="event.stopPropagation(); openNoteModal(${dayIndex}, ${slotIndex})" aria-label="Agregar nota">📝</button>
                <div class="activity-time">${timeRange}</div>
                <div class="activity-name">${slot.activity.name}</div>
                <div class="activity-duration">${slot.duration} min</div>
            `;

            cell.title = `${day}: ${slot.activity.name} (${slot.duration} min)`;

            // Click to toggle (for touch devices)
            if (showCheckbox) {
                cell.style.cursor = 'pointer';
                cell.onclick = (e) => {
                    if (e.target.type !== 'checkbox' && !e.target.classList.contains('note-btn')) {
                        toggleComplete(dayIndex, slotIndex);
                    }
                };
            }

            const heightFactor = Math.max(slot.duration / 15, 2);
            cell.style.minHeight = `${heightFactor * 18}px`;

            dayColumn.appendChild(cell);
        });

        grid.appendChild(dayColumn);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme
    applyTheme(loadTheme());

    // Theme toggle button
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.onclick = toggleTheme;
    }

    // Generate schedule
    generateSchedule();

    // Update progress
    updateProgress();

    // Initialize Pomodoro
    initPomodoro();

    // Initialize Reminders
    initReminders();

    // Initialize Phase 4 features
    initSoundSettings();
    initFocusMode();

    // Initialize Phase 5 features
    initGoals();
    initNotes();
    initCalendar();
    initPdfExport();

    // Initialize Phase 6 features
    initFirebaseAuth();

    // Animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.summary-card, .tip').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
        observer.observe(el);
    });
});

// ==================== PHASE 2: POMODORO TIMER ====================

const POMODORO_STORAGE_KEY = 'pomodoro_settings';

let pomodoroState = {
    timeLeft: 45 * 60, // in seconds
    isRunning: false,
    intervalId: null,
    selectedTime: 45
};

function initPomodoro() {
    const startBtn = document.getElementById('pomodoroStart');
    const pauseBtn = document.getElementById('pomodoroPause');
    const resetBtn = document.getElementById('pomodoroReset');
    const presetBtns = document.querySelectorAll('.preset-btn');

    if (startBtn) startBtn.onclick = startPomodoro;
    if (pauseBtn) pauseBtn.onclick = pausePomodoro;
    if (resetBtn) resetBtn.onclick = resetPomodoro;

    presetBtns.forEach(btn => {
        btn.onclick = () => {
            const time = parseInt(btn.dataset.time);
            selectPreset(time);
            presetBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        };
    });

    updatePomodoroDisplay();
}

function startPomodoro() {
    if (pomodoroState.isRunning) return;

    pomodoroState.isRunning = true;
    updatePomodoroButtons();
    updatePomodoroLabel('⏱️ ¡En progreso!');

    pomodoroState.intervalId = setInterval(() => {
        pomodoroState.timeLeft--;

        if (pomodoroState.timeLeft <= 0) {
            completePomodoro();
        } else {
            updatePomodoroDisplay();
        }
    }, 1000);
}

function pausePomodoro() {
    if (!pomodoroState.isRunning) return;

    pomodoroState.isRunning = false;
    clearInterval(pomodoroState.intervalId);
    updatePomodoroButtons();
    updatePomodoroLabel('⏸️ Pausado');
}

function resetPomodoro() {
    pomodoroState.isRunning = false;
    clearInterval(pomodoroState.intervalId);
    pomodoroState.timeLeft = pomodoroState.selectedTime * 60;
    updatePomodoroDisplay();
    updatePomodoroButtons();
    updatePomodoroLabel('Listo para empezar');
}

function selectPreset(minutes) {
    pomodoroState.selectedTime = minutes;
    pomodoroState.timeLeft = minutes * 60;
    pomodoroState.isRunning = false;
    clearInterval(pomodoroState.intervalId);
    updatePomodoroDisplay();
    updatePomodoroButtons();
    updatePomodoroLabel('Listo para empezar');
}

function completePomodoro() {
    pomodoroState.isRunning = false;
    clearInterval(pomodoroState.intervalId);
    updatePomodoroLabel('🎉 ¡Completado!');
    updatePomodoroButtons();

    // Play sound and show notification
    playNotificationSound();
    showNotification('⏰ Pomodoro Completado', '¡Buen trabajo! Toma un descanso de 5-10 minutos.');

    // Flash animation
    const widget = document.getElementById('pomodoroWidget');
    if (widget) {
        widget.classList.add('complete-flash');
        setTimeout(() => widget.classList.remove('complete-flash'), 2000);
    }
}

function updatePomodoroDisplay() {
    const display = document.getElementById('pomodoroTime');
    if (display) {
        const minutes = Math.floor(pomodoroState.timeLeft / 60);
        const seconds = pomodoroState.timeLeft % 60;
        display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

function updatePomodoroLabel(text) {
    const label = document.getElementById('pomodoroLabel');
    if (label) label.textContent = text;
}

function updatePomodoroButtons() {
    const startBtn = document.getElementById('pomodoroStart');
    const pauseBtn = document.getElementById('pomodoroPause');

    if (startBtn) startBtn.disabled = pomodoroState.isRunning;
    if (pauseBtn) pauseBtn.disabled = !pomodoroState.isRunning;
}

// ==================== PHASE 2: NOTIFICATIONS ====================

function requestNotificationPermission() {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            const btn = document.getElementById('enableNotifications');
            if (permission === 'granted') {
                if (btn) {
                    btn.textContent = '✅ Activadas';
                    btn.disabled = true;
                }
                showNotification('🔔 Notificaciones Activadas', 'Recibirás alertas de tu horario.');
            } else {
                if (btn) btn.textContent = '❌ Denegadas';
            }
        });
    }
}

function showNotification(title, body) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(title, {
            body: body,
            icon: '📅',
            badge: '📅'
        });
    }
}

// ==================== PHASE 4: SOUND SYSTEM ====================

const SOUND_STORAGE_KEY = 'sound_preferences';

// Sound definitions using Web Audio API parameters
const SOUND_TONES = {
    gentle: {
        name: 'Suave',
        frequencies: [523.25, 659.25, 783.99],
        type: 'sine',
        duration: 0.3,
        gap: 0.15
    },
    chime: {
        name: 'Campana',
        frequencies: [880, 1174.66, 1396.91],
        type: 'triangle',
        duration: 0.4,
        gap: 0.1
    },
    alert: {
        name: 'Alerta',
        frequencies: [800, 600, 800],
        type: 'square',
        duration: 0.15,
        gap: 0.05
    },
    success: {
        name: 'Éxito',
        frequencies: [523.25, 659.25, 783.99, 1046.50],
        type: 'sine',
        duration: 0.2,
        gap: 0.1
    }
};

function loadSoundPreferences() {
    const saved = localStorage.getItem(SOUND_STORAGE_KEY);
    return saved ? JSON.parse(saved) : { selectedSound: 'gentle', muted: false };
}

function saveSoundPreferences(prefs) {
    localStorage.setItem(SOUND_STORAGE_KEY, JSON.stringify(prefs));
}

function playSound(soundType = null) {
    const prefs = loadSoundPreferences();

    // Check if muted
    if (prefs.muted) {
        return;
    }

    const sound = SOUND_TONES[soundType || prefs.selectedSound] || SOUND_TONES.gentle;

    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();

        sound.frequencies.forEach((freq, index) => {
            const startTime = audioContext.currentTime + index * (sound.duration + sound.gap);

            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = freq;
            oscillator.type = sound.type;

            gainNode.gain.setValueAtTime(0.3, startTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + sound.duration);

            oscillator.start(startTime);
            oscillator.stop(startTime + sound.duration);
        });
    } catch (e) {
        console.log('Audio not supported:', e);
    }
}

function playNotificationSound() {
    playSound();
}

function initSoundSettings() {
    const soundSelect = document.getElementById('soundSelect');
    const previewBtn = document.getElementById('previewSound');
    const muteToggle = document.getElementById('muteToggle');

    if (!soundSelect || !previewBtn || !muteToggle) return;

    // Load saved preferences
    const prefs = loadSoundPreferences();
    soundSelect.value = prefs.selectedSound;
    muteToggle.checked = prefs.muted;

    // Sound selection change
    soundSelect.addEventListener('change', () => {
        const newPrefs = loadSoundPreferences();
        newPrefs.selectedSound = soundSelect.value;
        saveSoundPreferences(newPrefs);
    });

    // Preview button
    previewBtn.addEventListener('click', () => {
        const wasMuted = loadSoundPreferences().muted;
        // Temporarily unmute for preview
        const prefs = loadSoundPreferences();
        prefs.muted = false;
        saveSoundPreferences(prefs);

        playSound(soundSelect.value);

        // Restore mute state after a delay
        setTimeout(() => {
            prefs.muted = wasMuted;
            saveSoundPreferences(prefs);
        }, 1000);
    });

    // Mute toggle
    muteToggle.addEventListener('change', () => {
        const newPrefs = loadSoundPreferences();
        newPrefs.muted = muteToggle.checked;
        saveSoundPreferences(newPrefs);
    });
}

// ==================== PHASE 4: FOCUS MODE ====================

let focusModeState = {
    active: false,
    intervalId: null
};

function initFocusMode() {
    const focusBtn = document.getElementById('focusModeBtn');
    const focusOverlay = document.getElementById('focusOverlay');
    const focusClose = document.getElementById('focusClose');
    const focusStart = document.getElementById('focusStart');
    const focusPause = document.getElementById('focusPause');
    const focusReset = document.getElementById('focusReset');

    if (!focusBtn || !focusOverlay) return;

    // Open focus mode
    focusBtn.addEventListener('click', openFocusMode);

    // Close focus mode
    focusClose.addEventListener('click', closeFocusMode);

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && focusModeState.active) {
            closeFocusMode();
        }
    });

    // Focus mode controls - sync with main Pomodoro
    focusStart.addEventListener('click', () => {
        startPomodoro();
        updateFocusControls();
    });

    focusPause.addEventListener('click', () => {
        pausePomodoro();
        updateFocusControls();
    });

    focusReset.addEventListener('click', () => {
        resetPomodoro();
        updateFocusControls();
    });
}

function openFocusMode() {
    const focusOverlay = document.getElementById('focusOverlay');
    focusModeState.active = true;
    focusOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Set current task based on time of day
    updateFocusTask();

    // Sync timer display
    updateFocusTimer();
    updateFocusControls();

    // Start syncing timer with main Pomodoro
    focusModeState.intervalId = setInterval(() => {
        updateFocusTimer();
        updateFocusControls();
    }, 100);

    // Focus trap - focus the first button
    const focusStart = document.getElementById('focusStart');
    if (focusStart) focusStart.focus();
}

function closeFocusMode() {
    const focusOverlay = document.getElementById('focusOverlay');
    focusModeState.active = false;
    focusOverlay.classList.remove('active');
    document.body.style.overflow = '';

    if (focusModeState.intervalId) {
        clearInterval(focusModeState.intervalId);
        focusModeState.intervalId = null;
    }
}

function updateFocusTimer() {
    const focusTime = document.getElementById('focusTime');
    const focusStatus = document.getElementById('focusStatus');

    if (focusTime && focusStatus) {
        const minutes = Math.floor(pomodoroState.timeLeft / 60);
        const seconds = pomodoroState.timeLeft % 60;
        focusTime.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (pomodoroState.isRunning) {
            focusStatus.textContent = '⏱️ ¡En progreso!';
        } else if (pomodoroState.timeLeft <= 0) {
            focusStatus.textContent = '🎉 ¡Completado!';
        } else {
            focusStatus.textContent = 'Listo para empezar';
        }
    }
}

function updateFocusControls() {
    const focusStart = document.getElementById('focusStart');
    const focusPause = document.getElementById('focusPause');

    if (focusStart) focusStart.disabled = pomodoroState.isRunning;
    if (focusPause) focusPause.disabled = !pomodoroState.isRunning;
}

function updateFocusTask() {
    const focusTaskName = document.getElementById('focusTaskName');
    if (!focusTaskName) return;

    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const today = now.getDay();
    const dayIndex = today === 0 ? 6 : today - 1;

    const daySchedule = scheduleData[dayIndex] || [];
    let currentTask = 'Tiempo libre';

    for (const slot of daySchedule) {
        const [slotHour, slotMin] = slot.start.split(':').map(Number);
        const slotStartMinutes = slotHour * 60 + slotMin;
        const slotEndMinutes = slotStartMinutes + slot.duration;
        const currentTotalMinutes = currentHour * 60 + currentMinutes;

        if (currentTotalMinutes >= slotStartMinutes && currentTotalMinutes < slotEndMinutes) {
            currentTask = slot.activity.name;
            break;
        }
    }

    focusTaskName.textContent = currentTask;
}

// ==================== PHASE 5: GOALS SYSTEM ====================

const GOALS_STORAGE_KEY = 'weekly_goals';

function loadGoals() {
    const saved = localStorage.getItem(GOALS_STORAGE_KEY);
    return saved ? JSON.parse(saved) : {
        datacamp: 8,
        platzi: 8,
        exercise: 7,
        celebratedGoals: {}
    };
}

function saveGoals(goals) {
    localStorage.setItem(GOALS_STORAGE_KEY, JSON.stringify(goals));
}

function initGoals() {
    const configBtn = document.getElementById('goalsConfigBtn');
    const goalsModal = document.getElementById('goalsModal');
    const goalsModalClose = document.getElementById('goalsModalClose');
    const goalsForm = document.getElementById('goalsForm');
    const celebration = document.getElementById('goalCelebration');

    if (!configBtn || !goalsModal) return;

    // Load saved goals
    const goals = loadGoals();
    updateGoalInputs(goals);
    updateGoalTargets(goals);
    updateGoalProgress();

    // Open config modal
    configBtn.addEventListener('click', () => {
        goalsModal.classList.add('active');
    });

    // Close config modal
    goalsModalClose.addEventListener('click', () => {
        goalsModal.classList.remove('active');
    });

    // Close on backdrop click
    goalsModal.addEventListener('click', (e) => {
        if (e.target === goalsModal) {
            goalsModal.classList.remove('active');
        }
    });

    // Save goals form
    goalsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newGoals = loadGoals();
        newGoals.datacamp = parseInt(document.getElementById('datacampGoalInput').value) || 8;
        newGoals.platzi = parseInt(document.getElementById('platziGoalInput').value) || 8;
        newGoals.exercise = parseInt(document.getElementById('exerciseGoalInput').value) || 7;
        saveGoals(newGoals);
        updateGoalTargets(newGoals);
        updateGoalProgress();
        goalsModal.classList.remove('active');
    });

    // Close celebration on click
    celebration.addEventListener('click', () => {
        celebration.classList.remove('active');
    });
}

function updateGoalInputs(goals) {
    const datacampInput = document.getElementById('datacampGoalInput');
    const platziInput = document.getElementById('platziGoalInput');
    const exerciseInput = document.getElementById('exerciseGoalInput');

    if (datacampInput) datacampInput.value = goals.datacamp;
    if (platziInput) platziInput.value = goals.platzi;
    if (exerciseInput) exerciseInput.value = goals.exercise;
}

function updateGoalTargets(goals) {
    document.getElementById('datacampGoalTarget').textContent = goals.datacamp;
    document.getElementById('platziGoalTarget').textContent = goals.platzi;
    document.getElementById('exerciseGoalTarget').textContent = goals.exercise;
}

function updateGoalProgress() {
    const goals = loadGoals();
    const completed = loadCompleted();
    const weekKey = getWeekKey();

    // Calculate hours for each activity this week
    let datacampHours = 0;
    let platziHours = 0;
    let exerciseDays = new Set();

    // Check last 7 days
    for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateKey = date.toISOString().split('T')[0];
        const dayData = completed[dateKey] || {};

        const dayOfWeek = date.getDay();
        const dayIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
        const daySchedule = scheduleData[dayIndex] || [];

        Object.keys(dayData).forEach(key => {
            if (!dayData[key]) return;
            const [d, s] = key.split('-').map(Number);
            if (d !== dayIndex) return;

            const slot = daySchedule[s];
            if (!slot) return;

            if (slot.activity.class === 'datacamp') {
                datacampHours += slot.duration / 60;
            } else if (slot.activity.class === 'platzi') {
                platziHours += slot.duration / 60;
            } else if (slot.activity.class === 'exercise') {
                exerciseDays.add(dateKey);
            }
        });
    }

    // Update UI
    const dcCurrent = document.getElementById('datacampGoalCurrent');
    const pzCurrent = document.getElementById('platziGoalCurrent');
    const exCurrent = document.getElementById('exerciseGoalCurrent');

    if (dcCurrent) dcCurrent.textContent = datacampHours.toFixed(1);
    if (pzCurrent) pzCurrent.textContent = platziHours.toFixed(1);
    if (exCurrent) exCurrent.textContent = exerciseDays.size;

    // Update progress bars
    const dcBar = document.getElementById('datacampGoalBar');
    const pzBar = document.getElementById('platziGoalBar');
    const exBar = document.getElementById('exerciseGoalBar');

    const dcPercent = Math.min((datacampHours / goals.datacamp) * 100, 100);
    const pzPercent = Math.min((platziHours / goals.platzi) * 100, 100);
    const exPercent = Math.min((exerciseDays.size / goals.exercise) * 100, 100);

    if (dcBar) dcBar.style.width = dcPercent + '%';
    if (pzBar) pzBar.style.width = pzPercent + '%';
    if (exBar) exBar.style.width = exPercent + '%';

    // Mark completed goals
    document.querySelectorAll('.goal-item').forEach(item => {
        const goal = item.dataset.goal;
        let isComplete = false;
        if (goal === 'datacamp') isComplete = datacampHours >= goals.datacamp;
        if (goal === 'platzi') isComplete = platziHours >= goals.platzi;
        if (goal === 'exercise') isComplete = exerciseDays.size >= goals.exercise;
        item.classList.toggle('completed', isComplete);
    });

    // Check for celebration
    checkGoalCelebration(goals, datacampHours, platziHours, exerciseDays.size);
}

function getWeekKey() {
    const now = new Date();
    const start = new Date(now);
    start.setDate(start.getDate() - start.getDay());
    return start.toISOString().split('T')[0];
}

function checkGoalCelebration(goals, dcHours, pzHours, exDays) {
    const weekKey = getWeekKey();
    const savedGoals = loadGoals();

    if (!savedGoals.celebratedGoals) {
        savedGoals.celebratedGoals = {};
    }
    if (!savedGoals.celebratedGoals[weekKey]) {
        savedGoals.celebratedGoals[weekKey] = {};
    }

    const celebrated = savedGoals.celebratedGoals[weekKey];

    // Check each goal
    if (dcHours >= goals.datacamp && !celebrated.datacamp) {
        showCelebration('¡Completaste tu meta de DataCamp!', '📊');
        celebrated.datacamp = true;
        saveGoals(savedGoals);
    } else if (pzHours >= goals.platzi && !celebrated.platzi) {
        showCelebration('¡Completaste tu meta de Platzi!', '🚀');
        celebrated.platzi = true;
        saveGoals(savedGoals);
    } else if (exDays >= goals.exercise && !celebrated.exercise) {
        showCelebration('¡Completaste tu meta de Ejercicio!', '💪');
        celebrated.exercise = true;
        saveGoals(savedGoals);
    }
}

function showCelebration(message, icon = '🎉') {
    const celebration = document.getElementById('goalCelebration');
    const celebrationIcon = celebration.querySelector('.celebration-icon');
    const celebrationMessage = document.getElementById('celebrationMessage');

    celebrationIcon.textContent = icon;
    celebrationMessage.textContent = message;
    celebration.classList.add('active');

    playSound('success');

    // Auto-hide after 4 seconds
    setTimeout(() => {
        celebration.classList.remove('active');
    }, 4000);
}

// ==================== PHASE 5: NOTES SYSTEM ====================

let currentNoteData = { dayIndex: null, slotIndex: null };

function initNotes() {
    const notesModal = document.getElementById('notesModal');
    const notesModalClose = document.getElementById('notesModalClose');
    const notesForm = document.getElementById('notesForm');
    const deleteNoteBtn = document.getElementById('deleteNoteBtn');

    if (!notesModal) return;

    // Close modal
    notesModalClose.addEventListener('click', () => {
        notesModal.classList.remove('active');
    });

    // Close on backdrop click
    notesModal.addEventListener('click', (e) => {
        if (e.target === notesModal) {
            notesModal.classList.remove('active');
        }
    });

    // Save note
    notesForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveNote();
    });

    // Delete note
    deleteNoteBtn.addEventListener('click', deleteNote);
}

function openNoteModal(dayIndex, slotIndex) {
    const notesModal = document.getElementById('notesModal');
    const noteActivityInfo = document.getElementById('noteActivityInfo');
    const noteTextarea = document.getElementById('noteTextarea');

    currentNoteData = { dayIndex, slotIndex };

    // Get activity info
    const daySchedule = scheduleData[dayIndex] || [];
    const slot = daySchedule[slotIndex];
    const dayName = DAYS[dayIndex];

    if (slot) {
        noteActivityInfo.textContent = `${dayName} - ${slot.activity.name} (${slot.start})`;
    }

    // Load existing note
    const noteKey = `note-${dayIndex}-${slotIndex}`;
    const savedNote = localStorage.getItem(noteKey) || '';
    noteTextarea.value = savedNote;

    notesModal.classList.add('active');
    noteTextarea.focus();
}

function saveNote() {
    const noteTextarea = document.getElementById('noteTextarea');
    const notesModal = document.getElementById('notesModal');
    const { dayIndex, slotIndex } = currentNoteData;

    const noteKey = `note-${dayIndex}-${slotIndex}`;
    const noteText = noteTextarea.value.trim();

    if (noteText) {
        localStorage.setItem(noteKey, noteText);
    } else {
        localStorage.removeItem(noteKey);
    }

    // Update note button indicator
    updateNoteIndicator(dayIndex, slotIndex, !!noteText);

    notesModal.classList.remove('active');
}

function deleteNote() {
    const noteTextarea = document.getElementById('noteTextarea');
    const notesModal = document.getElementById('notesModal');
    const { dayIndex, slotIndex } = currentNoteData;

    const noteKey = `note-${dayIndex}-${slotIndex}`;
    localStorage.removeItem(noteKey);
    noteTextarea.value = '';

    // Update note button indicator
    updateNoteIndicator(dayIndex, slotIndex, false);

    notesModal.classList.remove('active');
}

function updateNoteIndicator(dayIndex, slotIndex, hasNote) {
    const cell = document.querySelector(`[data-day="${dayIndex}"][data-slot="${slotIndex}"]`);
    if (cell) {
        const noteBtn = cell.querySelector('.note-btn');
        if (noteBtn) {
            noteBtn.classList.toggle('has-note', hasNote);
        }
    }
}

// ==================== PHASE 6: FIREBASE AUTH & SYNC ====================

function initFirebaseAuth() {
    const cloudBtn = document.getElementById('cloudBtn');
    const authModal = document.getElementById('authModal');
    const authModalClose = document.getElementById('authModalClose');
    const authTabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const syncNowBtn = document.getElementById('syncNowBtn');

    if (!cloudBtn || !authModal || !firebaseAuth) return;

    // Auth state listener
    firebaseAuth.onAuthStateChanged(user => {
        currentUser = user;
        updateAuthUI(user);
        if (user) {
            loadFromCloud();
        }
    });

    // Open auth modal
    cloudBtn.addEventListener('click', () => {
        authModal.classList.add('active');
    });

    // Close modal
    authModalClose.addEventListener('click', () => {
        authModal.classList.remove('active');
    });

    authModal.addEventListener('click', (e) => {
        if (e.target === authModal) {
            authModal.classList.remove('active');
        }
    });

    // Tab switching
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            if (tab.dataset.tab === 'login') {
                loginForm.style.display = 'block';
                registerForm.style.display = 'none';
            } else {
                loginForm.style.display = 'none';
                registerForm.style.display = 'block';
            }
        });
    });

    // Login
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const errorEl = document.getElementById('loginError');

        try {
            errorEl.textContent = '';
            await firebaseAuth.signInWithEmailAndPassword(email, password);
            authModal.classList.remove('active');
        } catch (error) {
            errorEl.textContent = getAuthErrorMessage(error.code);
        }
    });

    // Register
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const passwordConfirm = document.getElementById('registerPasswordConfirm').value;
        const errorEl = document.getElementById('registerError');

        if (password !== passwordConfirm) {
            errorEl.textContent = 'Las contraseñas no coinciden';
            return;
        }

        try {
            errorEl.textContent = '';
            await firebaseAuth.createUserWithEmailAndPassword(email, password);
            await saveToCloud();
            authModal.classList.remove('active');
        } catch (error) {
            errorEl.textContent = getAuthErrorMessage(error.code);
        }
    });

    // Logout
    logoutBtn.addEventListener('click', async () => {
        await firebaseAuth.signOut();
        authModal.classList.remove('active');
    });

    // Sync now
    syncNowBtn.addEventListener('click', async () => {
        await saveToCloud();
        updateLastSyncTime();
    });
}

function updateAuthUI(user) {
    const userInfo = document.getElementById('userInfo');
    const userEmail = document.getElementById('userEmail');
    const cloudBtn = document.getElementById('cloudBtn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loggedInView = document.getElementById('loggedInView');
    const profileEmail = document.getElementById('profileEmail');
    const authTabs = document.querySelector('.auth-tabs');

    if (user) {
        // Logged in
        userInfo.style.display = 'flex';
        userEmail.textContent = user.email.split('@')[0];
        cloudBtn.innerHTML = '☁️ ✓';
        cloudBtn.title = 'Sincronizado';

        // Modal view
        if (loginForm) loginForm.style.display = 'none';
        if (registerForm) registerForm.style.display = 'none';
        if (authTabs) authTabs.style.display = 'none';
        if (loggedInView) loggedInView.style.display = 'block';
        if (profileEmail) profileEmail.textContent = user.email;
    } else {
        // Logged out
        userInfo.style.display = 'none';
        cloudBtn.innerHTML = '☁️ Sync';
        cloudBtn.title = 'Sincronizar con la nube';

        // Modal view
        if (loginForm) loginForm.style.display = 'block';
        if (registerForm) registerForm.style.display = 'none';
        if (authTabs) authTabs.style.display = 'flex';
        if (loggedInView) loggedInView.style.display = 'none';
    }
}

async function saveToCloud() {
    if (!currentUser || !firebaseDb) return;

    const syncStatus = document.getElementById('syncStatus');
    if (syncStatus) {
        syncStatus.textContent = '🔄';
        syncStatus.classList.add('syncing');
    }

    try {
        const userData = {
            completed: loadCompleted(),
            goals: loadGoals(),
            scheduleData: scheduleData,
            updatedAt: new Date().toISOString()
        };

        // Also collect notes
        const notes = {};
        for (let d = 0; d < 7; d++) {
            const daySchedule = scheduleData[d] || [];
            for (let s = 0; s < daySchedule.length; s++) {
                const noteKey = `note-${d}-${s}`;
                const note = localStorage.getItem(noteKey);
                if (note) notes[noteKey] = note;
            }
        }
        userData.notes = notes;

        await firebaseDb.collection('users').doc(currentUser.uid).set(userData);

        if (syncStatus) {
            syncStatus.textContent = '✓';
            syncStatus.classList.remove('syncing');
        }

        updateLastSyncTime();
        console.log('Data saved to cloud');
    } catch (error) {
        console.error('Error saving to cloud:', error);
        if (syncStatus) {
            syncStatus.textContent = '⚠️';
            syncStatus.classList.remove('syncing');
        }
    }
}

async function loadFromCloud() {
    if (!currentUser || !firebaseDb) return;

    try {
        const doc = await firebaseDb.collection('users').doc(currentUser.uid).get();

        if (doc.exists) {
            const data = doc.data();

            // Load completed tasks
            if (data.completed) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data.completed));
            }

            // Load goals
            if (data.goals) {
                localStorage.setItem(GOALS_STORAGE_KEY, JSON.stringify(data.goals));
            }

            // Load notes
            if (data.notes) {
                Object.keys(data.notes).forEach(key => {
                    localStorage.setItem(key, data.notes[key]);
                });
            }

            // Refresh UI
            generateSchedule();
            updateProgress();
            updateGoalProgress();

            console.log('Data loaded from cloud');
            updateLastSyncTime();
        }
    } catch (error) {
        console.error('Error loading from cloud:', error);
    }
}

function updateLastSyncTime() {
    const lastSyncEl = document.getElementById('lastSyncTime');
    if (lastSyncEl) {
        const now = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
        lastSyncEl.textContent = `Última sincronización: ${now}`;
    }
}

function getAuthErrorMessage(code) {
    const messages = {
        'auth/email-already-in-use': 'Este correo ya está registrado',
        'auth/invalid-email': 'Correo electrónico inválido',
        'auth/operation-not-allowed': 'Operación no permitida',
        'auth/weak-password': 'La contraseña es muy débil',
        'auth/user-disabled': 'Usuario deshabilitado',
        'auth/user-not-found': 'Usuario no encontrado',
        'auth/wrong-password': 'Contraseña incorrecta',
        'auth/invalid-credential': 'Credenciales inválidas'
    };
    return messages[code] || 'Error de autenticación';
}

// ==================== PHASE 5: CALENDAR SYSTEM ====================


const MONTHS_ES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let currentCalendarDate = new Date();

function initCalendar() {
    const viewHistoryBtn = document.getElementById('viewHistoryBtn');
    const calendarSection = document.getElementById('calendarSection');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const dayDetailModal = document.getElementById('dayDetailModal');
    const dayDetailClose = document.getElementById('dayDetailClose');

    if (!viewHistoryBtn || !calendarSection) return;

    // Toggle calendar visibility
    viewHistoryBtn.addEventListener('click', () => {
        const isVisible = calendarSection.style.display !== 'none';
        calendarSection.style.display = isVisible ? 'none' : 'block';
        if (!isVisible) {
            renderCalendar();
        }
    });

    // Month navigation
    prevMonthBtn.addEventListener('click', () => {
        currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthBtn.addEventListener('click', () => {
        currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
        renderCalendar();
    });

    // Day detail modal close
    dayDetailClose.addEventListener('click', () => {
        dayDetailModal.classList.remove('active');
    });

    dayDetailModal.addEventListener('click', (e) => {
        if (e.target === dayDetailModal) {
            dayDetailModal.classList.remove('active');
        }
    });
}

function renderCalendar() {
    const grid = document.getElementById('calendarGrid');
    const monthLabel = document.getElementById('currentMonthLabel');
    const completed = loadCompleted();

    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();

    monthLabel.textContent = `${MONTHS_ES[month]} ${year}`;

    // Get first day of month and days in month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    // Get starting day (Monday = 0)
    let startingDay = firstDay.getDay() - 1;
    if (startingDay < 0) startingDay = 6;

    grid.innerHTML = '';

    // Empty cells for days before month starts
    for (let i = 0; i < startingDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-day empty';
        grid.appendChild(emptyCell);
    }

    // Actual days
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'calendar-day';

        const dateKey = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const dayData = completed[dateKey] || {};
        const taskCount = Object.values(dayData).filter(v => v).length;

        // Check if today
        if (today.getFullYear() === year && today.getMonth() === month && today.getDate() === day) {
            dayCell.classList.add('today');
        }

        // Add task level class
        if (taskCount >= 7) {
            dayCell.classList.add('has-tasks-high');
        } else if (taskCount >= 4) {
            dayCell.classList.add('has-tasks-medium');
        } else if (taskCount > 0) {
            dayCell.classList.add('has-tasks-low');
        }

        dayCell.innerHTML = `
            <span class="day-number">${day}</span>
            ${taskCount > 0 ? `<span class="day-tasks">${taskCount} ✓</span>` : ''}
        `;

        dayCell.addEventListener('click', () => openDayDetail(dateKey, day));

        grid.appendChild(dayCell);
    }
}

function openDayDetail(dateKey, dayNumber) {
    const modal = document.getElementById('dayDetailModal');
    const title = document.getElementById('dayDetailTitle');
    const content = document.getElementById('dayDetailContent');

    const completed = loadCompleted();
    const dayData = completed[dateKey] || {};

    const date = new Date(dateKey);
    const dayOfWeek = date.getDay();
    const dayIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    const daySchedule = scheduleData[dayIndex] || [];

    title.textContent = `${DAYS[dayIndex]} ${dayNumber} - ${dateKey}`;

    if (daySchedule.length === 0 || Object.keys(dayData).length === 0) {
        content.innerHTML = '<p style="text-align:center; color: var(--text-secondary);">No hay actividades registradas para este día.</p>';
    } else {
        content.innerHTML = daySchedule.map((slot, slotIndex) => {
            const key = `${dayIndex}-${slotIndex}`;
            const isCompleted = dayData[key] || false;
            const activityClass = slot.activity.class;

            if (activityClass === 'free' || activityClass === 'break') return '';

            return `
                <div class="day-detail-item ${isCompleted ? 'completed' : ''}">
                    <span class="task-icon">${isCompleted ? '✅' : '⬜'}</span>
                    <div class="task-info">
                        <div class="task-name">${slot.activity.name}</div>
                        <div class="task-time">${slot.start} - ${slot.duration}min</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    modal.classList.add('active');
}

// ==================== PHASE 5: PDF EXPORT ====================

function initPdfExport() {
    const exportBtn = document.getElementById('exportPdfBtn');

    if (!exportBtn) return;

    exportBtn.addEventListener('click', generatePdf);
}

function generatePdf() {
    // Check if jsPDF is loaded
    if (typeof window.jspdf === 'undefined') {
        alert('Error: La librería de PDF no se cargó correctamente. Por favor recarga la página.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const goals = loadGoals();
    const completed = loadCompleted();

    // Calculate weekly stats
    let datacampHours = 0, platziHours = 0, exerciseDays = 0, totalTasks = 0;

    for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateKey = date.toISOString().split('T')[0];
        const dayData = completed[dateKey] || {};
        const dayOfWeek = date.getDay();
        const dayIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
        const daySchedule = scheduleData[dayIndex] || [];

        Object.keys(dayData).forEach(key => {
            if (!dayData[key]) return;
            const [d, s] = key.split('-').map(Number);
            if (d !== dayIndex) return;

            const slot = daySchedule[s];
            if (!slot) return;

            totalTasks++;
            if (slot.activity.class === 'datacamp') datacampHours += slot.duration / 60;
            if (slot.activity.class === 'platzi') platziHours += slot.duration / 60;
            if (slot.activity.class === 'exercise') exerciseDays++;
        });
    }

    // Generate PDF content
    const today = new Date().toLocaleDateString('es-ES', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    // Header
    doc.setFontSize(24);
    doc.setTextColor(102, 126, 234);
    doc.text('Mi Horario Semanal', 105, 20, { align: 'center' });

    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text(`Reporte generado: ${today}`, 105, 30, { align: 'center' });

    // Divider
    doc.setDrawColor(102, 126, 234);
    doc.line(20, 35, 190, 35);

    // Weekly Stats
    doc.setFontSize(16);
    doc.setTextColor(0);
    doc.text('📊 Estadísticas de la Semana', 20, 50);

    doc.setFontSize(12);
    let y = 65;

    doc.text(`📊 DataCamp: ${datacampHours.toFixed(1)}h / ${goals.datacamp}h meta`, 25, y);
    y += 10;
    doc.text(`🚀 Platzi: ${platziHours.toFixed(1)}h / ${goals.platzi}h meta`, 25, y);
    y += 10;
    doc.text(`💪 Ejercicio: ${exerciseDays} días / ${goals.exercise} días meta`, 25, y);
    y += 10;
    doc.text(`✅ Total tareas completadas: ${totalTasks}`, 25, y);

    // Goals Progress
    y += 20;
    doc.setFontSize(16);
    doc.text('🎯 Progreso de Metas', 20, y);

    y += 15;
    doc.setFontSize(12);

    const dcProgress = Math.min((datacampHours / goals.datacamp) * 100, 100);
    const pzProgress = Math.min((platziHours / goals.platzi) * 100, 100);
    const exProgress = Math.min((exerciseDays / goals.exercise) * 100, 100);

    doc.text(`DataCamp: ${dcProgress.toFixed(0)}% completado`, 25, y);
    y += 8;
    doc.text(`Platzi: ${pzProgress.toFixed(0)}% completado`, 25, y);
    y += 8;
    doc.text(`Ejercicio: ${exProgress.toFixed(0)}% completado`, 25, y);

    // Tips
    y += 20;
    doc.setFontSize(16);
    doc.text('💡 Recomendaciones', 20, y);

    y += 15;
    doc.setFontSize(11);
    doc.setTextColor(80);

    if (dcProgress < 50) {
        doc.text('• Dedica más tiempo a DataCamp para alcanzar tu meta', 25, y);
        y += 8;
    }
    if (pzProgress < 50) {
        doc.text('• Aumenta las sesiones de Platzi esta semana', 25, y);
        y += 8;
    }
    if (exProgress < 50) {
        doc.text('• Recuerda hacer ejercicio para mantener tu racha', 25, y);
        y += 8;
    }
    if (dcProgress >= 100 && pzProgress >= 100 && exProgress >= 100) {
        doc.text('🎉 ¡Excelente! Has cumplido todas tus metas esta semana', 25, y);
    }

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text('Generado por Mi Horario Semanal', 105, 280, { align: 'center' });

    // Save PDF
    doc.save(`horario_reporte_${new Date().toISOString().split('T')[0]}.pdf`);
}

// ==================== PHASE 2: REMINDERS ====================

let reminderIntervals = {
    hydration: null,
    eyeRest: null
};

function initReminders() {
    const hydrationToggle = document.getElementById('hydrationReminder');
    const eyeRestToggle = document.getElementById('eyeRestReminder');
    const notificationBtn = document.getElementById('enableNotifications');

    // Load saved preferences
    const prefs = JSON.parse(localStorage.getItem('reminder_prefs') || '{}');

    if (hydrationToggle) {
        hydrationToggle.checked = prefs.hydration !== false;
        hydrationToggle.onchange = () => {
            saveReminderPrefs();
            if (hydrationToggle.checked) {
                startHydrationReminder();
            } else {
                stopHydrationReminder();
            }
        };
        if (hydrationToggle.checked) startHydrationReminder();
    }

    if (eyeRestToggle) {
        eyeRestToggle.checked = prefs.eyeRest !== false;
        eyeRestToggle.onchange = () => {
            saveReminderPrefs();
            if (eyeRestToggle.checked) {
                startEyeRestReminder();
            } else {
                stopEyeRestReminder();
            }
        };
        if (eyeRestToggle.checked) startEyeRestReminder();
    }

    if (notificationBtn) {
        if ('Notification' in window && Notification.permission === 'granted') {
            notificationBtn.textContent = '✅ Activadas';
            notificationBtn.disabled = true;
        } else {
            notificationBtn.onclick = requestNotificationPermission;
        }
    }
}

function saveReminderPrefs() {
    const hydrationToggle = document.getElementById('hydrationReminder');
    const eyeRestToggle = document.getElementById('eyeRestReminder');

    localStorage.setItem('reminder_prefs', JSON.stringify({
        hydration: hydrationToggle?.checked ?? true,
        eyeRest: eyeRestToggle?.checked ?? true
    }));
}

function startHydrationReminder() {
    // Remind every 2 hours (7200000 ms)
    // For demo purposes, we'll use a shorter interval initially
    reminderIntervals.hydration = setInterval(() => {
        showNotification('💧 ¡Hora de hidratarte!', 'Bebe un vaso de agua para mantener tu concentración.');
        showReminderPopup('💧', '¡Hora de tomar agua!', 'Mantén tu hidratación para mejor concentración.');
    }, 2 * 60 * 60 * 1000); // 2 hours
}

function stopHydrationReminder() {
    if (reminderIntervals.hydration) {
        clearInterval(reminderIntervals.hydration);
        reminderIntervals.hydration = null;
    }
}

function startEyeRestReminder() {
    // Remind every 30 minutes
    reminderIntervals.eyeRest = setInterval(() => {
        showNotification('👁️ Descanso Visual', 'Mira algo a 20 pies de distancia por 20 segundos.');
        showReminderPopup('👁️', 'Descanso Visual 20-20-20', 'Mira algo lejos por 20 segundos para descansar tus ojos.');
    }, 30 * 60 * 1000); // 30 minutes
}

function stopEyeRestReminder() {
    if (reminderIntervals.eyeRest) {
        clearInterval(reminderIntervals.eyeRest);
        reminderIntervals.eyeRest = null;
    }
}

function showReminderPopup(icon, title, message) {
    // Create popup element
    const popup = document.createElement('div');
    popup.className = 'reminder-popup';
    popup.innerHTML = `
        <span class="popup-icon">${icon}</span>
        <div class="popup-content">
            <strong>${title}</strong>
            <p>${message}</p>
        </div>
        <button class="popup-close" onclick="this.parentElement.remove()">✕</button>
    `;

    document.body.appendChild(popup);

    // Auto remove after 10 seconds
    setTimeout(() => {
        if (popup.parentElement) {
            popup.classList.add('fade-out');
            setTimeout(() => popup.remove(), 500);
        }
    }, 10000);
}

// ==================== PHASE 3: GAMIFICATION ====================

const GAMIFICATION_STORAGE = {
    STREAK: 'streak_data',
    ACHIEVEMENTS: 'achievements_data',
    WEEKLY_STATS: 'weekly_stats'
};

// Achievements definition
const ACHIEVEMENTS = [
    { id: 'first_task', name: 'Primera Tarea', icon: '🌟', desc: 'Completa tu primera actividad', check: (stats) => stats.totalCompleted >= 1 },
    { id: 'streak_3', name: 'En Racha', icon: '🔥', desc: '3 días consecutivos', check: (stats) => stats.streak >= 3 },
    { id: 'streak_7', name: 'Semana Perfecta', icon: '⚡', desc: '7 días consecutivos', check: (stats) => stats.streak >= 7 },
    { id: 'study_5h', name: 'Estudioso', icon: '📚', desc: '5 horas de estudio', check: (stats) => stats.totalStudyHours >= 5 },
    { id: 'study_10h', name: 'Dedicado', icon: '🎓', desc: '10 horas de estudio', check: (stats) => stats.totalStudyHours >= 10 },
    { id: 'exercise_3', name: 'En Forma', icon: '💪', desc: '3 días de ejercicio', check: (stats) => stats.exerciseDays >= 3 },
    { id: 'exercise_7', name: 'Fitness Master', icon: '🏆', desc: '7 días de ejercicio', check: (stats) => stats.exerciseDays >= 7 },
    { id: 'all_today', name: 'Día Perfecto', icon: '✨', desc: 'Completa todo el día', check: (stats) => stats.todayPercent >= 100 }
];

function initGamification() {
    updateStreak();
    updateWeeklyStats();
    renderAchievements();
}

// ========== STREAK SYSTEM ==========

function loadStreakData() {
    const data = localStorage.getItem(GAMIFICATION_STORAGE.STREAK);
    return data ? JSON.parse(data) : { streak: 0, lastActiveDate: null };
}

function saveStreakData(data) {
    localStorage.setItem(GAMIFICATION_STORAGE.STREAK, JSON.stringify(data));
}

function updateStreak() {
    const streakData = loadStreakData();
    const today = getTodayKey();
    const yesterday = getYesterdayKey();

    const completed = loadCompleted();
    const todayCompleted = completed[today] || {};
    const hasTodayActivity = Object.values(todayCompleted).some(v => v === true);

    let newStreak = streakData.streak;
    let message = '';

    if (hasTodayActivity) {
        if (streakData.lastActiveDate === today) {
            // Already counted today
            message = `¡Sigue así! Hoy ya completaste tareas.`;
        } else if (streakData.lastActiveDate === yesterday) {
            // Continue streak
            newStreak = streakData.streak + 1;
            message = `🔥 ¡Racha de ${newStreak} días! ¡Excelente!`;
        } else if (streakData.lastActiveDate === null) {
            // First time
            newStreak = 1;
            message = `🌟 ¡Empezaste tu primera racha!`;
        } else {
            // Streak broken, start new
            newStreak = 1;
            message = `↩️ Nueva racha iniciada. ¡A por todas!`;
        }

        saveStreakData({ streak: newStreak, lastActiveDate: today });
    } else {
        if (streakData.lastActiveDate === yesterday) {
            message = `⚠️ ¡Completa algo hoy para mantener tu racha de ${streakData.streak} días!`;
        } else if (streakData.streak > 0 && streakData.lastActiveDate !== today && streakData.lastActiveDate !== yesterday) {
            message = `😢 Perdiste tu racha de ${streakData.streak} días. ¡Comienza de nuevo!`;
            newStreak = 0;
            saveStreakData({ streak: 0, lastActiveDate: null });
        } else {
            message = `¡Completa tareas hoy para empezar tu racha!`;
        }
    }

    // Update UI
    const countEl = document.getElementById('streakCount');
    const msgEl = document.getElementById('streakMessage');
    const iconEl = document.getElementById('streakIcon');

    if (countEl) countEl.textContent = newStreak;
    if (msgEl) msgEl.textContent = message;
    if (iconEl) {
        // Bigger fire for bigger streaks
        if (newStreak >= 7) iconEl.textContent = '🔥🔥🔥';
        else if (newStreak >= 3) iconEl.textContent = '🔥🔥';
        else if (newStreak >= 1) iconEl.textContent = '🔥';
        else iconEl.textContent = '❄️';
    }

    return newStreak;
}

function getYesterdayKey() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().split('T')[0];
}

// ========== WEEKLY STATS ==========

function updateWeeklyStats() {
    const completed = loadCompleted();
    const today = new Date();
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay() + 1); // Monday

    let datacampMinutes = 0;
    let platziMinutes = 0;
    let exerciseDays = 0;
    let todayTotal = 0;
    let todayDone = 0;

    // Get current day index (0 = Monday)
    const currentDayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1;
    const todayKey = getTodayKey();
    const todayCompleted = completed[todayKey] || {};

    // Calculate today's completion
    const todaySchedule = scheduleData[currentDayIndex] || [];
    todaySchedule.forEach((slot, idx) => {
        if (slot.activity.class !== 'free' && slot.activity.class !== 'break') {
            todayTotal++;
            const key = `${currentDayIndex}-${idx}`;
            if (todayCompleted[key]) {
                todayDone++;

                // Count study minutes
                if (slot.activity.class === 'datacamp') {
                    datacampMinutes += slot.duration;
                } else if (slot.activity.class === 'platzi') {
                    platziMinutes += slot.duration;
                }
            }
        }
    });

    // Check exercise for each day of the week
    for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
        const checkDate = new Date(weekStart);
        checkDate.setDate(weekStart.getDate() + dayOffset);
        const dateKey = checkDate.toISOString().split('T')[0];
        const dayCompleted = completed[dateKey] || {};
        const daySchedule = scheduleData[dayOffset] || [];

        // Check if exercise was completed this day
        daySchedule.forEach((slot, idx) => {
            if (slot.activity.class === 'exercise') {
                const key = `${dayOffset}-${idx}`;
                if (dayCompleted[key]) {
                    exerciseDays++;
                }
            }
            // Add study minutes from past days
            if (dayOffset < currentDayIndex && dayCompleted[`${dayOffset}-${idx}`]) {
                if (slot.activity.class === 'datacamp') {
                    datacampMinutes += slot.duration;
                } else if (slot.activity.class === 'platzi') {
                    platziMinutes += slot.duration;
                }
            }
        });
    }

    const todayPercent = todayTotal > 0 ? Math.round((todayDone / todayTotal) * 100) : 0;
    const datacampHours = (datacampMinutes / 60).toFixed(1);
    const platziHours = (platziMinutes / 60).toFixed(1);

    // Update UI
    const dcHoursEl = document.getElementById('datacampHours');
    const dcBarEl = document.getElementById('datacampBar');
    const plHoursEl = document.getElementById('platziHours');
    const plBarEl = document.getElementById('platziBar');
    const exDaysEl = document.getElementById('exerciseDays');
    const exBarEl = document.getElementById('exerciseBar');
    const compPercentEl = document.getElementById('completionPercent');
    const compBarEl = document.getElementById('completionBar');

    if (dcHoursEl) dcHoursEl.textContent = `${datacampHours}h`;
    if (dcBarEl) dcBarEl.style.width = `${Math.min(datacampHours / 12 * 100, 100)}%`;

    if (plHoursEl) plHoursEl.textContent = `${platziHours}h`;
    if (plBarEl) plBarEl.style.width = `${Math.min(platziHours / 12 * 100, 100)}%`;

    if (exDaysEl) exDaysEl.textContent = `${exerciseDays}/7 días`;
    if (exBarEl) exBarEl.style.width = `${(exerciseDays / 7) * 100}%`;

    if (compPercentEl) compPercentEl.textContent = `${todayPercent}%`;
    if (compBarEl) compBarEl.style.width = `${todayPercent}%`;

    return {
        datacampHours: parseFloat(datacampHours),
        platziHours: parseFloat(platziHours),
        totalStudyHours: parseFloat(datacampHours) + parseFloat(platziHours),
        exerciseDays,
        todayPercent,
        totalCompleted: Object.values(completed).reduce((sum, day) =>
            sum + Object.values(day).filter(v => v).length, 0
        ),
        streak: loadStreakData().streak
    };
}

// ========== ACHIEVEMENTS ==========

function loadAchievements() {
    const data = localStorage.getItem(GAMIFICATION_STORAGE.ACHIEVEMENTS);
    return data ? JSON.parse(data) : [];
}

function saveAchievements(unlocked) {
    localStorage.setItem(GAMIFICATION_STORAGE.ACHIEVEMENTS, JSON.stringify(unlocked));
}

function renderAchievements() {
    const stats = updateWeeklyStats();
    stats.streak = loadStreakData().streak;

    const unlocked = loadAchievements();
    const container = document.getElementById('achievementsGrid');
    if (!container) return;

    container.innerHTML = ACHIEVEMENTS.map(ach => {
        const isUnlocked = unlocked.includes(ach.id) || ach.check(stats);

        // If newly unlocked, save it
        if (isUnlocked && !unlocked.includes(ach.id)) {
            unlocked.push(ach.id);
            saveAchievements(unlocked);
            // Show notification for new achievement
            setTimeout(() => {
                showNotification(`🏆 ¡Logro Desbloqueado!`, ach.name);
                showReminderPopup(ach.icon, `¡Logro: ${ach.name}!`, ach.desc);
            }, 500);
        }

        return `
            <div class="achievement ${isUnlocked ? 'unlocked' : 'locked'}">
                <span class="achievement-icon">${ach.icon}</span>
                <div class="achievement-info">
                    <span class="achievement-name">${ach.name}</span>
                    <span class="achievement-desc">${ach.desc}</span>
                </div>
            </div>
        `;
    }).join('');
}

// Update gamification when tasks change
const originalToggleComplete = toggleComplete;
toggleComplete = function (dayIndex, slotIndex) {
    originalToggleComplete(dayIndex, slotIndex);
    // Update gamification after task toggle
    setTimeout(() => {
        updateStreak();
        updateWeeklyStats();
        renderAchievements();
        // Cloud sync (Phase 6)
        if (typeof currentUser !== 'undefined' && currentUser && typeof saveToCloud === 'function') {
            saveToCloud();
        }
    }, 100);
};

// Initialize on page load (add to DOMContentLoaded)
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initGamification, 500);
    initPhase4Features();
});

// ==================== PHASE 4: ADVANCED FEATURES ====================

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed:', err));
    });
}

// PWA Install Prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallButton();
});

function showInstallButton() {
    const installBtn = document.createElement('button');
    installBtn.className = 'control-btn install-btn';
    installBtn.innerHTML = '📲 Instalar App';
    installBtn.onclick = installPWA;

    const dataControls = document.querySelector('.data-controls');
    if (dataControls) {
        dataControls.appendChild(installBtn);
    }
}

function installPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                showReminderPopup('📲', '¡App Instalada!', 'Ahora puedes acceder desde tu pantalla de inicio.');
            }
            deferredPrompt = null;
        });
    }
}

// Initialize Phase 4 Features
function initPhase4Features() {
    const exportBtn = document.getElementById('exportBtn');
    const importBtn = document.getElementById('importBtn');
    const importFile = document.getElementById('importFile');

    if (exportBtn) exportBtn.onclick = exportData;
    if (importBtn) importBtn.onclick = () => importFile?.click();
    if (importFile) importFile.onchange = importData;
}

// ========== EXPORT DATA ==========
function exportData() {
    const data = {
        version: '1.0',
        exportDate: new Date().toISOString(),
        completed: localStorage.getItem(STORAGE_KEYS.COMPLETED),
        theme: localStorage.getItem(STORAGE_KEYS.THEME),
        streak: localStorage.getItem(GAMIFICATION_STORAGE.STREAK),
        achievements: localStorage.getItem(GAMIFICATION_STORAGE.ACHIEVEMENTS),
        reminderPrefs: localStorage.getItem('reminder_prefs')
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `horario-backup-${getTodayKey()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showReminderPopup('📥', '¡Datos Exportados!', 'Tu progreso se guardó como archivo JSON.');
}

// ========== IMPORT DATA ==========
function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);

            if (data.version) {
                // Restore data
                if (data.completed) localStorage.setItem(STORAGE_KEYS.COMPLETED, data.completed);
                if (data.theme) localStorage.setItem(STORAGE_KEYS.THEME, data.theme);
                if (data.streak) localStorage.setItem(GAMIFICATION_STORAGE.STREAK, data.streak);
                if (data.achievements) localStorage.setItem(GAMIFICATION_STORAGE.ACHIEVEMENTS, data.achievements);
                if (data.reminderPrefs) localStorage.setItem('reminder_prefs', data.reminderPrefs);

                showReminderPopup('📤', '¡Datos Importados!', 'Tu progreso fue restaurado. Recargando...');

                setTimeout(() => {
                    location.reload();
                }, 2000);
            } else {
                throw new Error('Formato inválido');
            }
        } catch (err) {
            showReminderPopup('❌', 'Error al Importar', 'El archivo no es válido.');
        }
    };
    reader.readAsText(file);

    // Reset file input
    event.target.value = '';
}

// ==================== SCHEDULE EDITOR ====================

const SCHEDULE_STORAGE_KEY = 'custom_schedule';
let isEditMode = false;
let currentEditDayIndex = null;
let currentEditSlotIndex = null;
let isAddingNew = false;

// Load custom schedule or use default
function loadScheduleData() {
    const saved = localStorage.getItem(SCHEDULE_STORAGE_KEY);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // Restore activity references
            for (let day in parsed) {
                parsed[day] = parsed[day].map(slot => ({
                    ...slot,
                    activity: ACTIVITIES[slot.activityKey] || ACTIVITIES.FREE
                }));
            }
            return parsed;
        } catch (e) {
            return null;
        }
    }
    return null;
}

// Save schedule to localStorage
function saveScheduleData() {
    const toSave = {};
    for (let day in scheduleData) {
        toSave[day] = scheduleData[day].map(slot => ({
            start: slot.start,
            duration: slot.duration,
            activityKey: Object.keys(ACTIVITIES).find(key => ACTIVITIES[key] === slot.activity) || 'FREE'
        }));
    }
    localStorage.setItem(SCHEDULE_STORAGE_KEY, JSON.stringify(toSave));
}

// Initialize editor
function initEditor() {
    const editModeBtn = document.getElementById('editModeBtn');
    const modal = document.getElementById('editModal');
    const modalClose = document.getElementById('modalClose');
    const editForm = document.getElementById('editForm');
    const deleteBtn = document.getElementById('deleteBtn');
    const fabAdd = document.getElementById('fabAdd');

    // Load custom schedule if exists
    const customSchedule = loadScheduleData();
    if (customSchedule) {
        Object.assign(scheduleData, customSchedule);
        generateSchedule(); // Regenerate with custom data
    }

    // Edit mode toggle
    if (editModeBtn) {
        editModeBtn.onclick = () => {
            isEditMode = !isEditMode;
            document.body.classList.toggle('edit-mode', isEditMode);
            editModeBtn.innerHTML = isEditMode ? '✅ Listo' : '✏️ Editar';
            editModeBtn.classList.toggle('active', isEditMode);
            fabAdd.style.display = isEditMode ? 'flex' : 'none';
            generateSchedule(); // Regenerate with edit buttons
        };
    }

    // Close modal
    if (modalClose) {
        modalClose.onclick = closeModal;
    }

    // Click outside modal to close
    if (modal) {
        modal.onclick = (e) => {
            if (e.target === modal) closeModal();
        };
    }

    // Form submit (save)
    if (editForm) {
        editForm.onsubmit = (e) => {
            e.preventDefault();
            saveActivity();
        };
    }

    // Delete button
    if (deleteBtn) {
        deleteBtn.onclick = deleteActivity;
    }

    // FAB add button
    if (fabAdd) {
        fabAdd.onclick = () => openAddModal();
    }
}

function openEditModal(dayIndex, slotIndex) {
    const modal = document.getElementById('editModal');
    const slot = scheduleData[dayIndex][slotIndex];

    currentEditDayIndex = dayIndex;
    currentEditSlotIndex = slotIndex;
    isAddingNew = false;

    // Find activity key
    const activityKey = Object.keys(ACTIVITIES).find(key => ACTIVITIES[key] === slot.activity) || 'FREE';

    document.getElementById('modalTitle').textContent = `Editar: ${DAYS[dayIndex]}`;
    document.getElementById('activitySelect').value = activityKey;
    document.getElementById('startTime').value = slot.start;
    document.getElementById('duration').value = slot.duration;
    document.getElementById('deleteBtn').style.display = 'block';

    modal.classList.add('open');
}

function openAddModal() {
    const modal = document.getElementById('editModal');

    currentEditDayIndex = null;
    currentEditSlotIndex = null;
    isAddingNew = true;

    document.getElementById('modalTitle').textContent = 'Agregar Actividad';
    document.getElementById('activitySelect').value = 'DATACAMP';
    document.getElementById('startTime').value = '09:00';
    document.getElementById('duration').value = '45';
    document.getElementById('deleteBtn').style.display = 'none';

    modal.classList.add('open');
}

function closeModal() {
    const modal = document.getElementById('editModal');
    modal.classList.remove('open');
    currentEditDayIndex = null;
    currentEditSlotIndex = null;
    isAddingNew = false;
}

function saveActivity() {
    const activityKey = document.getElementById('activitySelect').value;
    const startTime = document.getElementById('startTime').value;
    const duration = parseInt(document.getElementById('duration').value);

    const newSlot = {
        start: startTime,
        activity: ACTIVITIES[activityKey],
        duration: duration
    };

    if (isAddingNew) {
        // Ask which day to add to
        const dayIndex = prompt('¿A qué día agregar? (0=Lunes, 1=Martes, 2=Miércoles, 3=Jueves, 4=Viernes, 5=Sábado, 6=Domingo)', '0');
        if (dayIndex !== null && dayIndex >= 0 && dayIndex <= 6) {
            scheduleData[dayIndex].push(newSlot);
            // Sort by start time
            scheduleData[dayIndex].sort((a, b) => a.start.localeCompare(b.start));
        }
    } else {
        // Edit existing
        scheduleData[currentEditDayIndex][currentEditSlotIndex] = newSlot;
        // Sort by start time
        scheduleData[currentEditDayIndex].sort((a, b) => a.start.localeCompare(b.start));
    }

    saveScheduleData();
    generateSchedule();
    closeModal();
    showReminderPopup('💾', '¡Guardado!', 'El horario se actualizó correctamente.');
}

function deleteActivity() {
    if (currentEditDayIndex !== null && currentEditSlotIndex !== null) {
        if (confirm('¿Eliminar esta actividad?')) {
            scheduleData[currentEditDayIndex].splice(currentEditSlotIndex, 1);
            saveScheduleData();
            generateSchedule();
            closeModal();
            showReminderPopup('🗑️', '¡Eliminado!', 'La actividad fue eliminada.');
        }
    }
}

// Override generateSchedule to add edit buttons when in edit mode
const originalGenerateSchedule = generateSchedule;
generateSchedule = function () {
    originalGenerateSchedule();

    if (isEditMode) {
        // Add click handlers to cells for editing
        document.querySelectorAll('.activity-cell').forEach(cell => {
            const dayIndex = parseInt(cell.dataset.day);
            const slotIndex = parseInt(cell.dataset.slot);

            // Add edit overlay
            const editOverlay = document.createElement('div');
            editOverlay.className = 'edit-overlay';
            editOverlay.innerHTML = '✏️';
            editOverlay.onclick = (e) => {
                e.stopPropagation();
                openEditModal(dayIndex, slotIndex);
            };
            cell.appendChild(editOverlay);
        });
    }
};

// Initialize editor on page load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initEditor, 600);
    setTimeout(initAdvancedStats, 700);
});

// ==================== ADVANCED STATISTICS ====================

// MONTHS_ES already defined in Phase 5 Calendar section

let currentHistoryMonth = new Date();

function initAdvancedStats() {
    generateHeatmap();
    updateWeekComparison();
    setupStatsButtons();
}

// ========== GITHUB-STYLE HEATMAP ==========

function generateHeatmap() {
    const grid = document.getElementById('heatmapGrid');
    const monthsContainer = document.getElementById('heatmapMonths');
    if (!grid) return;

    const completed = loadCompleted();
    const today = new Date();
    const cells = [];
    const monthLabels = new Map();

    // Generate last 90 days
    for (let i = 89; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dateKey = date.toISOString().split('T')[0];

        // Count completed tasks for this day
        const dayCompleted = completed[dateKey] || {};
        const count = Object.values(dayCompleted).filter(v => v === true).length;

        // Determine level (0-4)
        let level = 0;
        if (count >= 1) level = 1;
        if (count >= 3) level = 2;
        if (count >= 6) level = 3;
        if (count >= 10) level = 4;

        // Track month changes for labels
        const monthKey = `${date.getFullYear()}-${date.getMonth()}`;
        if (!monthLabels.has(monthKey)) {
            monthLabels.set(monthKey, {
                name: MONTHS_ES[date.getMonth()].substring(0, 3),
                position: 89 - i
            });
        }

        cells.push({
            date: dateKey,
            count: count,
            level: level,
            dayName: date.toLocaleDateString('es', { weekday: 'short' })
        });
    }

    // Render heatmap grid
    grid.innerHTML = cells.map(cell => `
        <div class="heatmap-cell level-${cell.level}" 
             title="${cell.date}: ${cell.count} tareas"
             data-date="${cell.date}">
        </div>
    `).join('');

    // Render month labels
    if (monthsContainer) {
        const labelsHtml = Array.from(monthLabels.values()).map(m => `
            <span style="margin-left: ${m.position * 3}px">${m.name}</span>
        `).join('');
        monthsContainer.innerHTML = labelsHtml;
    }
}

// ========== WEEK COMPARISON ==========

function updateWeekComparison() {
    const completed = loadCompleted();
    const today = new Date();

    // This week (Monday to today)
    const thisWeekStart = new Date(today);
    thisWeekStart.setDate(today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1));

    // Last week
    const lastWeekStart = new Date(thisWeekStart);
    lastWeekStart.setDate(thisWeekStart.getDate() - 7);
    const lastWeekEnd = new Date(thisWeekStart);
    lastWeekEnd.setDate(thisWeekStart.getDate() - 1);

    let thisWeekTasks = 0;
    let thisWeekMinutes = 0;
    let lastWeekTasks = 0;
    let lastWeekMinutes = 0;

    // Calculate this week
    for (let d = new Date(thisWeekStart); d <= today; d.setDate(d.getDate() + 1)) {
        const dateKey = d.toISOString().split('T')[0];
        const dayCompleted = completed[dateKey] || {};
        const dayTasks = Object.values(dayCompleted).filter(v => v).length;
        thisWeekTasks += dayTasks;
        thisWeekMinutes += dayTasks * 45; // Approximate
    }

    // Calculate last week
    for (let d = new Date(lastWeekStart); d <= lastWeekEnd; d.setDate(d.getDate() + 1)) {
        const dateKey = d.toISOString().split('T')[0];
        const dayCompleted = completed[dateKey] || {};
        const dayTasks = Object.values(dayCompleted).filter(v => v).length;
        lastWeekTasks += dayTasks;
        lastWeekMinutes += dayTasks * 45;
    }

    // Update UI
    const thisWeekHours = (thisWeekMinutes / 60).toFixed(1);
    const lastWeekHours = (lastWeekMinutes / 60).toFixed(1);

    document.getElementById('thisWeekHours').textContent = `${thisWeekHours}h`;
    document.getElementById('thisWeekDetail').textContent = `${thisWeekTasks} tareas completadas`;
    document.getElementById('lastWeekHours').textContent = `${lastWeekHours}h`;
    document.getElementById('lastWeekDetail').textContent = `${lastWeekTasks} tareas completadas`;

    // Comparison result
    const resultEl = document.getElementById('comparisonResult');
    if (resultEl) {
        const diff = thisWeekTasks - lastWeekTasks;
        const diffHours = (thisWeekMinutes - lastWeekMinutes) / 60;

        if (lastWeekTasks === 0 && thisWeekTasks === 0) {
            resultEl.innerHTML = `<span class="result-icon">📊</span><span class="result-text">Sin datos para comparar</span>`;
        } else if (diff > 0) {
            resultEl.innerHTML = `<span class="result-icon">📈</span><span class="result-text positive">¡+${diff} tareas! (+${diffHours.toFixed(1)}h)</span>`;
            resultEl.className = 'comparison-result positive';
        } else if (diff < 0) {
            resultEl.innerHTML = `<span class="result-icon">📉</span><span class="result-text negative">${diff} tareas (${diffHours.toFixed(1)}h)</span>`;
            resultEl.className = 'comparison-result negative';
        } else {
            resultEl.innerHTML = `<span class="result-icon">➡️</span><span class="result-text">Igual que la semana pasada</span>`;
            resultEl.className = 'comparison-result';
        }
    }
}

// ========== MONTHLY HISTORY ==========

function setupStatsButtons() {
    const historyBtn = document.getElementById('viewHistoryBtn');
    const pdfBtn = document.getElementById('exportPdfBtn');
    const prevMonth = document.getElementById('prevMonth');
    const nextMonth = document.getElementById('nextMonth');

    if (historyBtn) historyBtn.onclick = toggleMonthlyHistory;
    if (pdfBtn) pdfBtn.onclick = exportPDF;
    if (prevMonth) prevMonth.onclick = () => navigateMonth(-1);
    if (nextMonth) nextMonth.onclick = () => navigateMonth(1);
}

function toggleMonthlyHistory() {
    const historyEl = document.getElementById('monthlyHistory');
    if (historyEl) {
        const isVisible = historyEl.style.display !== 'none';
        historyEl.style.display = isVisible ? 'none' : 'block';
        if (!isVisible) {
            updateMonthlyStats();
        }
    }
}

function navigateMonth(direction) {
    currentHistoryMonth.setMonth(currentHistoryMonth.getMonth() + direction);
    updateMonthlyStats();
}

function updateMonthlyStats() {
    const labelEl = document.getElementById('currentMonthLabel');
    const statsEl = document.getElementById('monthStats');

    if (labelEl) {
        labelEl.textContent = `${MONTHS_ES[currentHistoryMonth.getMonth()]} ${currentHistoryMonth.getFullYear()}`;
    }

    if (statsEl) {
        const completed = loadCompleted();
        const year = currentHistoryMonth.getFullYear();
        const month = currentHistoryMonth.getMonth();

        // Get all days in the month
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        let totalTasks = 0;
        let totalMinutes = 0;
        let activeDays = 0;

        const dailyData = [];

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dateKey = date.toISOString().split('T')[0];
            const dayCompleted = completed[dateKey] || {};
            const count = Object.values(dayCompleted).filter(v => v).length;

            if (count > 0) {
                activeDays++;
                totalTasks += count;
                totalMinutes += count * 45;
            }

            dailyData.push({ day, count, dateKey });
        }

        const totalHours = (totalMinutes / 60).toFixed(1);

        statsEl.innerHTML = `
            <div class="month-summary">
                <div class="month-stat">
                    <span class="stat-number">${totalTasks}</span>
                    <span class="stat-label">Tareas</span>
                </div>
                <div class="month-stat">
                    <span class="stat-number">${totalHours}h</span>
                    <span class="stat-label">Estudiadas</span>
                </div>
                <div class="month-stat">
                    <span class="stat-number">${activeDays}</span>
                    <span class="stat-label">Días activos</span>
                </div>
            </div>
            <div class="month-calendar">
                ${dailyData.map(d => `
                    <div class="calendar-day ${d.count > 0 ? 'active' : ''}" title="${d.dateKey}: ${d.count} tareas">
                        <span class="day-number">${d.day}</span>
                        ${d.count > 0 ? `<span class="day-count">${d.count}</span>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// ========== PDF EXPORT ==========

function exportPDF() {
    // Create printable report
    const completed = loadCompleted();
    const streakData = loadStreakData();
    const today = new Date();

    // Calculate weekly stats
    let weekTasks = 0;
    let weekMinutes = 0;
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay() + 1);

    for (let d = new Date(weekStart); d <= today; d.setDate(d.getDate() + 1)) {
        const dateKey = d.toISOString().split('T')[0];
        const dayCompleted = completed[dateKey] || {};
        const count = Object.values(dayCompleted).filter(v => v).length;
        weekTasks += count;
        weekMinutes += count * 45;
    }

    const reportHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Reporte - Mi Horario Semanal</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 40px; }
                h1 { color: #667eea; border-bottom: 2px solid #667eea; padding-bottom: 10px; }
                .stat-box { display: inline-block; padding: 20px; margin: 10px; background: #f5f5f5; border-radius: 10px; text-align: center; }
                .stat-number { font-size: 2em; font-weight: bold; color: #667eea; display: block; }
                .section { margin: 30px 0; }
                table { width: 100%; border-collapse: collapse; }
                th, td { padding: 10px; border: 1px solid #ddd; text-align: left; }
                th { background: #667eea; color: white; }
            </style>
        </head>
        <body>
            <h1>📊 Reporte de Mi Horario Semanal</h1>
            <p>Generado: ${today.toLocaleDateString('es')}</p>
            
            <div class="section">
                <h2>📈 Resumen Esta Semana</h2>
                <div class="stat-box">
                    <span class="stat-number">${weekTasks}</span>
                    <span>Tareas Completadas</span>
                </div>
                <div class="stat-box">
                    <span class="stat-number">${(weekMinutes / 60).toFixed(1)}h</span>
                    <span>Tiempo de Estudio</span>
                </div>
                <div class="stat-box">
                    <span class="stat-number">🔥 ${streakData.streak}</span>
                    <span>Días de Racha</span>
                </div>
            </div>
            
            <div class="section">
                <h2>📅 Actividad Reciente</h2>
                <table>
                    <tr><th>Fecha</th><th>Tareas Completadas</th></tr>
                    ${Object.keys(completed).slice(-7).reverse().map(date => `
                        <tr>
                            <td>${date}</td>
                            <td>${Object.values(completed[date]).filter(v => v).length} tareas</td>
                        </tr>
                    `).join('')}
                </table>
            </div>
        </body>
        </html>
    `;

    // Open print dialog
    const printWindow = window.open('', '_blank');
    printWindow.document.write(reportHTML);
    printWindow.document.close();
    printWindow.focus();

    setTimeout(() => {
        printWindow.print();
    }, 500);

    showReminderPopup('📄', '¡Reporte Generado!', 'Usa Ctrl+P para guardar como PDF.');
}
