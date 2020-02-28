import { r as registerInstance, c as createEvent, h } from './core-a6a7dce5.js';

const MyButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onClick = createEvent(this, "onClick", 7);
    }
    handleClick(event) {
        this.onClick.emit(event);
    }
    render() {
        return h("button", { onClick: this.handleClick.bind(this) }, this.label);
    }
    static get style() { return ":host{display:block}"; }
};

export { MyButton as my_button };
