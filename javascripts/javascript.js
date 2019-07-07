

function revealSidebar(){
    document.getElementById('sideBar').classList.toggle('is-reveal');
    document.getElementById('sideBarHide').classList.toggle('is-hidden');
    document.getElementById('sideBarReveal').classList.toggle('is-hidden');
}

function hideSidebar(){
    document.getElementById('sideBar').classList.toggle('is-reveal');
    document.getElementById('sideBarHide').classList.toggle('is-hidden');
    document.getElementById('sideBarReveal').classList.toggle('is-hidden');
}
document.getElementById("sideBarReveal").addEventListener("click", revealSidebar);
document.getElementById("sideBarHide").addEventListener("click", hideSidebar);
