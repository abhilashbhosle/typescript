"use strict";
class Sellables {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
const sellables = new Sellables();
sellables.addToCart({ name: 'task1', type: 'quiz1' });
