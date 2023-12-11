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

// function updateNavPosition() {
//   const navStyle = window.getComputedStyle(nav);
//   const navHeight = parseInt(navStyle.height);
//   const windHeight = window.innerHeight;
//   const scrollY = window.scrollY;
//   const issuesSectionTop = issuesSection.offsetTop; // Ottieni la posizione della sezione delle issue

//   // Calcola la posizione desiderata del menu
//   let desiredTop = scrollY + margin;

//   // Imposta i limiti superiore e inferiore
//   const upperLimit = margin;
//   const lowerLimit = windHeight - navHeight - margin;

//   // Limita la posizione del menu nei limiti desiderati
//   if (desiredTop < upperLimit) {
//     desiredTop = upperLimit;
//   } else if (desiredTop > lowerLimit) {
//     desiredTop = lowerLimit;
//   }

//   // Aggiungi una condizione per far diventare fisso il menu quando raggiunge la sezione delle issue
//   if (scrollY > issuesSectionTop - margin) {
//     nav.classList.add("fixed");
//   } else {
//     nav.classList.remove("fixed");
//   }

//   // Imposta la nuova posizione del menu
//   nav.style.top = `${desiredTop}px`;
// }

// window.addEventListener("scroll", updateNavPosition);
// window.addEventListener("resize", updateNavPosition);

// Inizializza la posizione del menu
// updateNavPosition();
});