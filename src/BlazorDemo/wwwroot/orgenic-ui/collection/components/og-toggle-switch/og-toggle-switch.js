/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/
import { h } from '@stencil/core';
export class OgToggleSwitch {
    constructor() {
        this.internalId = Math.random().toString(18).substring(2, 8) + Math.random().toString(18).substring(2, 8);
    }
    handleChange(e) {
        if (!this.disabled) {
            this.changed.emit(e.target.checked);
        }
    }
    render() {
        return [
            h("input", { type: "checkbox", id: this.internalId, class: "og-toggle-switch__input", checked: this.value, disabled: this.disabled, onChange: (event) => this.handleChange(event) }),
            h("label", { class: "og-toggle-switch__toggle", htmlFor: this.internalId, tabindex: "0" })
        ];
    }
    static get is() { return "og-toggle-switch"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-toggle-switch.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-toggle-switch.css"]
    }; }
    static get properties() { return {
        "value": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The value of the toggle-switch"
            },
            "attribute": "value",
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
                "text": "Determines, whether the control is disabled or not"
            },
            "attribute": "disabled",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "changed",
            "name": "changed",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Event is being emitted when value changes."
            },
            "complexType": {
                "original": "MouseEvent",
                "resolved": "MouseEvent",
                "references": {
                    "MouseEvent": {
                        "location": "global"
                    }
                }
            }
        }]; }
}
