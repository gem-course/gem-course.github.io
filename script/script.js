window.onload = function() {
    var right = document.getElementById('right');
    var left = document.getElementById('left');
    var firstblock = this.document.getElementById('first-block');
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile || (window.innerWidth < 768)) {
    } else {
        firstblock.style.height = window.innerHeight - 24 + 'px';
        right.style.height = window.innerHeight - 48 + 'px';
        left.style.height = window.innerHeight - 48 + 'px';
    }

}