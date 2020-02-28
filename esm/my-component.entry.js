import { r as registerInstance, h } from './core-a6a7dce5.js';

function format(first, middle, last) {
    return ((first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : ''));
}

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", null, "Hello, World! I'm ", this.getText());
    }
    static get style() { return ":host{color:#000}"; }
};

export { MyComponent as my_component };
