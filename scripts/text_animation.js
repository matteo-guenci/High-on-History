// Funzione per simulare la scrittura del testo
function typeText(element, text, index) {
    console.log("Inside typeText");
    console.log("loadedStyle:", loadedStyle);
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
    console.log("DOMContentLoaded event fired");
    console.log("loadedStyle:", loadedStyle);
    if (loadedStyle === 'css/2030.css') {
        var elements = document.querySelectorAll('.animated-text');
        console.log("Found elements:", elements);
        elements.forEach(function(element) {
            var textToType = element.textContent;
            element.textContent = ''; // Cancella il testo iniziale
            typeText(element, textToType, 0);
        });
    }
});
