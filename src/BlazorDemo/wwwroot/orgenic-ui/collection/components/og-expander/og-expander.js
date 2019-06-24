/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/
import { h, Host } from '@stencil/core';
export class OgExpander {
    constructor() {
        /**
         * Sets or unsets the expanded state.
         */
        this.expanded = false;
    }
    /**
     * Use this method to toggle expanded state. Group property is respected when calling this method.
     */
    async toggleExpandedState() {
        if (this.group) {
            const elements = document.querySelectorAll('og-expander');
            elements.forEach((element) => {
                if (element.group === this.group && element !== this.el) {
                    element.expanded = false;
                }
            });
        }
        this.expanded = !this.expanded;
    }
    render() {
        return (h(Host, { class: { 'og-expander': true } },
            h("div", { class: "og-expander__header", onClick: () => { this.toggleExpandedState(); } },
                h("span", { class: "og-expander__title" }, this.name),
                h("div", { class: "og-expander__button" },
                    h("svg", { class: 'og-expander__button__arrow' +
                            (this.expanded
                                ? ' og-expander__button__arrow--collapsed'
                                : ''), version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 12", preserveAspectRatio: "none" },
                        h("polyline", { class: "og-expander__button__arrow__line", points: "0,0 12,12 24,0", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecaps": "round", "stroke-linejoin": "round" })))),
            h("div", { class: "og-expander__content", "data-expanded": this.expanded },
                h("slot", null))));
    }
    static get is() { return "og-expander"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-expander.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-expander.css"]
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
                "text": "The name for this expander"
            },
            "attribute": "name",
            "reflect": false
        },
        "group": {
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
                "text": "Optional group identifier for this expander.\nExpanders with same group will behave like an accordion, opening one expander will close other expanders."
            },
            "attribute": "group",
            "reflect": false
        },
        "expanded": {
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
                "text": "Sets or unsets the expanded state."
            },
            "attribute": "expanded",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get methods() { return {
        "toggleExpandedState": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLOgExpanderElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Use this method to toggle expanded state. Group property is respected when calling this method.",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
}
