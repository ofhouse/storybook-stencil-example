import { r as registerInstance, c as createEvent, h } from './core-3c93baab.js';

const MyButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onClick = createEvent(this, "onClick", 7);
    }
    onClickHandler(event) {
        this.onClick.emit(event);
    }
    render() {
        return h("button", null, this.label);
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { MyButton as my_button };
