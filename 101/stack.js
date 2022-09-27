class Stack {
    #elements;
    constructor(elements = []) {
        this.#elements = elements;
    }

    push(element) {
        this.#elements.push(element)
    }

    pop(element) {
        this.#elements.pop();
    }

    getElements() {
        return this.#elements;
    }
}

var a = new Stack(['a', 'b', 'c'])
var b = new Stack()
