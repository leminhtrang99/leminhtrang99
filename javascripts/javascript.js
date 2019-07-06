
function responsiveNavbar(){
    var x = document.getElementById("navBar");
    console.log(document.getElementById("navBar").className);
    if (document.getElementById("navBar").className == "row navbar") {
        
        x.classList.add('responsive');
    } else {
        document.getElementById("navBar").className = "row navbar";
    }
}

document.getElementById("navbarIcon").addEventListener("click", responsiveNavbar);
