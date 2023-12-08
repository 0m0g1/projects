const textArea = document.querySelector("#text-area");
const statusLabel = document.querySelector("#status");
const openingInput = document.querySelector("#opening");
const closingInput = document.querySelector("#closing");
const scanText = document.querySelector("#scan");

function balanced() {
    let count = 0;
    const text = textArea.value;

    if (text === "") {
        statusLabel.innerHTML = "There is no input text";
        statusLabel.style.backgroundColor = "grey";
        return;
    }
    
    const openingSymbol = openingInput.value;
    const closingSymbol = closingInput.value;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == openingSymbol) {
            count++;
        } else if (text[i] == closingSymbol) {
            count--;
        }
    }
    if (count === 0) {
        statusLabel.style.backgroundColor = "green";
        statusLabel.innerHTML = "All good";
    } else {
        if (count < 0) {
            statusLabel.innerHTML = `You are missing ${count * -1} "${openingInput.value}"`;
        }
        if (count > 0) {
            statusLabel.innerHTML = `You are missing ${count} "${closingInput.value}"`;
        }
        statusLabel.style.backgroundColor = "red";
    }
}

scanText.onclick = () => {
    balanced();
}

textArea.oninput = () => {
    balanced();
}