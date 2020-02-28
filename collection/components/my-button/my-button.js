import { h } from "@stencil/core";
export class MyButton {
    handleClick(event) {
        this.onClick.emit(event);
    }
    render() {
        return h("button", { onClick: this.handleClick.bind(this) }, this.label);
    }
    static get is() { return "my-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["my-button.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-button.css"]
    }; }
    static get properties() { return {
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "label",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "onClick",
            "name": "onClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
