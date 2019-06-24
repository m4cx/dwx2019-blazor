'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./orgenic-ui-ae2bfbb5.js');

class OgTabContainer {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.tabs = [];
        this.tabSelected = __chunk_1.createEvent(this, "tabSelected", 7);
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
        return (__chunk_1.h("div", { class: "og-tabs" }, __chunk_1.h("nav", { class: "og-tabs__nav" }, __chunk_1.h("ul", { class: "og-tabs__list" }, this.tabs.map((tab, index) => {
            return (__chunk_1.h("li", { class: "og-tabs__list-item" +
                    (tab.selected
                        ? " og-tabs__list-item--selected"
                        : "") +
                    (tab.disabled
                        ? " og-tabs__list-item--disabled"
                        : "") }, __chunk_1.h("button", { role: "tab", class: "og-tabs__tab" +
                    (tab.selected
                        ? " og-tabs__tab--selected"
                        : ""), disabled: this.disabled || tab.disabled, onClick: () => this.openTab(index) }, tab.label), __chunk_1.h("div", { class: "og-tabs__tab__indicator" })));
        }))), __chunk_1.h("div", { class: "og-tabs__content-container" }, __chunk_1.h("div", { class: "og-tabs__content" }, __chunk_1.h("slot", null)))));
    }
    get el() { return __chunk_1.getElement(this); }
    static get style() { return ":host{--og-tabs__list-Border:1px solid var(--OG-COLOR-SHADE--100--20,rgba(57,83,96,0.2));--og-tabs__tab-Background:transparent;--og-tabs__tab-Background--hover:transparent;--og-tabs__tab-Background--active:transparent;--og-tabs__tab-Padding:var(--PADDING,0.75rem .75rem);--og-tabs__tab-Opacity:1;--og-tabs__indicator-Width:1%;--og-tabs__indicator-Height:3px;--og-tabs__indicator-Background:transparent;--og-tabs__indicator-Background--active:var(--OG-COLOR-PRIMARY--100,#1da2d3);--og-tabs__indicator-Background--hover:var(--OG-COLOR-PRIMARY--100--50,rgba(29,162,211,0.5));display:block}:host([disabled]){--og-tabs__tab-Opacity:.5}.og-tabs__list{list-style-type:none;margin:0;padding:0;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;border-bottom:var(--og-tabs__list-Border)}.og-tabs__list-item{-ms-flex:1;flex:1;white-space:nowrap;position:relative;text-align:center;opacity:var(--og-tabs__tab-Opacity)}:host(:not([disabled])) .og-tabs__list-item:not(.og-tabs__list-item--disabled):not(.og-tabs__list-item--selected):hover{--og-tabs__indicator-Width:100%;--og-tabs__indicator-Background:var(--og-tabs__indicator-Background--hover);--og-tabs__tab-Background:var(--og-tabs__tab-Background--hover)}.og-tabs__list-item.og-tabs__list-item--selected{--og-tabs__indicator-Width:100%;--og-tabs__indicator-Background:var(--og-tabs__indicator-Background--active);--og-tabs__tab-Background:var(--og-tabs__tab-Background--active)}.og-tabs__list-item.og-tabs__list-item--disabled{--og-tabs__tab-Opacity:0.5}.og-tabs__tab{display:block;width:100%;height:100%;border:none;outline:none;color:inherit;background:var(--og-tabs__tab-Background);padding:var(--og-tabs__tab-Padding);font-family:inherit;font-size:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.og-tabs__tab:not([disabled]){cursor:pointer}.og-tabs__tab__indicator{display:block;position:absolute;bottom:0;width:var(--og-tabs__indicator-Width);height:var(--og-tabs__indicator-Height);background:var(--og-tabs__indicator-Background);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.og-tabs{width:100%}.og-tabs__content{padding:1.5rem 0 1rem}"; }
}

exports.og_tab_container = OgTabContainer;
