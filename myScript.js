window.addEventListener("beforeunload", sendBeforeUnload, false)
function sendBeforeUnload() {
    // Send data if beforeunload is triggered
    send_coords();
    send_clicks();
    send_special_clicks();
    send_wheel();
    send_keys();
    send_shortcuts();
    send_state();
    
    // Add delay
    setTimeout(function(){}, 2000);
}
