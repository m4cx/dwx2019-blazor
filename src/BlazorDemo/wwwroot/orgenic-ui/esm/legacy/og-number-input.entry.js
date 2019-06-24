import { r as registerInstance, c as createEvent, h, H as Host } from './orgenic-ui-5001260f.js';
var OgNumberInput = /** @class */ (function () {
    function OgNumberInput(hostRef) {
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged", 7);
        this.focusGained = createEvent(this, "focusGained", 7);
        this.focusLost = createEvent(this, "focusLost", 7);
    }
    OgNumberInput.prototype.handleChange = function (e) {
        var value = parseFloat(e.target.value);
        if (!isNaN(value)) {
            this.value = value;
        }
        else {
            this.value = null;
        }
        this.valueChanged.emit(this.value);
    };
    OgNumberInput.prototype.render = function () {
        var _this = this;
        return (h(Host, { class: { 'og-form-item__editor': true } }, h("input", { type: "number", class: "og-input__input", value: this.value, step: this.step, min: this.min, max: this.max, disabled: this.disabled, onInput: function (event) { return _this.handleChange(event); }, onFocus: function (event) { return _this.focusGained.emit(event); }, onBlur: function (event) { return _this.focusLost.emit(event); }, placeholder: this.placeholder }), h("div", { class: "og-input__indicator" })));
    };
    Object.defineProperty(OgNumberInput, "style", {
        get: function () { return ":host{--og-input-BorderColor:transparent;--og-input-Background:var(--OG-COLOR-SHADE--80--05,rgba(62,129,163,0.05));--og-input-Padding:4px;--og-input__input-Background:transparent;--og-input__input-BorderColor:var(--OG-COLOR-SHADE--50,#8fadbc);--og-input__input-BorderColor--disabled:var(--OG-COLOR-SHADE--70--50,rgba(99,140,161,0.5));--og-input__input-LineHeight:1;--og-input__input-Color:inherit;--og-input__input-Color--disabled:var(--OG-COLOR-SHADE--100--50,rgba(57,83,96,0.5));--og-input__input-FontFamily:inherit;--og-input__input-FontSize:inherit;--og-input__input-Padding:24px 0 4px;--og-input__input-Appearance:textfield;--og-input__indicator-Width:0;--og-input__indicator-Height:2px;--og-input__indicator-Background:var(--OG-COLOR-PRIMARY--100,#1da2d3);display:block;padding:var(--og-input-Padding);background:var(--og-input-Background);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}.og-input__input{display:block;background:var(--og-input__input-Background);width:100%;color:var(--og-input__input-Color);font-family:var(--og-input__input-FontFamily);font-size:var(--og-input__input-FontSize);line-height:var(--og-input__input-LineHeight);padding:var(--og-input__input-Padding);margin:0;border-width:0 0 var(--og-input__input-BorderWidth,1px) 0;border-style:solid;border-color:var(--og-input__input-BorderColor);outline:none}.og-input__indicator{display:var(--og-input__indicator-Display);position:absolute;bottom:var(--og-input-Padding);left:var(--og-input-Padding);width:var(--og-input__indicator-Width);height:var(--og-input__indicator-Height);background-color:var(--og-input__indicator-Background);-webkit-transition:all .3s ease;transition:all .3s ease}.og-input__input:focus+.og-input__indicator{--og-input__indicator-Width:calc(100% - (var(--og-input-Padding) * 2))}[disabled]{--og-input__input-Color:var(--og-input__input-Color--disabled);--og-input__input-BorderColor:var(--og-input__input-BorderColor--disabled)}[type=number]{-moz-appearance:var(--og-input__input-Appearance)}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{-webkit-appearance:var(--og-input__input-Appearance);margin:0}"; },
        enumerable: true,
        configurable: true
    });
    return OgNumberInput;
}());
export { OgNumberInput as og_number_input };
