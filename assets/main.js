// ---------------------------------------------
// PathLift Main Script
// Handles: progress tracking, lesson completion,
// quiz completion, and general utilities.
// ---------------------------------------------

// Save lesson completion
function markLessonComplete(lessonId) {
  const key = `completed_${lessonId}`;
  localStorage.setItem(key, "true");
}

// Check if a lesson is completed
function isLessonComplete(lessonId) {
  return localStorage.getItem(`completed_${lessonId}`) === "true";
}

// Save quiz score
function saveQuizScore(lessonId, score, total) {
  const key = `quiz_${lessonId}`;
  localStorage.setItem(key, JSON.stringify({ score, total }));
}

// Get quiz score
function getQuizScore(lessonId) {
  const data = localStorage.getItem(`quiz_${lessonId}`);
  return data ? JSON.parse(data) : null;
}

// Count completed lessons in a track
function countCompletedLessons(track) {
  let count = 0;
  track.lessons.forEach(lesson => {
    if (isLessonComplete(lesson.id)) count++;
  });
  return count;
}

// Count total completed lessons across all tracks
function countAllCompletedLessons() {
  let total = 0;
  PATHLIFT_TRACKS.forEach(track => {
    track.lessons.forEach(lesson => {
      if (isLessonComplete(lesson.id)) total++;
    });
  });
  return total;
}

// Get total number of lessons across all tracks
function getTotalLessons() {
  let total = 0;
  PATHLIFT_TRACKS.forEach(track => {
    total += track.lessons.length;
  });
  return total;
}

// Mark quiz as completed and mark lesson as completed
function completeQuizAndLesson(lessonId, score, total) {
  saveQuizScore(lessonId, score, total);
  markLessonComplete(lessonId);
}

// Utility: Capitalize first letter
function cap(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Utility: Get track object by ID
function getTrackById(id) {
  return PATHLIFT_TRACKS.find(t => t.id === id);
}

// Utility: Get lesson object by ID
function getLessonById(lessonId) {
  for (const track of PATHLIFT_TRACKS) {
    const lesson = track.lessons.find(l => l.id === lessonId);
    if (lesson) return lesson;
  }
  return null;
}
