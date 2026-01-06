// assets/main.js
// Handles nav, user, tracks, lessons, and progress

// Simple mobile nav (if you keep the button)
document.addEventListener("click", (e) => {
  const toggle = e.target.closest("[data-nav-toggle]");
  if (!toggle) return;
  const nav = document.getElementById("primary-nav");
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!expanded));
  if (nav) nav.hidden = expanded;
});

// User helpers
function getUser() {
  const raw = localStorage.getItem("pathliftUser");
  return raw ? JSON.parse(raw) : null;
}

function requireUser() {
  const user = getUser();
  if (!user) window.location.href = "join.html";
  return user;
}

// Progress helpers
function getProgress() {
  const raw = localStorage.getItem("pathliftProgress");
  return raw ? JSON.parse(raw) : { completedLessons: [], quizScores: {} };
}

function saveProgress(progress) {
  localStorage.setItem("pathliftProgress", JSON.stringify(progress));
}

function markLessonComplete(lessonId) {
  const progress = getProgress();
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    saveProgress(progress);
  }
}

function isLessonComplete(lessonId) {
  return getProgress().completedLessons.includes(lessonId);
}

function setCurrentLesson(lessonId) {
  localStorage.setItem("pathliftCurrentLesson", lessonId);
}

function getCurrentLessonId() {
  return localStorage.getItem("pathliftCurrentLesson");
}

function setCurrentQuiz(lessonId) {
  localStorage.setItem("pathliftCurrentQuiz", lessonId);
}

function getCurrentQuizId() {
  return localStorage.getItem("pathliftCurrentQuiz");
}

// Expose globally for inline handlers
window.Pathlift = {
  getUser,
  requireUser,
  getProgress,
  markLessonComplete,
  isLessonComplete,
  setCurrentLesson,
  getCurrentLessonId,
  setCurrentQuiz,
  getCurrentQuizId
};
