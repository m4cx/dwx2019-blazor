'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./orgenic-ui-ae2bfbb5.js');

class OgRadioButtonGroup {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.radioButtons = [];
        this.valueChanged = __chunk_1.createEvent(this, "valueChanged", 7);
    }
    nameChanged() { this.updateButtons(); }
    handleValueChange() { this.updateButtons(); }
    disabledChanged() { this.updateButtons(); }
    componentWillLoad() {
        // Grab radio buttons from this component
        this.radioButtons = Array.from(this.el.querySelectorAll('og-radio-button'));
        if (this.radioButtons.length === 0) {
            throw new Error('[og-radio-button-group] Must have at least one og-radio-button child');
        }
        this.updateButtons();
        this.radioButtons.forEach(radioButton => {
            radioButton.addEventListener('changed', e => this.selectedRadioButtonChanged(e));
        });
    }
    selectedRadioButtonChanged(event) {
        this.value = event.target.value;
        this.valueChanged.emit(this.value);
        event.cancelBubble = true;
    }
    updateButtons() {
        this.radioButtons.forEach(button => {
            button.name = this.name;
            button.groupDisabled = this.disabled;
            button.checked = button.value === this.value;
        });
    }
    render() {
        return (__chunk_1.h("slot", null));
    }
    get el() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "name": ["nameChanged"],
        "value": ["handleValueChange"],
        "disabled": ["disabledChanged"]
    }; }
    static get style() { return ":host{--og-radio-button-Width:1.5rem;--og-radio-button-Height:var(--og-radio-button-Width);--og-radio-button-BorderRadius:50%;--og-radio-button-Top:-0.125rem;--og-radio-button-Left:0;--og-radio-button-Background:var(--OG-COLOR-PRIMARY--0--50,hsla(0,0%,100%,0.5));--og-radio-button-Background--hover:var(--OG-COLOR-PRIMARY--100--20,rgba(29,162,211,0.2));--og-radio-button-Background--checked:var(--OG-COLOR-PRIMARY--0--50,hsla(0,0%,100%,0.5));--og-radio-button-Background--disabled:var(--OG-COLOR-PRIMARY--0--30,hsla(0,0%,100%,0.3));--og-radio-button-BorderWidth:.0625rem;--og-radio-button-BorderColor:var(--OG-COLOR-SHADE--50,#8fadbc);--og-radio-button-BorderColor--hover:var(--OG-COLOR-SHADE--50,#8fadbc);--og-radio-button-BorderColor--checked:var(--OG-COLOR-SHADE--50,#8fadbc);--og-radio-button__icon-Width:.75rem;--og-radio-button__icon-Height:.75rem;--og-radio-button__icon-Top:calc((var(--og-radio-button-Height) - var(--og-radio-button__icon-Height)) / 2 + var(--og-radio-button-Top));--og-radio-button__icon-Left:calc((var(--og-radio-button-Width) - var(--og-radio-button__icon-Width)) / 2);--og-radio-button__icon-BorderRadius:1.25rem;--og-radio-button__icon-BorderWidth:0;--og-radio-button__icon-BorderColor:transparent;--og-radio-button__icon-BorderColor--hover:transparent;--og-radio-button__icon-BorderColor--checked:transparent;--og-radio-button__icon-Background:transparent;--og-radio-button__icon-Background--hover:transparent;--og-radio-button__icon-Background--checked:var(--OG-COLOR-PRIMARY--100,#1da2d3);-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}::slotted(og-radio-button){-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;position:relative}::slotted(:not(.og-radio-button--disabled):hover){--og-radio-button-Background:var(--og-radio-button-Background--hover);--og-radio-button-BorderColor:var(--og-radio-button-BorderColor--hover);--og-radio-button__icon-Background:var(--og-radio-button__icon-Background--hover);--og-radio-button__icon-BorderColor:var(--og-radio-button__icon-BorderColor--hover)}::slotted(.og-radio-button--checked){--og-radio-button-Background:var(--og-radio-button-Background--checked);--og-radio-button-BorderColor:var(--og-radio-button-BorderColor--checked)}::slotted(.og-radio-button--checked),::slotted(.og-radio-button--checked:not(.og-radio-button--disabled):hover){--og-radio-button__icon-Background:var(--og-radio-button__icon-Background--checked);--og-radio-button__icon-BorderColor:var(--og-radio-button__icon-BorderColor--checked)}::slotted(.og-radio-button--checked:not(.og-radio-button--disabled):hover){--og-radio-button-Background:var(--og-radio-button-Background--hover);--og-radio-button-BorderColor:var(--og-radio-button-BorderColor--hover)}"; }
}

exports.og_radio_button_group = OgRadioButtonGroup;
