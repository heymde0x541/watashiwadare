function auto() {
    let hFrame = (document.querySelector('#frame').offsetWidth * 0.5625) + 'px';
    document.documentElement.style.setProperty("--h-frame", hFrame);
}

document.addEventListener('DOMContentLoaded', auto);
