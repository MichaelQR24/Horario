// Schedule Configuration
const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const START_HOUR = 7;
const END_HOUR = 23;
const SLOT_DURATION = 45;

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

            cell.innerHTML = `
                ${showCheckbox ? `<input type="checkbox" class="task-checkbox" ${isCompleted ? 'checked' : ''} onclick="event.stopPropagation(); toggleComplete(${dayIndex}, ${slotIndex})">` : ''}
                <div class="activity-time">${timeRange}</div>
                <div class="activity-name">${slot.activity.name}</div>
                <div class="activity-duration">${slot.duration} min</div>
            `;

            cell.title = `${day}: ${slot.activity.name} (${slot.duration} min)`;

            // Click to toggle (for touch devices)
            if (showCheckbox) {
                cell.style.cursor = 'pointer';
                cell.onclick = (e) => {
                    if (e.target.type !== 'checkbox') {
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

function playNotificationSound() {
    // Create a simple beep using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        console.log('Audio not supported');
    }
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

const MONTHS_ES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

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
