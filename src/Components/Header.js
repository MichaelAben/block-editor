import {BlocksIcon} from "maben-block-editor/src/Icons";
import {SettingsIcon} from "maben-block-editor/src/Icons";

export default class Header {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('block-editor-header');

        this.addIcon(new ToggleIcon('Blocks', BlocksIcon, '.block-editor-blocks'));
        this.addIcon(new ToggleIcon('Settings', SettingsIcon, '.block-editor-settings'));
    }

    addIcon(icon) {
        this.element.append(icon.getElement());
    }

    getElement () {
        return this.element;
    }
}