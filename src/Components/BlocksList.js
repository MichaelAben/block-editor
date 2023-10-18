import Block from "maben-block-editor/src/Components/Block.js";
import Heading from "maben-block-editor/src/Components/Heading.js";

export default class BlocksList {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('block-editor-blocks');
    }

    addBlock(block) {
        this.element.append(block.getElement());
    }

    getElement () {
        return this.element;
    }
}