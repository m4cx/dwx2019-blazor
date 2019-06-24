var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h, g as getElement } from './orgenic-ui-5001260f.js';
var OgTabContainer = /** @class */ (function () {
    function OgTabContainer(hostRef) {
        registerInstance(this, hostRef);
        this.tabs = [];
        this.tabSelected = createEvent(this, "tabSelected", 7);
    }
    OgTabContainer.prototype.openTab = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.disabled) {
                    return [2 /*return*/];
                }
                if (index >= this.tabs.length) {
                    throw new Error("[og-tabs] Index " + index + " is out of bounds of tabs length");
                }
                if (!this.tabs[index].disabled) {
                    this.tabs = this.tabs.map(function (tab, i) {
                        tab.selected = i === index;
                        return tab;
                    });
                }
                this.tabSelected.emit(index);
                return [2 /*return*/];
            });
        });
    };
    OgTabContainer.prototype.componentWillLoad = function () {
        // Grab tabs from this component
        this.tabs = Array.from(this.el.querySelectorAll('og-tab'));
        if (this.tabs.length === 0) {
            throw new Error('[og-tabs] Must have at least one tab');
        }
    };
    OgTabContainer.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "og-tabs" }, h("nav", { class: "og-tabs__nav" }, h("ul", { class: "og-tabs__list" }, this.tabs.map(function (tab, index) {
            return (h("li", { class: "og-tabs__list-item" +
                    (tab.selected
                        ? " og-tabs__list-item--selected"
                        : "") +
                    (tab.disabled
                        ? " og-tabs__list-item--disabled"
                        : "") }, h("button", { role: "tab", class: "og-tabs__tab" +
                    (tab.selected
                        ? " og-tabs__tab--selected"
                        : ""), disabled: _this.disabled || tab.disabled, onClick: function () { return _this.openTab(index); } }, tab.label), h("div", { class: "og-tabs__tab__indicator" })));
        }))), h("div", { class: "og-tabs__content-container" }, h("div", { class: "og-tabs__content" }, h("slot", null)))));
    };
    Object.defineProperty(OgTabContainer.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OgTabContainer, "style", {
        get: function () { return ":host{--og-tabs__list-Border:1px solid var(--OG-COLOR-SHADE--100--20,rgba(57,83,96,0.2));--og-tabs__tab-Background:transparent;--og-tabs__tab-Background--hover:transparent;--og-tabs__tab-Background--active:transparent;--og-tabs__tab-Padding:var(--PADDING,0.75rem .75rem);--og-tabs__tab-Opacity:1;--og-tabs__indicator-Width:1%;--og-tabs__indicator-Height:3px;--og-tabs__indicator-Background:transparent;--og-tabs__indicator-Background--active:var(--OG-COLOR-PRIMARY--100,#1da2d3);--og-tabs__indicator-Background--hover:var(--OG-COLOR-PRIMARY--100--50,rgba(29,162,211,0.5));display:block}:host([disabled]){--og-tabs__tab-Opacity:.5}.og-tabs__list{list-style-type:none;margin:0;padding:0;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;border-bottom:var(--og-tabs__list-Border)}.og-tabs__list-item{-ms-flex:1;flex:1;white-space:nowrap;position:relative;text-align:center;opacity:var(--og-tabs__tab-Opacity)}:host(:not([disabled])) .og-tabs__list-item:not(.og-tabs__list-item--disabled):not(.og-tabs__list-item--selected):hover{--og-tabs__indicator-Width:100%;--og-tabs__indicator-Background:var(--og-tabs__indicator-Background--hover);--og-tabs__tab-Background:var(--og-tabs__tab-Background--hover)}.og-tabs__list-item.og-tabs__list-item--selected{--og-tabs__indicator-Width:100%;--og-tabs__indicator-Background:var(--og-tabs__indicator-Background--active);--og-tabs__tab-Background:var(--og-tabs__tab-Background--active)}.og-tabs__list-item.og-tabs__list-item--disabled{--og-tabs__tab-Opacity:0.5}.og-tabs__tab{display:block;width:100%;height:100%;border:none;outline:none;color:inherit;background:var(--og-tabs__tab-Background);padding:var(--og-tabs__tab-Padding);font-family:inherit;font-size:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.og-tabs__tab:not([disabled]){cursor:pointer}.og-tabs__tab__indicator{display:block;position:absolute;bottom:0;width:var(--og-tabs__indicator-Width);height:var(--og-tabs__indicator-Height);background:var(--og-tabs__indicator-Background);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.og-tabs{width:100%}.og-tabs__content{padding:1.5rem 0 1rem}"; },
        enumerable: true,
        configurable: true
    });
    return OgTabContainer;
}());
export { OgTabContainer as og_tab_container };
