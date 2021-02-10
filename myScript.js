window.addEventListener("beforeunload", sendBeforeUnload, false)
function sendBeforeUnload() {    
    // Add delay
    function wait(ms) {
        let start = Date.now();
        let now = start;
        while (now - start < ms) {
            now = Date.now();
        }
    }
    
    wait(500);
}
