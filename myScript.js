user = 'Pinocchio';
if (typeof sessionStorage.tab_id == 'undefined') {
    tab_id = user + Date.now().toString();
    sessionStorage.setItem('tab_id', tab_id);
} else {
    tab_id = sessionStorage.getItem('tab_id');
}
