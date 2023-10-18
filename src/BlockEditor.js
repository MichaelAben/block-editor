import Header from "maben-block-editor/src/Components/Header.js";
import BlocksList from "maben-block-editor/src/Components/BlocksList.js";
import BlocksContainer from "maben-block-editor/src/Components/BlocksContainer.js";
import Block from "maben-block-editor/src/Components/Block.js";
import Heading from "maben-block-editor/src/Components/Heading.js";
import blocksJson from "maben-block-editor/src/blocks.json";

export default class BlockEditor {
    constructor(parentElement = '#editor') {
        this.parentElement = document.querySelector(parentElement);
    }

    getElement() {
        return this.parentElement;
    }

    init() {
        this.addHeader();
        this.addBlocksContainer();
        this.addBlocksList();
        this.loadBlocks();
    }

    addHeader() {
        this.header = new Header();
        this.parentElement.append(this.header.getElement());
    }

    addBlocksContainer() {
        this.blocksContainer = new BlocksContainer();
        this.parentElement.append(this.blocksContainer.getElement());
    }

    addBlocksList() {
        this.blockList = new BlocksList();
        this.parentElement.append(this.blockList.getElement());
    }

    loadBlocks() {
        blocksJson.forEach((blockJson) => {
            if (blockJson.heading !== undefined) {
                this.blockList.addBlock(new Heading(blockJson.heading));
                return;
            }
            this.blockList.addBlock(new Block(blockJson));
        });
    }
}