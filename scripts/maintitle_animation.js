// if (currentStyle.endsWith("2030.css")) soluzione alternativa a if loadedstyle....

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
document.querySelector("#maintitle").onmouseover = event => {
    if (loadedStyle === 'css/2030.css') {
        // console.log("loadedstyle: ", loadedStyle)
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;

            // Apply animation specific to 'css/2030.css'.
            // You can add your animation logic here.
        }, 50);
    }
}
