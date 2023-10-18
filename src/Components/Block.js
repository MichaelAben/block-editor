export default class Block {
    constructor(config) {
        this.config = config;
        this.element = document.createElement('div');
        this.element.classList.add('block-editor-blocks-block');
        this.element.innerHTML = this.config.name;
        this.element.title = this.config.name;
    }

    getElement() {
        return this.element;
    }

    getBlockContent() {
        this.containerElement = document.createElement(this.config.type);

        if (this.config.classList !== undefined) {
            this.containerElement.classList.value = this.config.classList;
        }
        if (this.config.innerHtml !== undefined) {
            this.containerElement.innerHTML = this.config.innerHtml;
        }
        if (this.config.href !== undefined) {
            this.containerElement.href = this.config.href;
        }
        if (this.config.target !== undefined) {
            this.containerElement.target = this.config.target;
        }
        if (this.config.src !== undefined) {
            this.containerElement.src = this.config.src;
        }
        return this.containerElement;
    }
}