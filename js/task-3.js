'use strict';

class StringBuilder {
    #value;
    constructor(initialValue) {
        this.#value = initialValue;
    }
    getValue() {
        return this.#value;
    }
    padEnd(str) {
        this.#value += str;
        return this;
    }
    padStart(str) {
        this.#value = str + this.#value;
        return this;
    }
    padBoth(str) {
        return this.padStart(str).padEnd(str);
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="