document.addEventListener('DOMContentLoaded', init);
document.getElementById('cgshow').addEventListener('click', showCGjs);

function init() {
    console.log("DOM has been loaded successfully")
}

function showCGjs() {
    img = document.getElementById('CGexample');
    if (img.classList.contains('imgHide')) {
        img.classList.remove('imgHide');
        img.classList.add('imgShow');
        console.log("plop");
    } else {
        img.classList.add('imgHide');
        img.classList.remove('imgShow');
    }

}