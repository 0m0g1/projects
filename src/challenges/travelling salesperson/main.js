const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let cities = [];
let optimalPath = [];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getTotalDistance(array) {
    let distance = 0;
    for (let i = 0; i < array.length - 1; i++) {
        distance += Math.sqrt(((array[i].x - array[i + 1].x) ** 2) + ((array[i].y - array[i + 1].y) ** 2));
    }
    return distance;
}


function createCities() {
    for (let i = 0; i < getRndInteger(4, 15); i++) {
        const city = {
            x: getRndInteger(10, canvas.width - 10),
            y: getRndInteger(10, canvas.height - 10)
        }
        cities.push(city);
    }
}

function shuffleCities() {
    let shuffledCities = cities.slice();
    for (let i = 0; i < cities.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCities[i], shuffledCities[j]] = [shuffledCities[j], shuffledCities[i]];
    }
    return shuffledCities;
}

let minDistance = Infinity;

pen.strokeStyle = "#eba4eb";
function render() {
    pen.clearRect(0, 0, canvas.width, canvas.height);
    
    const shuffledCities = shuffleCities();
    const totalDistance = getTotalDistance(shuffledCities);
    
    if (totalDistance < minDistance) {
        minDistance = totalDistance;
        optimalPath = shuffledCities.slice();
        console.log(minDistance);
    }

    pen.strokeStyle = "white";
    pen.lineWidth = 1;
    pen.beginPath();
    pen.moveTo(shuffledCities[0].x, shuffledCities[0].y);
    shuffledCities.forEach((city, index) => {
        if (index < shuffledCities.length - 1) {
            pen.lineTo(shuffledCities[index+1].x, shuffledCities[index + 1].y);
        }
    })
    pen.stroke();
    
    pen.strokeStyle = "#00a4eb";
    pen.lineWidth = 3;
    pen.beginPath();
    pen.moveTo(optimalPath[0].x, optimalPath[0].y);
    optimalPath.forEach((city, index) => {
        if (index < optimalPath.length - 1) {
            pen.lineTo(optimalPath[index+1].x, optimalPath[index + 1].y);
        }
    })
    pen.stroke();
    
    pen.strokeStyle = "#00a4eb";
    cities.forEach((city) => {
        pen.beginPath();
        pen.arc(city.x, city.y, 10, 0, 2 * Math.PI);
        pen.stroke();
        pen.fill();
    })
    requestAnimationFrame(render);
}

createCities();
render();