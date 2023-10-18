import Icon from "maben-block-editor/src/Components/Icon.js";

export default class ToggleIcon extends Icon {
    constructor(name, icon, target) {
        super(name, icon);

        this.target = target;
        this.on('click', () => {
            const target = document.querySelector(this.target);
            target.classList.toggle('hidden');
        });
    }
}