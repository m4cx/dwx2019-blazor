import { h, Host } from '@stencil/core';
export class OgNumberInput {
    handleChange(e) {
        const value = parseFloat(e.target.value);
        if (!isNaN(value)) {
            this.value = value;
        }
        else {
            this.value = null;
        }
        this.valueChanged.emit(this.value);
    }
    render() {
        return (h(Host, { class: { 'og-form-item__editor': true } },
            h("input", { type: "number", class: "og-input__input", value: this.value, step: this.step, min: this.min, max: this.max, disabled: this.disabled, onInput: (event) => this.handleChange(event), onFocus: (event) => this.focusGained.emit(event), onBlur: (event) => this.focusLost.emit(event), placeholder: this.placeholder }),
            h("div", { class: "og-input__indicator" })));
    }
    static get is() { return "og-number-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-number-input.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-number-input.css"]
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
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
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
        "step": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Increment or decrement steps for the value."
            },
            "attribute": "step",
            "reflect": false
        },
        "min": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Minimum value for this component."
            },
            "attribute": "min",
            "reflect": false
        },
        "max": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Maximum value for this component."
            },
            "attribute": "max",
            "reflect": false
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
                "original": "number",
                "resolved": "number",
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
