function light() {
    document.body.classList.toggle("light-mode");
    document.getElementById('id0').classList.toggle("light-mode-div1");
    document.getElementById('id1').classList.toggle("light-mode-div0");
    document.getElementById('id2').classList.toggle("light-mode-div1");
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#theme").addEventListener("click", light);
});