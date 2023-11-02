// // // Funzione per simulare la scrittura del testo
// // function typeText(element, text, index) {
// //         if (index < text.length) {
// //             element.textContent += text.charAt(index);
// //             setTimeout(function() {
// //                 typeText(element, text, index + 1);
// //             }, 50);
// //         }
// //     }


// // // Seleziona tutti gli elementi con la classe "animated-text" e avvia l'effetto di scrittura
// // document.addEventListener('DOMContentLoaded', function() {
// //         var elements = document.querySelectorAll('.animated-text');
// //         elements.forEach(function(element) {
// //             var textToType = element.textContent;
// //             element.textContent = ''; // Cancella il testo iniziale
// //             typeText(element, textToType, 0);
// //         });
// //     }
// // );
// console.log("currentStyle: ", currentStyle)
// function typeText(element, text, index) {
//     console.log("ciaoooo")
//     if (index < text.length) {
//         element.textContent += text.charAt(index);
//         setTimeout(function() {
//             typeText(element, text, index + 1);
//         }, 5);
//     }
// }

// document.addEventListener('DOMContentLoaded', function() {
//     // Use the already declared loadedStyle variable
//         var elements = document.querySelectorAll('.animated-text');
//         elements.forEach(function(element) {
//             var textToType = element.textContent;
//             element.textContent = ''; // Clear the initial text
//             typeText(element, textToType, 0);
//         }
//     );
//     }
// );

// function typeText(element, text, index) {
//     if (index < text.length) {
//         element.textContent += text.charAt(index);
//         setTimeout(function() {
//             typeText(element, text, index + 1);
//         }, 50);
//     }
// }

// function checkStyleAndApplyChanges() {
//     if (loadedStyle === "css/2030.css") {
//         applyChanges();
//     }
// }

// function applyChanges() {
//     var elements = document.querySelectorAll('.animated-text');
//     elements.forEach(function(element) {
//         var textToType = element.textContent;
//         element.textContent = ''; // Clear the initial text
//         typeText(element, textToType, 0);
//     });
// }

// document.addEventListener('DOMContentLoaded', function() {
//     checkStyleAndApplyChanges(); // Check the style when the page is loaded

//     // Set an interval to check and apply changes every second
//     setInterval(checkStyleAndApplyChanges, 1000);
// });


// var intervalId; // Variable to store the interval ID
// var currentStyle = null; // Variable to keep track of the current style

// function typeText(element, text, index) {
//     if (index < text.length) {
//         element.textContent += text.charAt(index);
//         setTimeout(function() {
//             typeText(element, text, index + 1);
//         }, 50);
//     }
// }

// function checkStyleAndApplyChanges() {
//     if (loadedStyle === "css/2030.css") {
//         if (currentStyle !== loadedStyle) {
//             currentStyle = loadedStyle;
//             clearInterval(intervalId); // Clear the interval when the style changes
//             applyChanges();
//         }
//     } else {
//         currentStyle = null;
//         clearInterval(intervalId); // Clear the interval if style is not "css/2030.css"
//     }
// }

// function applyChanges() {
//     var elements = document.querySelectorAll('.animated-text');
//     elements.forEach(function(element) {
//         var textToType = element.textContent;
//         element.textContent = ''; // Clear the initial text
//         typeText(element, textToType, 0);
//     });
// }

// document.addEventListener('DOMContentLoaded', function() {
//     checkStyleAndApplyChanges(); // Check the style when the page is loaded

//     // Set an interval to check and apply changes every second
//     intervalId = setInterval(checkStyleAndApplyChanges, 1000);
// });
