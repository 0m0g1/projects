const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");
const flockers = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function createFlockers() {
    
}