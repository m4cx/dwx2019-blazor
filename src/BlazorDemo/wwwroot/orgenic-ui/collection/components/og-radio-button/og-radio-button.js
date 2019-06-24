/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/
import { h, Host } from '@stencil/core';
export class OgRadioButton {
    constructor() {
        this.internalId = Math.random().toString(18).substring(2, 8) + Math.random().toString(18).substring(2, 8);
    }
    eventInputChanged(event) {
        this.changed.emit(event.target.value);
    }
    render() {
        return (h(Host, { class: {
                'og-radio-button--checked': this.checked,
                'og-radio-button--disabled': this.disabled || this.groupDisabled,
            } },
            h("input", { type: "radio", id: this.internalId, name: this.name, checked: this.checked, disabled: this.disabled || this.groupDisabled, class: "og-radio-button__input", onChange: (e) => this.eventInputChanged(e) }),
            h("label", { class: "og-radio-button__label", htmlFor: this.internalId }, this.label && h("span", { class: "og-radio-button__label__content" }, this.label))));
    }
    static get is() { return "og-radio-button"; }
    static get originalStyleUrls() { return {
        "$": ["og-radio-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-radio-button.css"]
    }; }
    static get properties() { return {
        "name": {
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
                "text": "The name of the radio button. All radio buttons with the same name belong to one group."
            },
            "attribute": "name",
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
                "text": "The label of the radio button"
            },
            "attribute": "label",
            "reflect": false
        },
        "value": {
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
                "text": "The value of the radio button that is set to the parent group if radio button is selected"
            },
            "attribute": "value",
            "reflect": false
        },
        "checked": {
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
                "text": "Determines, whether the radio button is checked or not"
            },
            "attribute": "checked",
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
                "text": "Determines, whether the control is disabled or not"
            },
            "attribute": "disabled",
            "reflect": true
        },
        "groupDisabled": {
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
                "text": "Determines, whether the control is disabled from the parent group"
            },
            "attribute": "group-disabled",
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
                "text": ""
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
