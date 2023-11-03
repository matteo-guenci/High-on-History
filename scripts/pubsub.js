//export default 
class PubSubManager {

    constructor() {
        this.subscribers = {}
    }

    subscribe(element, eventId, callback) {
        if (typeof callback !== 'function') {
            throw new Error(`${typeof callback} is not a valid argument for subscribe method, expected a function instead`)
        }
        // check if you already have this event
        this.subscribers[eventId] = this.subscribers[eventId] || [];

        // add the listener
        element.addEventListener(eventId, callback);

        // remember the element
        this.subscribers[eventId].push(element);
    }

    unsubscribe(element, eventId) {
        this.subscribers[eventId] = this.subscribers[eventId].filter(elem => elem !== element)
    }

    publish(eventId, payload) {
        if (!this.subscribers[eventId])
            return;

        // get every element where you want to dispatch the event
        this.subscribers[eventId].forEach(function (element) {
            element.dispatchEvent(new CustomEvent(eventId, {
                bubbles: true,
                detail: payload
            }));
        })
    }
}

const pubSubInstance = new PubSubManager();

function init() {
    pubSubInstance.subscribe(document.querySelector("#maintitle"), "changeCss", function (event) {
        console.log("#maintitle.subscribe: " + event.detail.animation);
        if (event.detail.animation) {
            document.querySelector("#maintitle").onmouseover = animazione;
        } else {
            clearInterval(interval);
            document.querySelector("#maintitle").textContent = "High on History";
            document.querySelector("#maintitle").onmouseover = null;
        }
    });

    var elements = document.querySelectorAll('.animated-text');
    elements.forEach(function (element) {
        pubSubInstance.subscribe(element, "changeCss", function (event) {
            console.log("#element.subscribe: " + event.detail.animation);
            if (event.detail.animation) {
                element.blocked = false;
                startTypeText(this);
            } else {
                element.blocked = true;
                element.innerHTML = this.getAttribute("data-value");
            }
        });
        pubSubInstance.subscribe(element, "click", function (event) {
            element.blocked = true;
            element.innerHTML = this.getAttribute("data-value");
        });
    });
}
