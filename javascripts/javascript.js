
function revealSidebar(){
    document.getElementById('sideBar').classList.toggle('is-reveal');
}
document.getElementById("navbarIcon").addEventListener("click", revealSidebar);
