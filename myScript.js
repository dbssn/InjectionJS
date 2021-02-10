window.addEventListener("beforeunload", sendBeforeUnload, false)
function sendBeforeUnload() {    
    // Add delay
    setTimeout(function(){}, 2000);
}
