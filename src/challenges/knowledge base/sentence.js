class Sentence {
    constructor(model = null) {
        this.model = model
    }
    formular() {
        return ""
    }
    symbols() {
        return set()
    }
    validate(sentence) {
        if (!sentence instanceof Sentence) {
            throw(`Must be a logical sentence`);
        }
    }
    parenthesize(sentence) {
        function balanced(sentence) {
            let count = 0;
            for (let i = 0; i < sentence.length; i++) {
                if (sentence[i] == "(") {
                    count++;
                } else if (sentence[i] == ")") {
                    count--;
                }
            }
            return count === 0;
        }
    }
}

class Symbol {
    constructor(name = null) {
        this.name = name;
    }
}