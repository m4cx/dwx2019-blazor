import { r as registerInstance, h } from './orgenic-ui-5001260f.js';
var OgListItem = /** @class */ (function () {
    function OgListItem(hostRef) {
        registerInstance(this, hostRef);
    }
    OgListItem.prototype.render = function () {
        return h("li", { class: "og-list-item" + (this.isDisabled ? " og-list-item--disabled" : "") }, h("div", { class: "og-list-item__content" + (this.isSelected ? " og-list-item__content--selected" : "") }, this.showImage && h("div", { class: "og-list-item__icon" }, this.image && h("img", { src: this.image })), h("div", { class: "og-list-item__label" }, this.label), this.showValue && this.value
            && h("div", { class: "og-list-item__value" }, this.value)));
    };
    Object.defineProperty(OgListItem, "style", {
        get: function () { return ":host{--og-list-item-Color:var(--OG-COLOR-SHADE--100,#395360);--og-list-item-Background:var(--OG-COLOR-PRIMARY--0--30,hsla(0,0%,100%,0.3));--og-list-item-Background--highlight:var(--OG-COLOR-PRIMARY--100--15,rgba(29,162,211,0.15));--og-list-item-Background--active:var(--OG-COLOR-PRIMARY--100--30,rgba(29,162,211,0.3));--og-list-item-Opacity:1;--og-list-item-Opacity--disabled:.5;--og-list-item-BorderWidth:2px;--og-list-item-BorderStyle:solid;--og-list-item-BorderColor:transparent;--og-list-item-Margin:0;--og-list-item-MinHeight:3em;--og-list-item-BorderRadius:0;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}:host([disabled]){--og-list-Opacity:var(--og-list-Opacity--disabled)}:host([disabled]) .og-list-item__content{cursor:default}.og-list-item{display:block;outline:0}.og-list-item__content{display:-ms-flexbox;display:flex;background:var(--og-list-item-Background);color:var(--og-list-item-Color);border:var(--og-list-item-BorderWidth) var(--og-list-item-BorderStyle) var(--og-list-item-BorderColor);border-radius:var(--og-list-item-BorderRadius);margin:var(--og-list-item-Margin);height:var(--og-list-item-MinHeight);line-height:var(--og-list-item-MinHeight);padding-left:1em;padding-right:1em;opacity:var(--og-list-item-Opacity)}:host(:not([disabled])) .og-list-item:not(.og-list-item--disabled) .og-list-item__content:not(.og-list-item__content--selected):hover{--og-list-item-Background:var(--og-list-item-Background--highlight);cursor:pointer}:host-context(og-list[disabled]) .og-list-item__content{pointer-events:none}.og-list-item--disabled{--og-list-item-Opacity:var(--og-list-item-Opacity--disabled)}.og-list-item__content--selected,:host(:not([disabled])) .og-list-item__content--selected:hover{--og-list-item-Background:var(--og-list-item-Background--active)}.og-list-item__icon{padding-right:1em;width:var(--og-list-item-MinHeight)}.og-list-item__icon img{-o-object-fit:contain;object-fit:contain;width:100%;height:100%}.og-list-item__label{-ms-flex-positive:1;flex-grow:1}.og-list-item__value{line-height:inherit;font-weight:700}"; },
        enumerable: true,
        configurable: true
    });
    return OgListItem;
}());
export { OgListItem as og_list_item };
