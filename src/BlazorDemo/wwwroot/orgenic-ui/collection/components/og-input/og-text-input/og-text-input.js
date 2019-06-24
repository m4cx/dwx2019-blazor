import { h, Host } from '@stencil/core';
export class OgTextInput {
    handleChange(e) {
        this.value = e.target.value;
        this.valueChanged.emit(this.value);
    }
    render() {
        return (h(Host, { class: { 'og-form-item__editor': true } },
            h("input", { type: "text", class: "og-input__input", value: this.value, disabled: this.disabled, onInput: (event) => this.handleChange(event), onFocus: (event) => this.focusGained.emit(event), onBlur: (event) => this.focusLost.emit(event), placeholder: this.placeholder }),
            h("div", { class: "og-input__indicator" })));
    }
    static get is() { return "og-text-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-text-input.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-text-input.css"]
    }; }
    static get properties() { return {
        "placeholder": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Optional placeholder text if input is empty."
            },
            "attribute": "placeholder",
            "reflect": false
        },
        "value": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The initial value. Can be updated at runtime."
            },
            "attribute": "value",
            "reflect": true
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Determines, whether the control is disabled or not."
            },
            "attribute": "disabled",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "valueChanged",
            "name": "valueChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Event is being emitted when value changes."
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            }
        }, {
            "method": "focusGained",
            "name": "focusGained",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Event is being emitted when input gets focus.."
            },
            "complexType": {
                "original": "FocusEvent",
                "resolved": "FocusEvent",
                "references": {
                    "FocusEvent": {
                        "location": "global"
                    }
                }
            }
        }, {
            "method": "focusLost",
            "name": "focusLost",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Event is being emitted when focus gets lost."
            },
            "complexType": {
                "original": "FocusEvent",
                "resolved": "FocusEvent",
                "references": {
                    "FocusEvent": {
                        "location": "global"
                    }
                }
            }
        }]; }
}
