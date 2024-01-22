'use strict';

class Storage {
    #items = [];
    constructor(items) {
        this.#items = items;
    }
    getItems() {
        return this.#items;
    }
    addItem(newItem) {
        this.#items.push(newItem);
    }
    removeItem(itemToRemove) {
        const idxOfItemToRemove = this.#items.indexOf(itemToRemove);
        if (idxOfItemToRemove > -1) {
            this.#items.splice(idxOfItemToRemove, 1);    
        }
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]