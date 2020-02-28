'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1bffab88.js');

const MyButton = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.onClick = core.createEvent(this, "onClick", 7);
    }
    handleClick(event) {
        this.onClick.emit(event);
    }
    render() {
        return core.h("button", { onClick: this.handleClick.bind(this) }, this.label);
    }
    static get style() { return ":host{display:block}"; }
};

exports.my_button = MyButton;
