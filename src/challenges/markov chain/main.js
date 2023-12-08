import beginingText from "./text.js";

const generateBtn = document.querySelector("#generate-btn");
const textInput = document.querySelector("#text");
const generatedText = document.querySelector("#generated-words");
const fileInput = document.querySelector("#file-input");
const orderInput = document.querySelector("#order");

let tokens = {};
let startingTokens = [];
const endingTokens = [".", "?", "!"];
const noneSpaceTokens = [":", ",", ";"];
let ngrams = 1;

function getTokens() {
    tokens = {};
    startingTokens = [];

    if (textInput.value == "") {
        alert("text cannot be empty"); 
        return;
    }

    const wordTokens = textInput.value.match(/[^\s\w]+|\w+/g);

    if (wordTokens.length == 0) return;

    startingTokens.push(wordTokens[0]);

    for (let i = 0; i < wordTokens.length - ngrams; i += ngrams) {
        if (!tokens[wordTokens[i]]) {
            tokens[wordTokens[i]] = [];
        }
        tokens[wordTokens[i]].push(wordTokens[i + ngrams]);

        if (endingTokens.includes(wordTokens[i])) {
            startingTokens.push(wordTokens[i + 1]);
        }
    }
}

function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateText() {
    let text = "";
    let currentToken = startingTokens[getRndInt(0, startingTokens.length - 1)];
    text += currentToken;
    
    let wordCount = 0;
    while (wordCount < 51) {
        currentToken = tokens[currentToken][getRndInt(0, tokens[currentToken].length - 1)];
    
        if (endingTokens.includes(currentToken)) {
            text += `${currentToken}`;
            break;
        } else {
            if (!noneSpaceTokens.includes(currentToken)) {
                text += ` ${currentToken}`;
            } else {
                text += currentToken;
            }
        }
        wordCount++;
    }

    generatedText.innerHTML = `${text}`;
}


fileInput.onchange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const contents = event.target.result;
        textInput.value = contents;
    };

    reader.onerror = function(event) {
        console.error('File could not be read! Code ' + event.target.error.code);
    };

    reader.readAsText(file);
}

generateBtn.onclick = () => {
    getTokens();
    generateText();
}

orderInput.onchange = () => {
    let order = parseInt(orderInput.value);
    if (order < 1) {
        order = 1;
        orderInput.value = 1;
    }
    ngrams = order;
    getTokens();
}

window.onload = () => {
    textInput.value = beginingText;
    // alert("paste your text in the text box to generate statements based of it. or open a text file with your words");
}