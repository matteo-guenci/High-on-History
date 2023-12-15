var currentIndex = 0;
var currentClassName = "";

function highlightElement(className) {
    var elements = document.querySelectorAll(className);

    if (currentClassName !== className) {
        currentIndex = 0;
        if (currentClassName) {
            var prevElements = document.querySelectorAll(currentClassName);
            prevElements.forEach(function (element) {
                element.classList.remove("highlight");
            });
        }
    }

    if (currentIndex > 0 && currentIndex !== elements.length) {
        elements[currentIndex - 1].classList.remove("highlight");
    }

    if (currentIndex < elements.length) {
        desiredFunction(elements[currentIndex])
        function desiredFunction(elemento) {
    // checking if element with this ID exists and if the element inside of accordion
    //if (($('#'+desiredId).length) && ($('#'+desiredId).closest('.collapse').length)) {
        if (elemento) {
        // showing the closes parent '.collapse' of our ID
        elemento.classList.add("highlight");
        
        // showing the closes parent '.collapse' of our ID
        $(elemento).closest('.collapse').collapse('show');

        // smooth animation to our ID
        
        currentIndex++;
        setTimeout(function () {
        // smooth animation to our ID
        elemento.scrollIntoView({ behavior: "smooth", block: 'center'});

        // behavior: 'auto',
            // block: 'center',
            // inline: 'center'
        }, 400); 
    }
    
    }
    }
    if (currentIndex == elements.length) {
        elements[elements.length - 1].classList.remove("highlight");
        currentIndex = 0;
        desiredFunction(elements[currentIndex])
        function desiredFunction(elemento) {
    // checking if element with this ID exists and if the element inside of accordion
    //if (($('#'+desiredId).length) && ($('#'+desiredId).closest('.collapse').length)) {
        if (elemento) {
        // showing the closes parent '.collapse' of our ID
        elemento.classList.add("highlight");
        
        // showing the closes parent '.collapse' of our ID
        $(elemento).closest('.collapse').collapse('show');

        // smooth animation to our ID
        
        setTimeout(function () {
        // smooth animation to our ID
        elemento.scrollIntoView({ behavior: "smooth", block: 'center'});

        // behavior: 'auto',
            // block: 'center',
            // inline: 'center'
        }, 400); 
    }
    
    }
    }


    currentClassName = className;
}