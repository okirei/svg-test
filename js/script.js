function showImage() {
    document.getElementById("blur-white").setAttribute('class', 'pop-up-image visible');
}
function hideImage() {
    document.getElementById("blur-white").setAttribute('class', 'pop-up-image');
}
document.addEventListener("scroll", function() {
    // console.log(window.scrollY);
    if (window.scrollY > 100) {
        document.getElementById("text-test").setAttribute('class', 'scroll-text');
    } else {
        document.getElementById("text-test").setAttribute('class', '');
    }
});
