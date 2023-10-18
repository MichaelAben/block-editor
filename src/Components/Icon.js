export default class Icon {
    constructor(name, icon) {
        this.element = document.createElement('a');
        this.element.classList.add('block-editor-header-button');
        this.element.href = '#';
        this.element.innerHTML = icon;
        this.element.title = name;
        this.on('click', (e) => {
            e.preventDefault();
        });
    }

    getElement() {
        return this.element;
    }

    on(event, callback) {
        this.element.addEventListener(event, callback);
    }
}