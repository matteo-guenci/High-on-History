const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
function animazione(){
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            this.innerText = this.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return this.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");

            if (iteration >= this.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;

            // Apply animation specific to 'css/2030.css'.
            // You can add your animation logic here.
        }, 50);
    }