import { r as registerInstance, h, H as Host, g as getElement } from './orgenic-ui-5001260f.js';

class OgExpander {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { class: { 'og-expander': true } }, h("div", { class: "og-expander__header", onClick: () => { this.toggleExpandedState(); } }, h("span", { class: "og-expander__title" }, this.name), h("div", { class: "og-expander__button" }, h("svg", { class: 'og-expander__button__arrow' +
                (this.expanded
                    ? ' og-expander__button__arrow--collapsed'
                    : ''), version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 12", preserveAspectRatio: "none" }, h("polyline", { class: "og-expander__button__arrow__line", points: "0,0 12,12 24,0", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecaps": "round", "stroke-linejoin": "round" })))), h("div", { class: "og-expander__content", "data-expanded": this.expanded }, h("slot", null))));
    }
    get el() { return getElement(this); }
    static get style() { return ":host{--og-expander-BackgroundColor:var(--OG-COLOR-SHADE--0--30,hsla(0,0%,100%,0.3));--og-expander-BorderColor:transparent;--og-expander-BorderRadius:var(--OG-BORDER-RADIUS,3px);--og-expander-BorderWidth:var(--OG-BORDER-WIDTH,1px);--og-expander-Margin:0 0 8px 0;--og-expander__header-BorderColor:transparent;--og-expander__header-BorderStyle:solid;--og-expander__header-BorderWidth:0;--og-expander__header-FontSize:1rem;--og-expander__header-FontWeight:var(--OG-FONT-WEIGHT--MEDIUM,500);--og-expander__header-TextTransform:uppercase;--og-expander__header-Margin:0;--og-expander__header-Padding:16px;--og-expander__content-Padding:0 16px 16px;--og-expander__button__arrow-Width:20px;--og-expander__button__arrow-Padding:0px 4px 4px 4px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;margin:var(--og-expander-Margin);background-color:var(--og-expander-BackgroundColor);border-color:var(--og-expander-BorderColor);border-style:solid;border-width:var(--og-expander-BorderWidth);border-radius:var(--og-expander-BorderRadius);-webkit-box-shadow:0 0 4px rgba(0,0,0,.2);box-shadow:0 0 4px rgba(0,0,0,.2);-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}.og-expander__header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;min-height:56px;-ms-flex-align:center;align-items:center;border-color:var(--og-expander__header-BorderColor);border-style:var(--og-expander__header-BorderStyle);border-width:var(--og-expander__header-BorderWidth);font-size:var(--og-expander__header-FontSize);font-weight:var(--og-expander__header-FontWeight);margin:var(--og-expander__header-Margin);padding:var(--og-expander__header-Padding);text-transform:var(--og-expander__header-TextTransform);cursor:pointer}.og-expander__title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-ms-flex:1;flex:1}.og-expander__content{padding:var(--og-expander__content-Padding)}.og-expander__content:not([data-expanded]){display:none}.og-expander__button{-ms-flex:none;flex:none;width:var(--og-expander__button__arrow-Width);padding:var(--og-expander__button__arrow-Padding)}.og-expander__button__arrow{-webkit-transition:-webkit-transform .1s;transition:-webkit-transform .1s;transition:transform .1s;transition:transform .1s,-webkit-transform .1s;overflow:visible}.og-expander__button__arrow--collapsed{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.og-expander__button__arrow__line{stroke-linecap:round;stroke-linejoin:round}"; }
}

export { OgExpander as og_expander };
