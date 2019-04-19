// Your code goes here

const btn = document.querySelectorAll(".btn")[1];
btn.addEventListener('mouseover', function (event) {
    btn.style.backgroundColor = "purple";
});

const noFoot = document.querySelector(".footer");
window.addEventListener('keydown', function (event) {
    noFoot.style.display = "none";
});

const pickColor = document.querySelector(".content-pick");
window.addEventListener('wheel', function (event) {
    pickColor.style.color = "blue";
});

