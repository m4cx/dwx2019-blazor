/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/
import { h } from '@stencil/core';
export class OgTab {
    render() {
        return (h("div", { class: "og-tab", "data-selected": this.selected },
            h("slot", null)));
    }
    static get is() { return "og-tab"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-tab.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-tab.css"]
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
                "text": "The label of the tab"
            },
            "attribute": "label",
            "reflect": false
        },
        "selected": {
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
            "attribute": "selected",
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
        }
    }; }
}
