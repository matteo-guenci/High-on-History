// Funzione per simulare la scrittura del testo
function typeText(element, text, index) {
    if (loadedStyle === 'css/2030.css') {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            setTimeout(function() {
                typeText(element, text, index + 1);
            }, 50);
        }
    }
}

// Seleziona tutti gli elementi con la classe "animated-text" e avvia l'effetto di scrittura
document.addEventListener('DOMContentLoaded', function() {
    if (loadedStyle === 'css/2030.css') {
        var elements = document.querySelectorAll('.animated-text');
        elements.forEach(function(element) {
            var textToType = element.textContent;
            element.textContent = ''; // Cancella il testo iniziale
            typeText(element, textToType, 0);
        });
    }
});
