// Funzione per simulare la scrittura del testo
// function typeText(element, text, index) {
//     console.log("Inside typeText");
//     console.log("loadedStyle:", loadedStyle);
//         if (index < text.length) {
//             element.textContent += text.charAt(index);
//             setTimeout(function() {
//                 typeText(element, text, index + 1);
//             }, 50);
//         }
//     }


// // Seleziona tutti gli elementi con la classe "animated-text" e avvia l'effetto di scrittura
// document.addEventListener('DOMContentLoaded', function() {
//     console.log("DOMContentLoaded event fired");
//     console.log("loadedStyle:", loadedStyle);
//         var elements = document.querySelectorAll('.animated-text');
//         console.log("Found elements:", elements);
//         elements.forEach(function(element) {
//             var textToType = element.textContent;
//             element.textContent = ''; // Cancella il testo iniziale
//             typeText(element, textToType, 0);
//         });
//     }
// );
// console.log("currentStyle: ", currentStyle)
// function typeText(element, text, index) {
//     console.log("ciaoooo")
//     if (index < text.length) {
//         element.textContent += text.charAt(index);
//         setTimeout(function() {
//             typeText(element, text, index + 1);
//         }, 50);
//     }
// }

// document.addEventListener('DOMContentLoaded', function() {
//     // Use the already declared loadedStyle variable
//     var currentStyle = stylesheetLink.getAttribute("href");
//     if (currentStyle.endsWith("2030.css"))  {
//         console.log("ciaoooo2")
//         var elements = document.querySelectorAll('.animated-text');
//         elements.forEach(function(element) {
//             var textToType = element.textContent;
//             element.textContent = ''; // Clear the initial text
//             typeText(element, textToType, 0);
//         }
//     );
//     }
// });
