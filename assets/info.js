
document.getElementById("boton1").addEventListener("click", function() {
    window.location.href = "/infoweb/skills.html";
});

document.getElementById("boton2").addEventListener("click", function() {
    window.location.href = "/infoweb/snake.html";
});

var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");

function startBeatAnimation(element) {
    var icon = element.querySelector("i");
    icon.classList.add("fa-beat");
}

function stopBeatAnimation(element) {
    var icon = element.querySelector("i");
    icon.classList.remove("fa-beat");
}

boton1.addEventListener("mouseenter", function() {
    startBeatAnimation(boton1);
});

boton1.addEventListener("mouseleave", function() {
    stopBeatAnimation(boton1);
});

boton2.addEventListener("mouseenter", function() {
    startBeatAnimation(boton2);
});

boton2.addEventListener("mouseleave", function() {
    stopBeatAnimation(boton2);
});