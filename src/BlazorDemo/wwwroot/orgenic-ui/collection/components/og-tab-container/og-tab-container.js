/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/
import { h } from '@stencil/core';
export class OgTabContainer {
    constructor() {
        this.tabs = [];
    }
    async openTab(index) {
        if (this.disabled) {
            return;
        }
        if (index >= this.tabs.length) {
            throw new Error(`[og-tabs] Index ${index} is out of bounds of tabs length`);
        }
        if (!this.tabs[index].disabled) {
            this.tabs = this.tabs.map((tab, i) => {
                tab.selected = i === index;
                return tab;
            });
        }
        this.tabSelected.emit(index);
    }
    componentWillLoad() {
        // Grab tabs from this component
        this.tabs = Array.from(this.el.querySelectorAll('og-tab'));
        if (this.tabs.length === 0) {
            throw new Error('[og-tabs] Must have at least one tab');
        }
    }
    render() {
        return (h("div", { class: "og-tabs" },
            h("nav", { class: "og-tabs__nav" },
                h("ul", { class: "og-tabs__list" }, this.tabs.map((tab, index) => {
                    return (h("li", { class: "og-tabs__list-item" +
                            (tab.selected
                                ? " og-tabs__list-item--selected"
                                : "") +
                            (tab.disabled
                                ? " og-tabs__list-item--disabled"
                                : "") },
                        h("button", { role: "tab", class: "og-tabs__tab" +
                                (tab.selected
                                    ? " og-tabs__tab--selected"
                                    : ""), disabled: this.disabled || tab.disabled, onClick: () => this.openTab(index) }, tab.label),
                        h("div", { class: "og-tabs__tab__indicator" })));
                }))),
            h("div", { class: "og-tabs__content-container" },
                h("div", { class: "og-tabs__content" },
                    h("slot", null)))));
    }
    static get is() { return "og-tab-container"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-tab-container.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-tab-container.css"]
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
                "text": "Determines, whether the control is disabled or not"
            },
            "attribute": "disabled",
            "reflect": false
        }
    }; }
    static get states() { return {
        "tabs": {}
    }; }
    static get events() { return [{
            "method": "tabSelected",
            "name": "tabSelected",
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
        }]; }
    static get methods() { return {
        "openTab": {
            "complexType": {
                "signature": "(index: number) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
}
