'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./orgenic-ui-ae2bfbb5.js');

class OgCheckbox {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.internalId = Math.random().toString(18).substring(2, 8) + Math.random().toString(18).substring(2, 8);
        this.changed = __chunk_1.createEvent(this, "changed", 7);
    }
    handleChange(e) {
        if (!this.disabled) {
            this.checked = e.target.checked;
            this.changed.emit(e.target.checked);
        }
    }
    render() {
        return (__chunk_1.h(__chunk_1.Host, { class: {
                'og-checkbox--checked': this.checked,
                'og-checkbox--disabled': this.disabled
            } }, __chunk_1.h("input", { class: "og-checkbox__input", type: "checkbox", id: this.internalId, checked: this.checked, disabled: this.disabled, onChange: (event) => this.handleChange(event) }), __chunk_1.h("label", { class: "og-checkbox__label", htmlFor: this.internalId }, this.label && __chunk_1.h("span", { class: "og-checkbox__label__content" }, this.label))));
    }
    static get style() { return ":host{--og-checkbox-Width:1.5rem;--og-checkbox-Height:var(--og-checkbox-Width);--og-checkbox-Background:var(--OG-COLOR-PRIMARY--0--50,hsla(0,0%,100%,0.5));--og-checkbox-Background--hover:var(--OG-COLOR-PRIMARY--100--20,rgba(29,162,211,0.2));--og-checkbox-Background--checked:var(--OG-COLOR-PRIMARY--100,#1da2d3);--og-checkbox-Background--disabled:var(--OG-COLOR-PRIMARY--100--30,rgba(29,162,211,0.3));--og-checkbox-Top:-0.125rem;--og-checkbox-Left:0;--og-checkbox-BorderColor:var(--OG-COLOR-SHADE--50,#8fadbc);--og-checkbox-BorderColor--hover:var(--OG-COLOR-SHADE--50,#8fadbc);--og-checkbox-BorderColor--checked:var(--OG-COLOR-SHADE--50,#8fadbc);--og-checkbox__label__content-Margin:.125rem .5rem 0 1.875rem;--og-checkbox__icon-Width:calc(var(--og-checkbox-Width) * .22);--og-checkbox__icon-Height:calc(var(--og-checkbox-Height) * .45);--og-checkbox__icon-Left:.65rem;--og-checkbox__icon-Top:.15rem;--og-checkbox__icon-BorderWidth:0 .125rem .125rem 0;--og-checkbox__icon-BorderColor:transparent;--og-checkbox__icon-BorderColor--hover:transparent;--og-checkbox__icon-BorderColor--checked:var(--OG-COLOR-SHADE--0,#fff);--og-checkbox-BorderWidth:.0625rem;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}:host(:not(.og-checkbox--disabled):hover){--og-checkbox-Background:var(--og-checkbox-Background--hover);--og-checkbox-BorderColor:var(--og-checkbox-BorderColor--hover);--og-checkbox__icon-BorderColor:var(--og-checkbox__icon-BorderColor--hover)}:host(.og-checkbox--checked),:host(.og-checkbox--checked:not(.og-checkbox--disabled):hover){--og-checkbox-Background:var(--og-checkbox-Background--checked);--og-checkbox-BorderColor:var(--og-checkbox-BorderColor--checked);--og-checkbox__icon-BorderColor:var(--og-checkbox__icon-BorderColor--checked)}:host(.has-wrapped-label) .og-checkbox__label__content{max-width:calc(100% - 1.875rem);overflow-wrap:break-word;word-wrap:break-word}.og-checkbox__input{position:absolute;width:0;height:0;border:0;clip:rect(0,0,0,0);overflow:hidden;margin:0;padding:0;outline:0}.og-checkbox__input:disabled+.og-checkbox__label{cursor:default;opacity:.5}.og-checkbox__label{display:block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;min-width:var(--og-checkbox-Width);min-height:var(--og-checkbox-Height);cursor:pointer}.og-checkbox__label:after,.og-checkbox__label:before{position:absolute;content:\"\";display:block;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.og-checkbox__label:before{width:var(--og-checkbox-Width);height:var(--og-checkbox-Height);background:var(--og-checkbox-Background);border:var(--og-checkbox-BorderWidth) solid var(--og-checkbox-BorderColor);border-radius:.1875rem;left:var(--og-checkbox-Left);top:var(--og-checkbox-Top);z-index:1}.og-checkbox__label:after{width:var(--og-checkbox__icon-Width);height:var(--og-checkbox__icon-Height);border:solid var(--og-checkbox__icon-BorderColor);border-width:var(--og-checkbox__icon-BorderWidth);-webkit-transform:rotate(45deg);transform:rotate(45deg);left:var(--og-checkbox__icon-Left);top:var(--og-checkbox__icon-Top);z-index:2}.og-checkbox__label__content{display:block;margin:var(--og-checkbox__label__content-Margin)}"; }
}

exports.og_checkbox = OgCheckbox;
