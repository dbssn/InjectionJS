window.addEventListener("beforeunload", sendBeforeUnload, false)
function sendBeforeUnload() {    
    // Add delay
    function addDelay(duration) {
        let origin = Date.now();
        let now = origin;
        while (now - origin < duration) {
            now = Date.now();
        }
    }
    
    addDelay(250);
}
