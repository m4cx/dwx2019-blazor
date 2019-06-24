import { r as registerInstance, h } from './orgenic-ui-5001260f.js';

class OgCard {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleDivRef(el) {
        if (!el) {
            return;
        }
        let slot = el.firstChild;
        if (!slot) {
            return;
        }
        el.style.display = slot.assignedNodes().length > 0 ? 'block' : 'none';
        slot.addEventListener('slotchange', () => {
            el.style.display = slot.assignedNodes().length > 0 ? 'block' : 'none';
        });
    }
    render() {
        return (h("div", { class: "og-card" }, this.name
            ? h("div", { class: "og-card__header" }, h("span", { class: "og-card__title" }, this.name))
            : "", h("div", { class: "og-card__content" }, h("slot", null), h("slot", { name: "content" })), h("div", { class: "og-card__footer", ref: el => this.handleDivRef(el) }, h("slot", { name: "footer" }))));
    }
    static get style() { return ":host{--og-card-BackgroundColor:var(--OG-COLOR-SHADE--0--80,hsla(0,0%,100%,0.8));--og-card-BorderColor:transparent;--og-card-BorderRadius:var(--OG-BORDER-RADIUS,3px);--og-card-BorderWidth:var(--OG-BORDER-WIDTH,1px);--og-card-BoxShadow:0 0 8px rgba(0,0,0,0.3);--og-card-Margin:8px;--og-card__header-BorderColor:var(--OG-COLOR-SHADE--100--60,rgba(57,83,96,0.6));--og-card__header-BorderStyle:solid;--og-card__header-BorderWidth:0 0 1px 0;--og-card__header-FontSize:1.125rem;--og-card__header-FontWeight:var(--OG-FONT-WEIGHT--MEDIUM,500);--og-card__header-TextTransform:uppercase;--og-card__header-Margin:0 32px;--og-card__header-Padding:0;--og-card__content-Padding:16px 32px;--og-card__footer-Padding:16px 32px;--og-card__footer-TextAlign:right;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;vertical-align:top;width:100%}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}.og-card{-ms-flex-direction:column;flex-direction:column;overflow:hidden;background-color:var(--og-card-BackgroundColor);border-color:var(--og-card-BorderColor);border-style:solid;border-width:var(--og-card-BorderWidth);border-radius:var(--og-card-BorderRadius);-webkit-box-shadow:var(--og-card-BoxShadow);box-shadow:var(--og-card-BoxShadow);margin:var(--og-card-Margin)}.og-card,.og-card__header{display:-ms-flexbox;display:flex}.og-card__header{-ms-flex-direction:row;flex-direction:row;min-height:56px;-ms-flex-align:center;align-items:center;border-color:var(--og-card__header-BorderColor);border-style:var(--og-card__header-BorderStyle);border-width:var(--og-card__header-BorderWidth);font-size:var(--og-card__header-FontSize);font-weight:var(--og-card__header-FontWeight);margin:var(--og-card__header-Margin);padding:var(--og-card__header-Padding);text-transform:var(--og-card__header-TextTransform)}.og-card__title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.og-card__content{-ms-flex-positive:1;flex-grow:1;padding:var(--og-card__content-Padding)}.og-card__footer{text-align:var(--og-card__footer-TextAlign);padding:var(--og-card__footer-Padding)}"; }
}

export { OgCard as og_card };
