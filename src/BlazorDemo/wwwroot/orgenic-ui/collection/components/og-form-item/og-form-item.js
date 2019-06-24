/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/
import { h, Host } from '@stencil/core';
import { getElement } from '../../utils/dom-utils';
export class OgFormItem {
    constructor() {
        this.editorHasFocus = false;
        this.editorIsEmpty = false;
    }
    disabledChanged(newValue) {
        this.editor.setAttribute('disabled', newValue);
    }
    async componentDidLoad() {
        this.editor = await getElement(this.el, '.og-form-item__editor', 1000);
        if (!this.editor) {
            return console.error('OgFormItem is unable to resolve editor');
        }
        this.editor.addEventListener('focusGained', () => {
            this.editorHasFocus = true;
        });
        this.editor.addEventListener('focusLost', () => {
            this.editorHasFocus = false;
        });
        // TODO: for 1.0.0 unify value change event names
        let valueChangeEvent = 'valueChanged';
        switch (this.editor.tagName.toLowerCase()) {
            case 'og-combobox':
                valueChangeEvent = 'itemSelected';
                break;
            case 'og-datepicker':
                valueChangeEvent = 'dateSelected';
                break;
            default:
        }
        this.editor.addEventListener(valueChangeEvent, (event) => {
            this.checkEditorEmpty(event.detail);
        });
        this.checkEditorEmpty(this.editor['value']);
        // update disabled state of child editor
        if (this.disabled) {
            this.editor.setAttribute('disabled', 'true');
        }
        else {
            this.editor.removeAttribute('disabled');
        }
    }
    checkEditorEmpty(value) {
        this.editorIsEmpty = (typeof value === 'object' && value === null) || value === undefined || value.length === 0;
    }
    render() {
        return h(Host, { class: {
                'og-form-item--focused': this.editorHasFocus,
                'og-form-item--empty': this.editorIsEmpty
            } },
            h("label", { class: "og-form-item", htmlFor: "input#1" },
                h("div", { class: "og-form-item__body" },
                    h("div", { class: "og-form-item__label" }, this.label),
                    h("slot", null))));
    }
    static get is() { return "og-form-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-form-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-form-item.css"]
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
                "text": "The label for the form item"
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
                "text": ""
            },
            "attribute": "disabled",
            "reflect": false
        }
    }; }
    static get states() { return {
        "editorHasFocus": {},
        "editorIsEmpty": {}
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "disabled",
            "methodName": "disabledChanged"
        }]; }
}
