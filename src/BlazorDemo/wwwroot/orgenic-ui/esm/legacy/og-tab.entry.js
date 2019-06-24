import { r as registerInstance, h } from './orgenic-ui-5001260f.js';
var OgTab = /** @class */ (function () {
    function OgTab(hostRef) {
        registerInstance(this, hostRef);
    }
    OgTab.prototype.render = function () {
        return (h("div", { class: "og-tab", "data-selected": this.selected }, h("slot", null)));
    };
    Object.defineProperty(OgTab, "style", {
        get: function () { return ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}.og-tab{display:none}.og-tab[data-selected]{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return OgTab;
}());
export { OgTab as og_tab };
