/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/
import { h, Host } from '@stencil/core';
export class OgCombobox {
    constructor() {
        /**
         * Set the property for the items to define as label. Default: "label"
         */
        this.itemLabelProperty = 'label';
        /**
         * Set the property for the items to define as value. Default: "value"
         */
        this.itemValueProperty = 'value';
        this.dropdownActive = false;
    }
    handleWindowScroll(_ev) {
        // close flyout on scroll events
        this.dropdownActive = false;
        this.focusLost.emit();
    }
    handleBodyScroll(_ev) {
        // close flyout on scroll events
        this.dropdownActive = false;
        this.focusLost.emit();
    }
    handleBodyClick(ev) {
        if (!this.dropdownActive || this.el === ev.target) {
            return;
        }
        if (this.dropdownActive) {
            this.dropdownActive = false;
            ev.cancelBubble = true;
            this.focusLost.emit();
        }
    }
    componentDidLoad() {
        this.flyoutList.addEventListener('wheel', (_ev) => {
            if (this.flyoutList.scrollTop === 0 && _ev.deltaY < 0) {
                _ev.cancelBubble = true;
                _ev.preventDefault();
            }
            if (this.flyoutList.scrollTop + this.flyoutList.offsetHeight === this.flyoutList.scrollHeight && _ev.deltaY > 0) {
                _ev.cancelBubble = true;
                _ev.preventDefault();
            }
        });
    }
    buttonClicked() {
        if (!this.disabled) {
            this.dropdownActive = !this.dropdownActive;
            if (this.dropdownActive) {
                this.focusGained.emit();
            }
            else {
                this.focusLost.emit();
            }
        }
    }
    listItemSelected(item) {
        if (!this.disabled) {
            this.dropdownActive = false;
            this.value = item[this.itemValueProperty] + '';
            this.itemSelected.emit(item);
            this.focusLost.emit();
        }
    }
    getSelectedItemLabel() {
        if (!this.hasValidItems()) {
            return '';
        }
        const item = this.items.find(item => item[this.itemValueProperty] + '' === this.value);
        if (!item) {
            return '';
        }
        return item[this.itemLabelProperty];
    }
    hasValidItems() {
        return Array.isArray(this.items);
    }
    isDropdownActive() {
        return this.dropdownActive && !this.disabled;
    }
    /**
     * behaviour:
     *   * combobox flyout shows 7 items
     *   * if it does not fit on screen, scale down flyout
     *   * if flyout would be smaller than 4 items, show flyout above combobox
     */
    getFlyoutCss() {
        if (!this.indicatorElement) {
            return {};
        }
        let flyoutTop = (this.indicatorElement.getBoundingClientRect().top + this.indicatorElement.offsetHeight);
        let flyoutHeight = 0;
        let itemHeight = 0;
        // get item height
        const item = this.flyoutList.querySelector('li');
        if (!item) {
            // no items available => return
            return {};
        }
        const itemStyle = window.getComputedStyle(item);
        itemHeight = parseInt(itemStyle.paddingTop) + parseInt(itemStyle.paddingBottom) + parseInt(itemStyle.lineHeight);
        flyoutHeight = itemHeight * this.items.length;
        // get space on screen below combobox
        const spaceBelow = window.innerHeight - flyoutTop - parseInt(itemStyle.paddingBottom);
        // calculate maximum and minimum flyout sizes (for 4 - 7 items)
        const maxHeight = itemHeight * Math.min(7, this.items.length);
        const minHeight = itemHeight * Math.min(4, this.items.length);
        // calculate real flyout size to fit below combobox
        flyoutHeight = Math.min(spaceBelow, Math.min(maxHeight, flyoutHeight));
        // if flyout size is below min size, then show flyout above combobox
        if (flyoutHeight < minHeight) {
            flyoutHeight = maxHeight;
            flyoutTop = this.el.getBoundingClientRect().top - flyoutHeight;
        }
        return {
            top: flyoutTop + 'px',
            width: window.getComputedStyle(this.flyoutList.parentElement).width,
            height: flyoutHeight + 'px'
        };
    }
    render() {
        return (h(Host, { class: {
                'is-focused': this.dropdownActive,
                'og-form-item__editor': true
            } },
            h("div", { class: "og-combobox__header", onClick: () => this.buttonClicked() },
                h("input", { type: "text", class: "og-combobox__input", readonly: "true", value: this.getSelectedItemLabel(), placeholder: this.placeholder, disabled: this.disabled }),
                h("div", { class: "og-combobox__button" },
                    h("svg", { class: 'og-combobox__button__arrow' +
                            (this.isDropdownActive() ? ' og-combobox__button__arrow--collapsed' : ''), version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 12", preserveAspectRatio: "none" },
                        h("polyline", { class: "og-combobox__button__arrow__line", points: "0,0 12,12 24,0", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecaps": "round", "stroke-linejoin": "round" }))),
                h("div", { class: "og-combobox__indicator", ref: (el) => this.indicatorElement = el })),
            h("div", { class: "og-combobox__flyout" },
                h("ul", { class: 'og-combobox__flyout__list' +
                        (this.isDropdownActive() ? ' og-combobox__flyout__list--visible' : ''), style: this.getFlyoutCss(), ref: (el) => this.flyoutList = el }, !this.hasValidItems() ? (h("li", null, "No options available")) : (this.items.map(item => (h("li", { class: 'og-combobox__flyout__list__item' +
                        (item[this.itemValueProperty] == this.value ? ' og-combobox__flyout__list__item--active' : ''), onClick: () => this.listItemSelected(item) }, item[this.itemLabelProperty]))))))));
    }
    static get is() { return "og-combobox"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-combobox.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-combobox.css"]
    }; }
    static get properties() { return {
        "placeholder": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Optional placeholder if no value is selected."
            },
            "attribute": "placeholder",
            "reflect": false
        },
        "value": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The selected value of the combobox"
            },
            "attribute": "value",
            "reflect": true
        },
        "items": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "any[]",
                "resolved": "any[]",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "An array of items to choose from"
            }
        },
        "itemLabelProperty": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Set the property for the items to define as label. Default: \"label\""
            },
            "attribute": "item-label-property",
            "reflect": false,
            "defaultValue": "'label'"
        },
        "itemValueProperty": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Set the property for the items to define as value. Default: \"value\""
            },
            "attribute": "item-value-property",
            "reflect": false,
            "defaultValue": "'value'"
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Determines, whether the control is disabled or not"
            },
            "attribute": "disabled",
            "reflect": false
        }
    }; }
    static get states() { return {
        "dropdownActive": {}
    }; }
    static get events() { return [{
            "method": "itemSelected",
            "name": "itemSelected",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Event is being emitted when value changes."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "focusGained",
            "name": "focusGained",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Event is being emitted when input gets focus.."
            },
            "complexType": {
                "original": "FocusEvent",
                "resolved": "FocusEvent",
                "references": {
                    "FocusEvent": {
                        "location": "global"
                    }
                }
            }
        }, {
            "method": "focusLost",
            "name": "focusLost",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Event is being emitted when focus gets lost."
            },
            "complexType": {
                "original": "FocusEvent",
                "resolved": "FocusEvent",
                "references": {
                    "FocusEvent": {
                        "location": "global"
                    }
                }
            }
        }]; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "scroll",
            "method": "handleWindowScroll",
            "target": "window",
            "capture": false,
            "passive": true
        }, {
            "name": "scroll",
            "method": "handleBodyScroll",
            "target": "body",
            "capture": false,
            "passive": true
        }, {
            "name": "click",
            "method": "handleBodyClick",
            "target": "body",
            "capture": false,
            "passive": false
        }]; }
}
