/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/
import { h } from '@stencil/core';
export class OgButton {
    handleClick(e) {
        if (!this.disabled) {
            this.clicked.emit(e);
        }
        e.cancelBubble = true;
    }
    render() {
        return h("button", { class: "og-button", onClick: (e) => this.handleClick(e), disabled: this.disabled }, this.label);
    }
    static get is() { return "og-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-button.css"]
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
                "text": "The label of the button"
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
            "method": "clicked",
            "name": "clicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Event is being emitted when value changes."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
