//prova
// Funzione per simulare la scrittura del testo
function startTypeText(element) {
    var textToType = element.textContent;
    element.textContent = ''; // Cancella il testo iniziale
    typeText(element, textToType, 0);
}

function typeText(element, text, index) {
    if (!element.blocked && index < text.length) {
        element.textContent += text.charAt(index);
        setTimeout(function() {
            typeText(element, text, index + 1);
        }, 10);
    }
}



