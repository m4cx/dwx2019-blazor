'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./orgenic-ui-ae2bfbb5.js');

class OgPasswordInput {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        /**
         * Define, whether a switch should be visible, to show the password in plain text.
         */
        this.showTogglePasswordVisibility = false;
        this.passwordVisible = false;
        this.valueChanged = __chunk_1.createEvent(this, "valueChanged", 7);
        this.focusGained = __chunk_1.createEvent(this, "focusGained", 7);
        this.focusLost = __chunk_1.createEvent(this, "focusLost", 7);
    }
    async togglePasswordVisibility() {
        this.passwordVisible = !this.passwordVisible;
    }
    handleChange(e) {
        this.value = e.target.value;
        this.valueChanged.emit(this.value);
    }
    render() {
        return (__chunk_1.h(__chunk_1.Host, { class: { 'og-form-item__editor': true } }, __chunk_1.h("input", { type: this.passwordVisible ? 'text' : 'password', class: "og-input__input", value: this.value, disabled: this.disabled, onInput: (event) => this.handleChange(event), onFocus: (event) => this.focusGained.emit(event), onBlur: (event) => this.focusLost.emit(event), placeholder: this.placeholder }), __chunk_1.h("div", { class: "og-input__indicator" }), this.showTogglePasswordVisibility &&
            __chunk_1.h("div", { class: "og-input__visibility-button", onClick: () => this.togglePasswordVisibility() }, __chunk_1.h("svg", { class: "og-input__eye og-input__eye--opened", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, __chunk_1.h("path", { d: "M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z" })), __chunk_1.h("svg", { class: "og-input__eye og-input__eye--closed", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, __chunk_1.h("path", { d: "M19.604 2.562l-3.346 3.137c-1.27-.428-2.686-.699-4.243-.699-7.569 0-12.015 6.551-12.015 6.551s1.928 2.951 5.146 5.138l-2.911 2.909 1.414 1.414 17.37-17.035-1.415-1.415zm-6.016 5.779c-3.288-1.453-6.681 1.908-5.265 5.206l-1.726 1.707c-1.814-1.16-3.225-2.65-4.06-3.66 1.493-1.648 4.817-4.594 9.478-4.594.927 0 1.796.119 2.61.315l-1.037 1.026zm-2.883 7.431l5.09-4.993c1.017 3.111-2.003 6.067-5.09 4.993zm13.295-4.221s-4.252 7.449-11.985 7.449c-1.379 0-2.662-.291-3.851-.737l1.614-1.583c.715.193 1.458.32 2.237.32 4.791 0 8.104-3.527 9.504-5.364-.729-.822-1.956-1.99-3.587-2.952l1.489-1.46c2.982 1.9 4.579 4.327 4.579 4.327z" })))));
    }
    static get style() { return ":host{--og-input-BorderColor:transparent;--og-input-Background:var(--OG-COLOR-SHADE--80--05,rgba(62,129,163,0.05));--og-input-Padding:4px;--og-input__input-Background:transparent;--og-input__input-BorderColor:var(--OG-COLOR-SHADE--50,#8fadbc);--og-input__input-BorderColor--disabled:var(--OG-COLOR-SHADE--70--50,rgba(99,140,161,0.5));--og-input__input-LineHeight:1;--og-input__input-Color:inherit;--og-input__input-Color--disabled:var(--OG-COLOR-SHADE--100--50,rgba(57,83,96,0.5));--og-input__input-FontFamily:inherit;--og-input__input-FontSize:inherit;--og-input__input-Padding:24px 0 4px;--og-input__input-Appearance:textfield;--og-input__indicator-Width:0;--og-input__indicator-Height:2px;--og-input__indicator-Background:var(--OG-COLOR-PRIMARY--100,#1da2d3);display:block;padding:var(--og-input-Padding);background:var(--og-input-Background);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}.og-input__input{display:block;background:var(--og-input__input-Background);width:100%;color:var(--og-input__input-Color);font-family:var(--og-input__input-FontFamily);font-size:var(--og-input__input-FontSize);line-height:var(--og-input__input-LineHeight);padding:var(--og-input__input-Padding);margin:0;border-width:0 0 var(--og-input__input-BorderWidth,1px) 0;border-style:solid;border-color:var(--og-input__input-BorderColor);outline:none}.og-input__indicator{display:var(--og-input__indicator-Display);position:absolute;bottom:var(--og-input-Padding);left:var(--og-input-Padding);width:var(--og-input__indicator-Width);height:var(--og-input__indicator-Height);background-color:var(--og-input__indicator-Background);-webkit-transition:all .3s ease;transition:all .3s ease}.og-input__input:focus+.og-input__indicator{--og-input__indicator-Width:calc(100% - (var(--og-input-Padding) * 2))}[disabled]{--og-input__input-Color:var(--og-input__input-Color--disabled);--og-input__input-BorderColor:var(--og-input__input-BorderColor--disabled)}.og-input__visibility-button{width:32px;height:32px;cursor:pointer;position:absolute;padding:8px;right:0;bottom:6px}.og-input__eye{max-width:100%;color:var(--og-input__input-Color)}.og-input__eye path{fill:currentColor}[type=password]~.og-input__visibility-button .og-input__eye--closed,[type=text]~.og-input__visibility-button .og-input__eye--opened{display:none}"; }
}

exports.og_password_input = OgPasswordInput;
