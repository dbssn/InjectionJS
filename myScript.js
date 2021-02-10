window.addEventListener("beforeunload", sendBeforeUnload, false)
function sendBeforeUnload() {    
    // Add delay
    setTimeout(function(){console.log('');}, 2000);
}
