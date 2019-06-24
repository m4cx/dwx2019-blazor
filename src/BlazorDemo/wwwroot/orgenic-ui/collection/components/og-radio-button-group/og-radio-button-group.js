/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/
import { h } from '@stencil/core';
export class OgRadioButtonGroup {
    constructor() {
        this.radioButtons = [];
    }
    nameChanged() { this.updateButtons(); }
    handleValueChange() { this.updateButtons(); }
    disabledChanged() { this.updateButtons(); }
    componentWillLoad() {
        // Grab radio buttons from this component
        this.radioButtons = Array.from(this.el.querySelectorAll('og-radio-button'));
        if (this.radioButtons.length === 0) {
            throw new Error('[og-radio-button-group] Must have at least one og-radio-button child');
        }
        this.updateButtons();
        this.radioButtons.forEach(radioButton => {
            radioButton.addEventListener('changed', e => this.selectedRadioButtonChanged(e));
        });
    }
    selectedRadioButtonChanged(event) {
        this.value = event.target.value;
        this.valueChanged.emit(this.value);
        event.cancelBubble = true;
    }
    updateButtons() {
        this.radioButtons.forEach(button => {
            button.name = this.name;
            button.groupDisabled = this.disabled;
            button.checked = button.value === this.value;
        });
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "og-radio-button-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-radio-button-group.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-radio-button-group.css"]
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
                "text": "name for the radiobuttons within this group"
            },
            "attribute": "name",
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
                "text": "The value of the selected radio button."
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
                "text": "Determines, whether the control is disabled or not"
            },
            "attribute": "disabled",
            "reflect": false
        }
    }; }
    static get states() { return {
        "radioButtons": {}
    }; }
    static get events() { return [{
            "method": "valueChanged",
            "name": "valueChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "name",
            "methodName": "nameChanged"
        }, {
            "propName": "value",
            "methodName": "handleValueChange"
        }, {
            "propName": "disabled",
            "methodName": "disabledChanged"
        }]; }
}
