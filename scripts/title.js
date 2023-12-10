document.addEventListener('DOMContentLoaded', function() {

const scrollableDiv = document.getElementById('prova');


scrollableDiv.addEventListener('scroll', function() {

if (scrollableDiv.scrollTop <30) {
    
    document.querySelector("#title").style.transform = "scale(1)";
    document.querySelector(".wrapper").style.height = "94.3%";
    document.querySelector(".wrapper").style.marginBottom = "0%";
    
    
    document.querySelector("#title").style.paddingTop = "0em";
    document.querySelector("#title").style.marginBottom = "1%";
    document.querySelector("#title").style.marginTop = "1%";
        
    
}
else {
    document.querySelector("#title").style.transform = "scale(0.4)";
    document.querySelector(".wrapper").style.height = "91vh";
    document.querySelector("#title").style.paddingTop = "0%";
    document.querySelector("#title").style.marginTop = "0%";
    
    document.querySelector("#title").style.marginBottom = "0%";
    
    document.querySelector(".wrapper").style.marginTop = "0%";
}
})});
