/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/
import { h, Host } from '@stencil/core';
export class OgTextarea {
    handleChange(e) {
        this.value = e.target.value;
        this.valueChanged.emit(this.value);
    }
    render() {
        return (h(Host, { class: { 'og-form-item__editor': true } },
            h("textarea", { class: "og-textarea__textarea", value: this.value, disabled: this.disabled, onInput: (event) => this.handleChange(event), onFocus: (event) => this.focusGained.emit(event), onBlur: (event) => this.focusLost.emit(event) }),
            h("div", { class: "og-textarea__indicator" })));
    }
    static get is() { return "og-textarea"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-textarea.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-textarea.css"]
    }; }
    static get properties() { return {
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
                "text": "Event is being emitted when input gets focus."
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
