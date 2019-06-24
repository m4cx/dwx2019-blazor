/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/
import { h, Host } from '@stencil/core';
export class OgCheckbox {
    constructor() {
        this.internalId = Math.random().toString(18).substring(2, 8) + Math.random().toString(18).substring(2, 8);
    }
    handleChange(e) {
        if (!this.disabled) {
            this.checked = e.target.checked;
            this.changed.emit(e.target.checked);
        }
    }
    render() {
        return (h(Host, { class: {
                'og-checkbox--checked': this.checked,
                'og-checkbox--disabled': this.disabled
            } },
            h("input", { class: "og-checkbox__input", type: "checkbox", id: this.internalId, checked: this.checked, disabled: this.disabled, onChange: (event) => this.handleChange(event) }),
            h("label", { class: "og-checkbox__label", htmlFor: this.internalId }, this.label && h("span", { class: "og-checkbox__label__content" }, this.label))));
    }
    static get is() { return "og-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-checkbox.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-checkbox.css"]
    }; }
    static get properties() { return {
        "checked": {
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
                "text": "The value of the checkbox"
            },
            "attribute": "checked",
            "reflect": true
        },
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
                "text": "The label of the checkbox"
            },
            "attribute": "label",
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
