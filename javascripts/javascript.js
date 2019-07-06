
function responsiveNavbar(){
    var x = document.getElementById("myNavBar");
    console.log(document.getElementById("myNavBar").className);
    if (document.getElementById("myNavBar").className == "row navbar") {
        
        x.classList.add('responsive');
    } else {
        document.getElementById("myNavBar").className = "row navbar";
    }
}

document.getElementById("navbarIcon").addEventListener("click", responsiveNavbar);
