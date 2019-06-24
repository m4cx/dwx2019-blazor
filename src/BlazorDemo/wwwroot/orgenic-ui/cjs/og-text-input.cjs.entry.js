'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./orgenic-ui-ae2bfbb5.js');

class OgTextInput {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.valueChanged = __chunk_1.createEvent(this, "valueChanged", 7);
        this.focusGained = __chunk_1.createEvent(this, "focusGained", 7);
        this.focusLost = __chunk_1.createEvent(this, "focusLost", 7);
    }
    handleChange(e) {
        this.value = e.target.value;
        this.valueChanged.emit(this.value);
    }
    render() {
        return (__chunk_1.h(__chunk_1.Host, { class: { 'og-form-item__editor': true } }, __chunk_1.h("input", { type: "text", class: "og-input__input", value: this.value, disabled: this.disabled, onInput: (event) => this.handleChange(event), onFocus: (event) => this.focusGained.emit(event), onBlur: (event) => this.focusLost.emit(event), placeholder: this.placeholder }), __chunk_1.h("div", { class: "og-input__indicator" })));
    }
    static get style() { return ":host{--og-input-BorderColor:transparent;--og-input-Background:var(--OG-COLOR-SHADE--80--05,rgba(62,129,163,0.05));--og-input-Padding:4px;--og-input__input-Background:transparent;--og-input__input-BorderColor:var(--OG-COLOR-SHADE--50,#8fadbc);--og-input__input-BorderColor--disabled:var(--OG-COLOR-SHADE--70--50,rgba(99,140,161,0.5));--og-input__input-LineHeight:1;--og-input__input-Color:inherit;--og-input__input-Color--disabled:var(--OG-COLOR-SHADE--100--50,rgba(57,83,96,0.5));--og-input__input-FontFamily:inherit;--og-input__input-FontSize:inherit;--og-input__input-Padding:24px 0 4px;--og-input__input-Appearance:textfield;--og-input__indicator-Width:0;--og-input__indicator-Height:2px;--og-input__indicator-Background:var(--OG-COLOR-PRIMARY--100,#1da2d3);display:block;padding:var(--og-input-Padding);background:var(--og-input-Background);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}.og-input__input{display:block;background:var(--og-input__input-Background);width:100%;color:var(--og-input__input-Color);font-family:var(--og-input__input-FontFamily);font-size:var(--og-input__input-FontSize);line-height:var(--og-input__input-LineHeight);padding:var(--og-input__input-Padding);margin:0;border-width:0 0 var(--og-input__input-BorderWidth,1px) 0;border-style:solid;border-color:var(--og-input__input-BorderColor);outline:none}.og-input__indicator{display:var(--og-input__indicator-Display);position:absolute;bottom:var(--og-input-Padding);left:var(--og-input-Padding);width:var(--og-input__indicator-Width);height:var(--og-input__indicator-Height);background-color:var(--og-input__indicator-Background);-webkit-transition:all .3s ease;transition:all .3s ease}.og-input__input:focus+.og-input__indicator{--og-input__indicator-Width:calc(100% - (var(--og-input-Padding) * 2))}[disabled]{--og-input__input-Color:var(--og-input__input-Color--disabled);--og-input__input-BorderColor:var(--og-input__input-BorderColor--disabled)}"; }
}

exports.og_text_input = OgTextInput;
