document.addEventListener('DOMContentLoaded', function () {
    setupToggle('hamburger1', 'menu-card');
    setupToggle('hamburger2', 'menu-card');
    setupToggle('hamburger2', 'navbarSupportedContent');
    setupToggle('hamburger3', 'navbarSupportedContent');


    // Additional setup functions as needed

    function setupToggle(hamburgerId, targetId) {
        var hamburger = document.getElementById(hamburgerId);
        var targetElement = document.getElementById(targetId);

        if (hamburger && targetElement) {
            // Toggle 'active' class on click
            hamburger.addEventListener('click', function () {
                targetElement.classList.toggle('active');
            });

            // Remove 'active' class on window load and resize if width is greater than or equal to 768
            window.addEventListener('load', handleResize);
            window.addEventListener('resize', handleResize);

            function handleResize() {
                if (window.innerWidth >= 768) {
                    targetElement.classList.remove('active');
                }
            }
        }
    }
});
