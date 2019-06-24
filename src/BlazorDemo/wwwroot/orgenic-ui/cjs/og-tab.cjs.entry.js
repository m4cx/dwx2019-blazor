'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./orgenic-ui-ae2bfbb5.js');

class OgTab {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    render() {
        return (__chunk_1.h("div", { class: "og-tab", "data-selected": this.selected }, __chunk_1.h("slot", null)));
    }
    static get style() { return ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}.og-tab{display:none}.og-tab[data-selected]{display:block}"; }
}

exports.og_tab = OgTab;
