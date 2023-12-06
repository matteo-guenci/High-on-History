cssToMapboxMap = new Map();
cssToMapboxMap.set('css/1500.css', {animation: false, idMappa: 'clmaazdjm015r01nz0xz1fm7b', globeOrMerc: 'mercator'});
cssToMapboxMap.set('css/1800.css', {animation: false, idMappa:'clma93nbc014h01qu98yscg1j', globeOrMerc: 'mercator'});
cssToMapboxMap.set('css/1900.css', {animation: false, idMappa:'clo5ph8r100qd01qx03q9cxe8',globeOrMerc: 'mercator'});
cssToMapboxMap.set('css/1960.css', {animation: false, idMappa:'clm9iatis016j01r714o489li', globeOrMerc: 'globe'});
cssToMapboxMap.set('css/1990s.css', {animation: false, idMappa:'cln9gfiul03hh01pfce00avi5', globeOrMerc: 'globe'});
cssToMapboxMap.set('css/2030.css', {animation: true, idMappa: 'cln9gjoxx01o601qndbqqh4m1', globeOrMerc: 'globe'});



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
const myElement = document.querySelector('#maintitle');
function init() {
    if (myElement) {
        pubSubInstance.subscribe(myElement, "changeCss", function (event) {
            // console.log("#maintitle.subscribe: " + event.detail.animation);
            if (event.detail.animation) {
                myElement.onmouseover = animazione;
            } else {
                clearInterval(interval);
                myElement.textContent = "High on History";
                myElement.onmouseover = null;
            }
        });
    }
    const mySecondElement = document.querySelectorAll('.animated-text');
    // var elements = document.querySelectorAll('.animated-text');
    if (mySecondElement) {
        mySecondElement.forEach(function (element) {
            pubSubInstance.subscribe(element, "changeCss", function (event) {
                // console.log("#element.subscribe: " + event.detail.animation);
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
}


window.addEventListener('DOMContentLoaded', init);
window.addEventListener('load', init);
//esegue la funzione solo dopo che la pagina è stata caricata per intero
document.addEventListener('DOMContentLoaded', function () {
    init();
}, false);

function change(cssName) { //qui di passare due parametri, "CssName" e "IdMappa" (cssname sarebbe equivalente a value) IDMappa lo passi sopra sul click dei piccoli menu (parte variabile da incollare esempio == clmaazdjm015r01nz0xz1fm7b)
    const stylesheetLink = document.getElementById('stile');
    var oggetto = {};
    //qui non c'è più bisogno dell if visto che value una volta sostituito sopra l'id sarebbela stringa stessa del css scelto -->
    //oggetto = { cssname: value, animation: false };
    //mappa = createMap("mapbox://styles/sorre33/" + idMappa, 'mercator');

    params = cssToMapboxMap.get(cssName);
    oggetto = { cssname: cssName, animation: params['animation'] };
    stylesheetLink.href = cssName;
    currentStyle = stylesheetLink.getAttribute("href");
    mappa = createMap("mapbox://styles/sorre33/" + params['idMappa'], params['globeOrMerc']);
    pubSubInstance.publish("changeCss", oggetto);
    console.log("currentStyle:", currentStyle);
    console.log("oggetto:", oggetto);
}