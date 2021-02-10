window.addEventListener("beforeunload", sendBeforeUnload, false)
function sendBeforeUnload() {    
    // Add delay
    function addDelay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 2000;
        });
    }
}
