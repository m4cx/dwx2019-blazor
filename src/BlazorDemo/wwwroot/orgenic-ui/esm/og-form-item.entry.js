import { r as registerInstance, h, H as Host, g as getElement$1 } from './orgenic-ui-5001260f.js';

async function getElement(element, selector, timeout) {
    const timeoutFn = ms => new Promise(resolve => setTimeout(resolve, ms));
    let time = 0;
    let result = element.querySelector(selector);
    while (!result && time < timeout) {
        time += 25;
        await timeoutFn(25);
        result = element.querySelector(selector);
    }
    return result;
}

class OgFormItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.editorHasFocus = false;
        this.editorIsEmpty = false;
    }
    disabledChanged(newValue) {
        this.editor.setAttribute('disabled', newValue);
    }
    async componentDidLoad() {
        this.editor = await getElement(this.el, '.og-form-item__editor', 1000);
        if (!this.editor) {
            return console.error('OgFormItem is unable to resolve editor');
        }
        this.editor.addEventListener('focusGained', () => {
            this.editorHasFocus = true;
        });
        this.editor.addEventListener('focusLost', () => {
            this.editorHasFocus = false;
        });
        // TODO: for 1.0.0 unify value change event names
        let valueChangeEvent = 'valueChanged';
        switch (this.editor.tagName.toLowerCase()) {
            case 'og-combobox':
                valueChangeEvent = 'itemSelected';
                break;
            case 'og-datepicker':
                valueChangeEvent = 'dateSelected';
                break;
            default:
        }
        this.editor.addEventListener(valueChangeEvent, (event) => {
            this.checkEditorEmpty(event.detail);
        });
        this.checkEditorEmpty(this.editor['value']);
        // update disabled state of child editor
        if (this.disabled) {
            this.editor.setAttribute('disabled', 'true');
        }
        else {
            this.editor.removeAttribute('disabled');
        }
    }
    checkEditorEmpty(value) {
        this.editorIsEmpty = (typeof value === 'object' && value === null) || value === undefined || value.length === 0;
    }
    render() {
        return h(Host, { class: {
                'og-form-item--focused': this.editorHasFocus,
                'og-form-item--empty': this.editorIsEmpty
            } }, h("label", { class: "og-form-item", htmlFor: "input#1" }, h("div", { class: "og-form-item__body" }, h("div", { class: "og-form-item__label" }, this.label), h("slot", null))));
    }
    get el() { return getElement$1(this); }
    static get watchers() { return {
        "disabled": ["disabledChanged"]
    }; }
    static get style() { return ":host{--og-form-item-Margin:4px;--og-form-item__body-Background:transparent;--og-form-item__body-Padding:0;--og-form-item__label-FontSize:inherit;--og-form-item__label-Top:28px;--og-form-item__label-Left:4px;--og-form-item__label-Color:var(--OG-COLOR-SHADE--100--50,rgba(57,83,96,0.5));--og-form-item__label-Color--hover:var(--OG-COLOR-SHADE--100--50,rgba(57,83,96,0.5));--og-form-item__label-Color--active:var(--OG-COLOR-PRIMARY--100,#1da2d3);display:block;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}:host(.og-form-item--focused){--og-form-item__label-FontSize:var(--og-input__label--focus-FontSize,12px);--og-form-item__label-Top:4px;--og-form-item__label-Color:var(--og-form-item__label-Color--active);--og-input__indicator-Width:100%}:host(:not(.og-form-item--empty)){--og-form-item__label-FontSize:var(--og-input__label--focus-FontSize,12px);--og-form-item__label-Top:4px}.og-form-item__body{display:block;position:relative;background:var(--og-form-item__body-Background);padding:var(--og-form-item__body-Padding);min-height:56px}.og-form-item__label{position:absolute;pointer-events:none;top:var(--og-form-item__label-Top);left:var(--og-form-item__label-Left);z-index:1;font-size:var(--og-form-item__label-FontSize);color:var(--og-form-item__label-Color);-webkit-transition:all .2s cubic-bezier(.19,1,.22,1);transition:all .2s cubic-bezier(.19,1,.22,1)}"; }
}

export { OgFormItem as og_form_item };
