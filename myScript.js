user = 'Pinocchio';
if (typeof sessionStorage.tabID == 'undefined') {
    tabID = user + Date.now().toString();
    sessionStorage.setItem('tabID', tabID);
} else {
    tab_id = sessionStorage.getItem('tab_id');
}
