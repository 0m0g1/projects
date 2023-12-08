let minDistance = Infinity;
let n = 0;
const percentageLable = document.querySelector("#percentage");
const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");
const pathPreveiw = document.querySelector("#path-previews");
const pen2 = pathPreveiw.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
pathPreveiw.width = window.innerWidth / 5;
pathPreveiw.height = window.innerHeight / 5;

let cities = [];
let order = [];
let optimalOrder = [];
let totalPermutaions = 0;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getTotalDistance() {
    let distance = 0;
    for (let i = 0; i < order.length - 1; i++) {
        const city1 = cities[order[i]];
        const city2 = cities[order[i + 1]];
        distance += Math.sqrt((city1.x - city2.x) ** 2 + (city1.y - city2.y) ** 2);
    }
    return distance;
}

function initializeCalculations() {
    order = [];
    optimalOrder = [];
    minDistance = Infinity;
    cities.forEach((city, index) => {
        order[index] = index;
    })
    n = 0;
    totalPermutaions = factorialRecursive(cities.length);
    render();
}

function getNextOrder() {
    let largestI = -1;
    for (let i = 0; i < order.length - 1; i++) {
        if (order[i] < order[i + 1]) {
            largestI = i;
        }
    }
    
    if (largestI === -1) return -1;

    let largestJ = -1;
    for (let j = largestI + 1; j < order.length; j++) {
        if (order[largestI] < order[j]) {
            largestJ = j;
        }
    }
    swapIndexes(largestI, largestJ);
    const endArray = order.splice(largestI + 1).reverse();
    order = order.concat(endArray);
}

function swapIndexes(i, j) {
    [order[i], order[j]] = [order[j], order[i]];
}


function factorialRecursive(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorialRecursive(n - 1);
    }
}

function createCity(x, y) {
    cities.push({
        x: x,
        y: y
    })
    showCities();
    if (cities.length > 2) {
        initializeCalculations();
    }
}

function clearCanvases() {
    pen.clearRect(0, 0, canvas.width, canvas.height);
    pen2.clearRect(0, 0, pathPreveiw.width, pathPreveiw.height);
}

function deleteCity(x, y) {
    const minDistance = 20;
    cities.forEach((city, index) => {
        const distance = Math.sqrt((city.x - x) ** 2 + (city.y - y) ** 2);
        if (distance < minDistance) {
            clearCanvases();
            cities.splice(index, 1);
            showCities();
            if (cities.length > 2) {
                initializeCalculations();
            }
        }
    })
}

document.onkeydown = (e) => {
    if (e.key == "Control") {
        document.body.style.cursor = "crosshair";
    }
}

document.onkeyup = (e) => {
    if (e.key == "Control") {
        document.body.style.cursor = "auto";
    }
}

document.onmousedown = (e) => {
    if (e.ctrlKey) {
        e.preventDefault();
        if (e.button == 0) {
            createCity(e.clientX, e.clientY);
        } else if (e.button == 2) {
            e.preventDefault()
            deleteCity(e.clientX, e.clientY);
        }
    }
}


function render() {
    const totalDistance = getTotalDistance();
    
    if (totalDistance < minDistance) {
        minDistance = totalDistance;
        optimalOrder = order.slice();
        console.log(totalDistance);
    }
    
    
    clearCanvases();
    showTrailPaths();
    showOptimalPath();
    showCities();

    n++;
    percentageLable.innerHTML = `${((n/totalPermutaions) * 100).toFixed(2)}%`
    if(getNextOrder() != -1 && cities.length > 2) {
        requestAnimationFrame(render);
    }
}

function showTrailPaths() {
    if (n != totalPermutaions - 1) {
        pen2.beginPath();
        pen2.strokeStyle = "white";
        pen2.lineWidth = 1;
        pen2.moveTo(cities[order[0]].x / 5, cities[order[0]].y / 5);
        cities.forEach((city, index) => {
            if (index < cities.length - 1) {
                pen2.lineTo(cities[order[index + 1]].x / 5, cities[order[index + 1]].y / 5);
            }
        })
        pen2.stroke();
    }
}

function showOptimalPath() {
    pen.beginPath();
    pen.lineWidth = 1;
    pen.strokeStyle = "#00a4eb";
    pen.lineWidth = 3;
    pen.moveTo(cities[optimalOrder[0]].x, cities[optimalOrder[0]].y);
    optimalOrder.forEach((index, i) => {
        if (i < optimalOrder.length - 1) {
            pen.lineTo(cities[optimalOrder[i + 1]].x, cities[optimalOrder[i + 1]].y);
        }
    })
    pen.stroke();
    pen2.beginPath();
    pen2.strokeStyle = "#00a4eb";
    pen2.lineWidth = 1.5;
    pen2.moveTo(cities[optimalOrder[0]].x / 5, cities[optimalOrder[0]].y / 5);
    optimalOrder.forEach((index, i) => {
        if (i < optimalOrder.length - 1) {
            pen2.lineTo(cities[optimalOrder[i + 1]].x / 5, cities[optimalOrder[i + 1]].y / 5);
        }
    })
    pen2.stroke();
}

function showCities() {
    pen.strokeStyle = "#00a4eb";
    cities.forEach((city) => {
        pen.beginPath();
        pen.arc(city.x, city.y, 10, 0, 2 * Math.PI);
        pen.stroke();
        pen.fill();
    })
    pen2.strokeStyle = "#00a4eb";
    cities.forEach((city) => {
        pen2.beginPath();
        pen2.arc(city.x / 5, city.y / 5, 2, 0, 2 * Math.PI);
        pen2.stroke();
        pen2.fill();
    })
}

window.onload = () => {
    alert("Press control and left click to add a city");
    alert("Press control and right click to remove a city");
}