document.documentElement.style.setProperty("--text-color", "#F2CDCD");

function light() {
    document.body.classList.toggle("light-mode");
    document.getElementById('id0').classList.toggle("light-mode-div1");
    document.getElementById('id1').classList.toggle("light-mode-div0");
    document.getElementById('id2').classList.toggle("light-mode-div1");
    /*
    if (document.documentElement.style.getPropertyValue('--text-color') == "#F2CDCD"){
        document.documentElement.style.setProperty("--text-color", "#161320");
        document.getElementById('switch').innerHTML = "darktheme";
    }
    else {
        document.documentElement.style.setProperty("--text-color", "#F2CDCD");
        document.getElementById('switch').innerHTML = "lighttheme";
    }*/
}
