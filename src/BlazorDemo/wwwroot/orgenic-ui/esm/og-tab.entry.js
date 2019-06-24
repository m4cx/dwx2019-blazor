import { r as registerInstance, h } from './orgenic-ui-5001260f.js';

class OgTab {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "og-tab", "data-selected": this.selected }, h("slot", null)));
    }
    static get style() { return ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}.og-tab{display:none}.og-tab[data-selected]{display:block}"; }
}

export { OgTab as og_tab };
