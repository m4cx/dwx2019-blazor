import { r as registerInstance, c as createEvent, h, H as Host } from './orgenic-ui-5001260f.js';

class OgTextarea {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged", 7);
        this.focusGained = createEvent(this, "focusGained", 7);
        this.focusLost = createEvent(this, "focusLost", 7);
    }
    handleChange(e) {
        this.value = e.target.value;
        this.valueChanged.emit(this.value);
    }
    render() {
        return (h(Host, { class: { 'og-form-item__editor': true } }, h("textarea", { class: "og-textarea__textarea", value: this.value, disabled: this.disabled, onInput: (event) => this.handleChange(event), onFocus: (event) => this.focusGained.emit(event), onBlur: (event) => this.focusLost.emit(event) }), h("div", { class: "og-textarea__indicator" })));
    }
    static get style() { return ":host{--og-textarea-Background:var(--OG-COLOR-SHADE--80--05,rgba(62,129,163,0.05));--og-textarea-Padding:4px;--og-textarea__textarea-Background:transparent;--og-textarea__textarea-BorderColor:var(--OG-COLOR-SHADE--50,#8fadbc);--og-textarea__textarea-BorderColor--disabled:var(--OG-COLOR-SHADE--70--50,rgba(99,140,161,0.5));--og-textarea__textarea-BorderWidth:1px;--og-textarea__textarea-LineHeight:1.25;--og-textarea__textarea-Color:inherit;--og-textarea__textarea-Color--disabled:var(--OG-COLOR-SHADE--100--50,rgba(57,83,96,0.5));--og-textarea__textarea-FontFamily:inherit;--og-textarea__textarea-FontSize:inherit;--og-textarea__textarea-Padding:0 0 4px 0;--og-textarea__indicator-Display:block;--og-textarea__indicator-Width:0;--og-textarea__indicator-Height:2px;--og-textarea__indicator-Background:var(--OG-COLOR-PRIMARY--100,#1da2d3);display:block;padding:var(--og-textarea-Padding);background:var(--og-textarea-Background);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}.og-textarea__textarea{display:block;background:var(--og-textarea__textarea-Background);height:0;min-height:6.6em;width:100%;color:var(--og-textarea__textarea-Color);font-family:var(--og-textarea__textarea-FontFamily);font-size:var(--og-textarea__textarea-FontSize);line-height:var(--og-textarea__textarea-LineHeight);padding:var(--og-textarea__textarea-Padding);margin:0;border-width:0 0 var(--og-textarea__textarea-BorderWidth,1px) 0;border-style:solid;border-color:var(--og-textarea__textarea-BorderColor);border-top:24px solid transparent;outline:none;-webkit-transition:min-height .2s ease-in-out;transition:min-height .2s ease-in-out;overflow:hidden;max-width:100%}.og-textarea__indicator{display:var(--og-textarea__indicator-Display);position:absolute;bottom:var(--og-textarea-Padding);left:var(--og-textarea-Padding);width:var(--og-textarea__indicator-Width);height:var(--og-textarea__indicator-Height);background-color:var(--og-textarea__indicator-Background);-webkit-transition:all .3s ease;transition:all .3s ease}.og-textarea__textarea:focus{overflow:auto;min-height:8em}.og-textarea__textarea:focus+.og-textarea__indicator{--og-textarea__indicator-Width:calc(100% - (var(--og-textarea-Padding) * 2))}[disabled]{--og-textarea__textarea-Color:var(--og-textarea__textarea-Color--disabled);--og-textarea__textarea-BorderColor:var(--og-textarea__textarea-BorderColor--disabled)}"; }
}

export { OgTextarea as og_textarea };
