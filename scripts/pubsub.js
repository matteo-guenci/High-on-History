cssToMapboxMap = new Map();
cssToMapboxMap.set('css/1500.css', {animation: false, idMappa: 'clmaazdjm015r01nz0xz1fm7b', globeOrMerc: 'mercator'});
cssToMapboxMap.set('css/1800.css', {animation: false, idMappa: 'clma93nbc014h01qu98yscg1j', globeOrMerc: 'mercator'});
cssToMapboxMap.set('css/1900.css', {animation: false, idMappa: 'clo5ph8r100qd01qx03q9cxe8', globeOrMerc: 'mercator'});
cssToMapboxMap.set('css/1960.css', {animation: false, idMappa: 'clm9iatis016j01r714o489li', globeOrMerc: 'globe'});
cssToMapboxMap.set('css/1990s.css', {animation: false, idMappa: 'cln9gfiul03hh01pfce00avi5', globeOrMerc: 'globe'});
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
    scrivesessiondata(currentStyle);
    mappa = createMap("mapbox://styles/sorre33/" + params['idMappa'], params['globeOrMerc']);
    pubSubInstance.publish("changeCss", oggetto);
    console.log("currentStyle:", currentStyle);
    console.log("oggetto:", oggetto);
}

function changeAndScroll(cssFile, targetId) {
    change(cssFile);

    // Delay the scroll to allow time for CSS changes to apply
    setTimeout(function() {
        var targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center',
            inline: 'center'});
        }
    }, 100); 
}

function scrivesessiondata(currentStyle){
    sessionStorage.setItem("currentStyle", currentStyle);
}
function leggisessiondata(key){
    return sessionStorage.getItem(key)
}


const pubSubInstance = new PubSubManager();
function init() {
    const myElement = document.querySelector('#maintitle');

    if (myElement) {
        pubSubInstance.subscribe(myElement, "changeCss", function (event) { //event qui è il payload, quindi "oggetto"
            // console.log("#maintitle.subscribe: " + event.detail.animation);
            if (event.detail.animation) {
                myElement.onmouseover = function () {
                    animazione(myElement);
                };
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
    // let urlParams = new URLSearchParams(window.location.search);
    //const selectedStyle = urlParams.get("style") !== null ? urlParams.get("style") : currentStyle
    const selectedStyle = leggisessiondata("currentStyle") !== null ? leggisessiondata("currentStyle") : "css/1500.css";

    change(selectedStyle);
}


// window.addEventListener('DOMContentLoaded', init);
// window.addEventListener('load', init);

//prendere la window location e vedere se quello che è stato chiamato è index piuttsto che first, in base a questo chiamare create map
//esegue la funzione solo dopo che la pagina è stata caricata per intero
document.addEventListener('DOMContentLoaded', function () {
    init();
}, false);



function createMap (stylelink, projection) {
    const currentPath = window.location.pathname;
    const fileName = currentPath.substring(currentPath.lastIndexOf("/") + 1);

    if (fileName !== "index.html") {
        console.log("This script should only run on index.html");
        return;
    }
    else{
    mapboxgl.accessToken = 'pk.eyJ1Ijoic29ycmUzMyIsImEiOiJjbGpzY3pkZTYwcjNlM21tanlmYThuMWxuIn0.93a8Z_pxuLbk19TY37tOzg';
    const map = new mapboxgl.Map({
    container: 'map',
    style: stylelink,
    projection: projection, // Display the map as a globe, since satellite-v9 defaults to Mercator
    zoom: 1.6,
    center: [-90, 40]
    });

    map.on('click', (event) => {
    const features = map.queryRenderedFeatures(event.point, {
    layers: ['highonhistory']
    });
    if (!features.length) {
    return;
    }
    const feature = features[0];
    const stylesheetLink = document.getElementById('stile').getAttribute("href");
    const popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
    `<h3>${feature.properties.place_name}</h3><p><a href="${feature.properties.publication}.html?style=${stylesheetLink}#${feature.properties.title}" class="accordionLink">${feature.properties.description}</a></p>`
    )
    .addTo(map);
    });
    
    map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
    
    });
    
    // The following values can be changed to control rotation speed:
    
    // At low zooms, complete a revolution every two minutes.
    const secondsPerRevolution = 120;
    // Above zoom level 5, do not rotate.
    const maxSpinZoom = 5;
    // Rotate at intermediate speeds between zoom levels 3 and 5.
    const slowSpinZoom = 3;
    
    let userInteracting = false;
    let spinEnabled = true;
    
    function spinGlobe() {
        const zoom = map.getZoom();
        if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
        // Slow spinning at higher zooms
        const zoomDif =
        (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
        distancePerSecond *= zoomDif;
        }
        const center = map.getCenter();
        center.lng -= distancePerSecond;
        // Smoothly animate the map over one second.
        // When this animation is complete, it calls a 'moveend' event.
        map.easeTo({ center, duration: 1000, easing: (n) => n });
        }
    }
    
    // Pause spinning on interaction
    map.on('mousedown', () => {
    userInteracting = true;
    
    });
    
    // Restart spinning the globe when interaction is complete
    map.on('mouseup', () => {
    userInteracting = false;
    spinGlobe();
    });
    
    // These events account for cases where the mouse has moved
    // off the map, so 'mouseup' will not be fired.
    map.on('dragend', () => {
    userInteracting = false;
    spinGlobe();
    });
    map.on('pitchend', () => {
    userInteracting = false;
    spinGlobe();
    });
    map.on('rotateend', () => {
    userInteracting = false;
    spinGlobe();
    });
    
    // When animation is complete, start spinning if there is no ongoing interaction
    map.on('moveend', () => {
    spinGlobe();
    });

    // function playpause() {
    //     var btn = document.getElementsByClassName('btn-spin');
    //     spinEnabled = !spinEnabled;
    //     if (spinEnabled) {
    //         document.addEventListener('click', (e) => {
    //             spinGlobe();
    //         });
    //     } else {
    //         map.stop();
    //         btn[0].classList.toggle("pause");
    //     }
    // }

    function myFunction() {
        var element = document.getElementById("button");
        element.classList.toggle("pause");
        spinEnabled = !spinEnabled;
        if (spinEnabled) {
                spinGlobe();
        } else {
            map.stop();
        }
        }
    
    //var element = document.getElementById("button");
    //if (!("pause" in element.classList)) { console.log("ok";)spinGlobe();
    //}
    //else {
    //    map.stop()
    //}
    spinGlobe();
    var element = document.getElementById("button");
    if (spinEnabled) {
        element.classList.remove("pause");
    }
    
    return {
        myFunction: myFunction
    };
        }
    }
