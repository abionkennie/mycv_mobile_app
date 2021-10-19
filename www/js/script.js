const Gallery = document.querySelector("#gallery")
const btnP = document.querySelectorAll('.btn');
const forms = document.forms['add-pics']
const hidePics = document.querySelector('#hide');
const boxPics = document.querySelector('#box-pics .box-container');

const mediaQuery = window.matchMedia('(min-width: 576px)')
    // Check if the media query is true
function checkMedia() {
    if (mediaQuery.matches) {
        var y = document.getElementById("navigationVertical");
        y.style.display = "none";
    }
}


mediaQuery.addListener(checkMedia)

hidePics.addEventListener('change', function(e) {
    if (hidePics.checked) {
        boxPics.style.display = "none"
    } else {
        boxPics.style.display = "block"
    }
});

function myFunction() {
    // var x = document.getElementById("navigation");
    var y = document.getElementById("navigationVertical");
    if (y.style.display === "block") {
        // x.style.display = "none";
        y.style.display = "none";
    } else {
        y.style.display = "block";

    }
}