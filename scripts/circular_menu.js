document.addEventListener("DOMContentLoaded", function() {

const nav = document.querySelector("nav");
const toggleBtn = nav.querySelector(".toggle-btn");
let isDragging = false;
let initialY;
let initialNavTop;
const margin = 20; // Margine desiderato dalla parte superiore e inferiore
const margin2 = 350
// const issuesSection = document.getElementById("issues"); // Ottieni la sezione delle issue

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

function onMouseDown(event) {
  isDragging = true;
  initialY = event.clientY;
  const navStyle = window.getComputedStyle(nav);
  initialNavTop = parseInt(navStyle.top);
}

function onMouseMove(event) {
  if (!isDragging) return;
  const movementY = event.clientY - initialY;
  let newTop = (initialNavTop + movementY);
  if (newTop < margin) newTop = margin;
  if (newTop > margin2) newTop = margin2
  nav.style.top = `${newTop}px`;
}

function onMouseUp() {
  isDragging = false;
}

toggleBtn.addEventListener("mousedown", onMouseDown);
document.addEventListener("mousemove", onMouseMove);
document.addEventListener("mouseup", onMouseUp);
});