import { r as registerInstance, c as createEvent, h } from './core-a6a7dce5.js';
var MyButton = /** @class */ (function () {
    function MyButton(hostRef) {
        registerInstance(this, hostRef);
        this.onClick = createEvent(this, "onClick", 7);
    }
    MyButton.prototype.handleClick = function (event) {
        this.onClick.emit(event);
    };
    MyButton.prototype.render = function () {
        return h("button", { onClick: this.handleClick.bind(this) }, this.label);
    };
    Object.defineProperty(MyButton, "style", {
        get: function () { return ":host{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return MyButton;
}());
export { MyButton as my_button };
