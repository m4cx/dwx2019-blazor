import { r as registerInstance, c as createEvent, h } from './orgenic-ui-5001260f.js';

class OgToggleSwitch {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.internalId = Math.random().toString(18).substring(2, 8) + Math.random().toString(18).substring(2, 8);
        this.changed = createEvent(this, "changed", 7);
    }
    handleChange(e) {
        if (!this.disabled) {
            this.changed.emit(e.target.checked);
        }
    }
    render() {
        return [
            h("input", { type: "checkbox", id: this.internalId, class: "og-toggle-switch__input", checked: this.value, disabled: this.disabled, onChange: (event) => this.handleChange(event) }),
            h("label", { class: "og-toggle-switch__toggle", htmlFor: this.internalId, tabindex: "0" })
        ];
    }
    static get style() { return ":host{--og-toggle-switch__toggle-Width:4rem;--og-toggle-switch__toggle-Height:2rem;--og-toggle-switch__toggle-BorderWidth:0px;--og-toggle-switch__toggle-Background:var(--OG-COLOR-SECONDARY--100--20,rgba(51,51,51,0.2));--og-toggle-switch__toggle-Background--hover:var(--OG-COLOR-SECONDARY--100--30,rgba(51,51,51,0.3));--og-toggle-switch__toggle-Background--active:var(--OG-COLOR-PRIMARY--100,#1da2d3);--og-toggle-switch__toggle-BorderColor:none;--og-toggle-switch__toggle-Padding:calc((var(--og-toggle-switch__toggle-Height) - var(--og-toggle-switch__indicator-Height)) / 2 - var(--og-toggle-switch__toggle-BorderWidth));--og-toggle-switch__indicator-Background:var(--OG-COLOR-SECONDARY--0,#fff);--og-toggle-switch__indicator-Background--hover:var(--OG-COLOR-SECONDARY--0,#fff);--og-toggle-switch__indicator-Background--active:var(--OG-COLOR-SECONDARY--0,#fff);--og-toggle-switch__indicator-BorderRadius:2px;--og-toggle-switch__indicator-Width:1.375rem;--og-toggle-switch__indicator-Height:1.375rem;--og-toggle-switch__indicator-Top:var(--og-toggle-switch__toggle-Padding);--og-toggle-switch__indicator-Left:var(--og-toggle-switch__toggle-Padding);--og-toggle-switch__indicator-TranslateX:calc(var(--og-toggle-switch__toggle-Width) - var(--og-toggle-switch__indicator-Width) - ((var(--og-toggle-switch__toggle-Padding) + var(--og-toggle-switch__toggle-BorderWidth)) * 2));display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:0}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}.og-toggle-switch__input{position:absolute;width:0;height:0;border:0;clip:rect(0,0,0,0);overflow:hidden;margin:0;padding:0;outline:0}.og-toggle-switch__input:checked+.og-toggle-switch__toggle:after{-webkit-transform:translateX(var(--og-toggle-switch__indicator-TranslateX));transform:translateX(var(--og-toggle-switch__indicator-TranslateX))}.og-toggle-switch__input:checked+.og-toggle-switch__toggle{--og-toggle-switch__toggle-Background:var(--og-toggle-switch__toggle-Background--active);--og-toggle-switch__indicator-Background:var(--og-toggle-switch__indicator-Background--active)}.og-toggle-switch__input:disabled+.og-toggle-switch__toggle{opacity:.5;cursor:default}.og-toggle-switch__toggle{outline:0;display:inline-block;width:var(--og-toggle-switch__toggle-Width);height:var(--og-toggle-switch__toggle-Height);background:var(--og-toggle-switch__toggle-Background);border:var(--og-toggle-switch__toggle-BorderWidth) solid var(--og-toggle-switch__toggle-BorderColor);border-radius:.1875rem;position:relative;-webkit-transition:background .15s ease-in-out;transition:background .15s ease-in-out;cursor:pointer}.og-toggle-switch__toggle:after{position:absolute;content:\"\";border-radius:var(--og-toggle-switch__indicator-BorderRadius);left:var(--og-toggle-switch__indicator-Left);top:var(--og-toggle-switch__indicator-Top);width:var(--og-toggle-switch__indicator-Width);height:var(--og-toggle-switch__indicator-Height);background:var(--og-toggle-switch__indicator-Background);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.og-toggle-switch__toggle:hover{--og-toggle-switch__toggle-Background:var(--og-toggle-switch__toggle-Background--hover);--og-toggle-switch__indicator-Background:var(--og-toggle-switch__indicator-Background--hover)}"; }
}

export { OgToggleSwitch as og_toggle_switch };
