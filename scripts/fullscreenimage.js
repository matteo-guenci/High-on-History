const documentationImg = document.querySelector('#documentation img');
const documentationDiv = document.getElementById('documentation');

function showFullScreenImage() {
    const fullscreenImage = document.createElement('div');
    fullscreenImage.id = 'fullscreen-image';
    fullscreenImage.innerHTML = '<div id="close-button" onclick="closeFullScreenImage()">&times;</div>' +
        '<img src="' + documentationImg.src + '" alt="Full-Screen Image">';
    document.body.appendChild(fullscreenImage);
    fullscreenImage.style.display = 'block';
    document.body.requestFullscreen().catch((error) => {
        console.error('Error entering fullscreen mode:', error);
    });
}

function closeFullScreenImage() {

    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
    const fullscreenImage = document.getElementById('fullscreen-image');
    if (fullscreenImage) {
        fullscreenImage.remove();
    }
    
    documentationDiv.scrollIntoView({ behavior: 'smooth' });
}

documentationImg.addEventListener('click', showFullScreenImage);



// const documentationContainer = document.getElementById('content');

// function showFullScreenImage(event) {
//     const clickedElement = event.target;

//     while (clickedElement && !clickedElement.classList.contains('documentation-img')) {
//         clickedElement = clickedElement.parentElement;
//     }

//     if (clickedElement && clickedElement.classList.contains('documentation-img')) {
//         const clickedImage = clickedElement.querySelector('img');
//         const fullscreenImage = document.createElement('div');
//         fullscreenImage.id = 'fullscreen-image';
//         fullscreenImage.innerHTML = '<div id="close-button" onclick="closeFullScreenImage()">&times;</div>' +
//             '<img src="' + clickedImage.src + '" alt="Full-Screen Image">';
//         document.body.appendChild(fullscreenImage);
//         fullscreenImage.style.display = 'block';
//         document.body.requestFullscreen().catch((error) => {
//             console.error('Error entering fullscreen mode:', error);
//         });
//     }
// }

// function closeFullScreenImage() {
//     if (document.fullscreenElement) {
//         document.exitFullscreen();
//     }
//     const fullscreenImage = document.getElementById('fullscreen-image');
//     if (fullscreenImage) {
//         fullscreenImage.remove();
//     }

//     documentationContainer.scrollIntoView({ behavior: 'smooth' });
// }

// documentationContainer.addEventListener('click', showFullScreenImage);




