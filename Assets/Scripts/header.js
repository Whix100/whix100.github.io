function hamburgerClick() {
    var nav = document.getElementById("navigation");

    if (nav.style.display === "none" || nav.style.display === "")
            nav.style.display = "inline-block";
        else
            nav.style.display = "none";
}

function dropdownButtonClick(url) {
    var drop = event.target.parentElement.getElementsByClassName("dropdown-content")[0];
    if (url !== "" && window.innerWidth > 900) {
        window.location = url;
    } else if (drop != null && window.innerWidth <= 900) {
        if (drop.style.display === "none" || drop.style.display === "") {
            drop.style.display = "block";
        } else {
            drop.style.display = "none";
        }
    }
}