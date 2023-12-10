document.addEventListener('DOMContentLoaded', function() {

// looking for hash in URL
if (location.hash) {
let desiredHash = window.location.hash.split('#')[1]; //getting data from the left and right from #, and calling the right one by '[1]'  
desiredFunction(desiredHash); // calling function and sending hash
}

// better to use some class like '.accordionLink' and check a link for it so other links with '#' will work as they should, without a conflict
$('a[href*="#"].accordionLink').click(function (e) {		
e.preventDefault();
let linkId = $.attr(this, 'href').split('#')[1]; //getting data from the left and right from #, and calling the right one by '[1]'  
desiredFunction(linkId); // calling function and sending hash
//$('#'+linkId).scrollIntoView();
});

function desiredFunction(desiredId) {
// checking if element with this ID exists and if the element inside of accordion
//if (($('#'+desiredId).length) && ($('#'+desiredId).closest('.collapse').length)) {
if (($('#'+desiredId).length) && ($('#'+desiredId).closest('.collapse').length)) {
    // showing the closes parent '.collapse' of our ID
    $('#'+desiredId).closest('.collapse').collapse('show'); 
    setTimeout(function () {
    // smooth animation to our ID
    document.getElementById(window.location.hash.split('#')[1]).scrollIntoView({
        
        // behavior: 'auto',
        // block: 'center',
        // inline: 'center'
    });
    }, 300); // this interval is necessary for bootstrap to complete the accordion animation
}

}})