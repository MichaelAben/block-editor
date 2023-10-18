import Block from "maben-block-editor/src/Components/Block.js";
import Heading from "maben-block-editor/src/Components/Heading.js";

export default class BlocksContainer {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('block-editor-container');
    }

    addBlock(block) {
        this.element.append(block.getBlockContent());
    }

    removeBlock(block) {
        block.removed();
    }

    getElement () {
        return this.element;
    }

    onDrop(event) {
        console.log('drop');
        event.preventDefault();

        const target = event.target;
        console.log(target)
        if (!target.classList.contains('block-editor-container') && !this.isDescendant(this.containerElement, target)) {
            console.log('not allowed');
            return;
        }
        this.containerElement.addBlock(this);

        console.log('allowed');
    }

    isDescendant(parent, child) {
        let node = child.parentNode;
        while (node) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
}