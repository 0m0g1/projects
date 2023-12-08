let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const output = document.querySelector("#lexograph");

function render() {
    let largestI = -1;
    for (let i = 0; i < values.length - 1; i++) {
        if (values[i] < values[i + 1]) {
            largestI = i;
        }
    }

    if (largestI === -1) return;

    let largestJ = -1;
    for (let j = largestI + 1; j < values.length; j++) {
        if (values[largestI] < values[j]) {
            largestJ = j;
        }
    }

    swapIndexes(largestI, largestJ);

    const endArray = values.splice(largestI + 1);
    endArray.reverse();
    values = values.concat(endArray);
    output.innerHTML = values.join("");
    requestAnimationFrame(render);
}

function swapIndexes(i, j) {
    [values[i], values[j]] = [values[j], values[i]];
}

render();
