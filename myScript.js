window.addEventListener("beforeunload", sendBeforeUnload, false)
function sendBeforeUnload() {    
    // Add delay
    async addDelay() {
    await new Promise(done => setTimeout(() => done(), 5000));
    }
    
    addDelay();
}
