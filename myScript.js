window.addEventListener("beforeunload", sendBeforeUnload, false)
function sendBeforeUnload() {    
    // Add delay
    function wait(ms) {
        var start = Date.now();
        now = start;
        while (now - start < ms) {
            now = Date.now();
        }
    }
    
    wait(2000);
}
