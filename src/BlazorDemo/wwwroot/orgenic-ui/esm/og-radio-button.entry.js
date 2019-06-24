import { r as registerInstance, c as createEvent, h, H as Host } from './orgenic-ui-5001260f.js';

class OgRadioButton {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.internalId = Math.random().toString(18).substring(2, 8) + Math.random().toString(18).substring(2, 8);
        this.changed = createEvent(this, "changed", 7);
    }
    eventInputChanged(event) {
        this.changed.emit(event.target.value);
    }
    render() {
        return (h(Host, { class: {
                'og-radio-button--checked': this.checked,
                'og-radio-button--disabled': this.disabled || this.groupDisabled,
            } }, h("input", { type: "radio", id: this.internalId, name: this.name, checked: this.checked, disabled: this.disabled || this.groupDisabled, class: "og-radio-button__input", onChange: (e) => this.eventInputChanged(e) }), h("label", { class: "og-radio-button__label", htmlFor: this.internalId }, this.label && h("span", { class: "og-radio-button__label__content" }, this.label))));
    }
    static get style() { return ".og-radio-button__input{position:absolute;width:0;height:0;border:0;clip:rect(0,0,0,0);overflow:hidden;margin:0;padding:0;outline:0}.og-radio-button__input:disabled+.og-radio-button__label{cursor:default;opacity:.5}.og-radio-button__label{display:block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;min-width:var(--og-radio-button-Width);min-height:var(--og-radio-button-Height);cursor:pointer;-webkit-box-sizing:inherit;box-sizing:inherit}.og-radio-button__label:after,.og-radio-button__label:before{-webkit-box-sizing:inherit;box-sizing:inherit;position:absolute;content:\"\";display:block;top:0;left:0;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.og-radio-button__label:before{width:var(--og-radio-button-Width);height:var(--og-radio-button-Height);background:var(--og-radio-button-Background);border:var(--og-radio-button-BorderWidth) solid var(--og-radio-button-BorderColor);border-radius:var(--og-radio-button-BorderRadius);left:var(--og-radio-button-Left);top:var(--og-radio-button-Top);z-index:1}.og-radio-button__label:after{background:var(--og-radio-button__icon-Background);width:var(--og-radio-button__icon-Width);height:var(--og-radio-button__icon-Height);border:solid var(--og-radio-button__icon-BorderColor);border-width:var(--og-radio-button__icon-BorderWidth);border-radius:var(--og-radio-button__icon-BorderRadius);left:var(--og-radio-button__icon-Left);top:var(--og-radio-button__icon-Top);z-index:2}.og-radio-button__label__content{display:block;margin-left:1.875rem;margin-right:.5rem}"; }
}

export { OgRadioButton as og_radio_button };
