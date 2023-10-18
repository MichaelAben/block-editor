export default class Heading {
    constructor(text) {
        this.element = document.createElement('b');
        this.element.innerHTML = text;
    }

    getElement() {
        return this.element;
    }
}