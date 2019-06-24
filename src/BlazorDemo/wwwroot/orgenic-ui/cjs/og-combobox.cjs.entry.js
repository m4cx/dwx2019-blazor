'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./orgenic-ui-ae2bfbb5.js');

class OgCombobox {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        /**
         * Set the property for the items to define as label. Default: "label"
         */
        this.itemLabelProperty = 'label';
        /**
         * Set the property for the items to define as value. Default: "value"
         */
        this.itemValueProperty = 'value';
        this.dropdownActive = false;
        this.itemSelected = __chunk_1.createEvent(this, "itemSelected", 7);
        this.focusGained = __chunk_1.createEvent(this, "focusGained", 7);
        this.focusLost = __chunk_1.createEvent(this, "focusLost", 7);
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
        return (__chunk_1.h(__chunk_1.Host, { class: {
                'is-focused': this.dropdownActive,
                'og-form-item__editor': true
            } }, __chunk_1.h("div", { class: "og-combobox__header", onClick: () => this.buttonClicked() }, __chunk_1.h("input", { type: "text", class: "og-combobox__input", readonly: "true", value: this.getSelectedItemLabel(), placeholder: this.placeholder, disabled: this.disabled }), __chunk_1.h("div", { class: "og-combobox__button" }, __chunk_1.h("svg", { class: 'og-combobox__button__arrow' +
                (this.isDropdownActive() ? ' og-combobox__button__arrow--collapsed' : ''), version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 12", preserveAspectRatio: "none" }, __chunk_1.h("polyline", { class: "og-combobox__button__arrow__line", points: "0,0 12,12 24,0", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecaps": "round", "stroke-linejoin": "round" }))), __chunk_1.h("div", { class: "og-combobox__indicator", ref: (el) => this.indicatorElement = el })), __chunk_1.h("div", { class: "og-combobox__flyout" }, __chunk_1.h("ul", { class: 'og-combobox__flyout__list' +
                (this.isDropdownActive() ? ' og-combobox__flyout__list--visible' : ''), style: this.getFlyoutCss(), ref: (el) => this.flyoutList = el }, !this.hasValidItems() ? (__chunk_1.h("li", null, "No options available")) : (this.items.map(item => (__chunk_1.h("li", { class: 'og-combobox__flyout__list__item' +
                (item[this.itemValueProperty] == this.value ? ' og-combobox__flyout__list__item--active' : ''), onClick: () => this.listItemSelected(item) }, item[this.itemLabelProperty]))))))));
    }
    get el() { return __chunk_1.getElement(this); }
    static get style() { return ":host{--og-combobox-Background:var(--OG-COLOR-SHADE--80--05,rgba(62,129,163,0.05));--og-combobox-BorderColor:var(--OG-COLOR-SHADE--100--20,rgba(57,83,96,0.2));--og-combobox-BorderWidth:1px;--og-combobox-BorderStyle:solid;--og-combobox-Color:var(--OG-COLOR-SHADE--100,#395360);--og-combobox-FontSize:inherit;--og-combobox-Outline:none;--og-combobox-Opacity:1;--og-combobox__flyout-BoxShadow:none;--og-combobox__flyout-Background:var(--OG-COLOR-PRIMARY--0,#fff);--og-combobox__flyout__item-Background:transparent;--og-combobox__flyout__item-Background--hover:var(--OG-COLOR-PRIMARY--100--15,rgba(29,162,211,0.15));--og-combobox__flyout__item-Background--active:var(--OG-COLOR-PRIMARY--100--30,rgba(29,162,211,0.3));--og-combobox__flyout__item-Color:var(--OG-COLOR-SHADE--100,#395360);--og-combobox__placeholder-Color:var(--OG-COLOR-SHADE--50,#8fadbc);--og-combobox__indicator-Width:0;--og-combobox__indicator-Height:2px;--og-combobox__indicator-Background:var(--OG-COLOR-PRIMARY--100,#1da2d3);--og-combobox__button__arrow-Width:16px;--og-combobox__button__arrow-Height:16px;--og-combobox__button__arrow-Padding:22px 2px 0 2px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:auto;max-width:inherit;max-height:inherit;cursor:pointer;background:var(--og-combobox-Background);opacity:var(--og-combobox-Opacity);-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}:host(.is-focused){--og-combobox__button__indicator-Width:100%;--og-combobox__indicator-Width:100%}:host([disabled]){cursor:default;--og-combobox-Opacity:.3}.og-combobox__header{display:-ms-flexbox;display:flex;position:relative;margin:4px;outline:var(--og-combobox-Outline);border-bottom:var(--og-combobox-BorderWidth) var(--og-combobox-BorderStyle) var(--og-combobox-BorderColor)}.og-combobox__input{-ms-flex:1;flex:1;background:transparent;border:none;cursor:inherit;outline:none;color:var(--og-combobox-Color);font-size:var(--og-combobox-FontSize);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0;padding-top:25px;padding-bottom:4px}.og-combobox__input::-webkit-input-placeholder{color:var(--og-combobox__placeholder-Color)}.og-combobox__input::-moz-placeholder{color:var(--og-combobox__placeholder-Color)}.og-combobox__input:-ms-input-placeholder{color:var(--og-combobox__placeholder-Color)}.og-combobox__input::-ms-input-placeholder{color:var(--og-combobox__placeholder-Color)}.og-combobox__input::placeholder{color:var(--og-combobox__placeholder-Color)}.og-combobox__input::-moz-selection{background:transparent}.og-combobox__input::selection{background:transparent}.og-combobox__button{-ms-flex:none;flex:none;width:var(--og-combobox__button__arrow-Width);height:var(--og-combobox__button__arrow-Width);padding:var(--og-combobox__button__arrow-Padding)}.og-combobox__indicator{display:var(--og-combobox__indicator-Display);position:absolute;bottom:calc(var(--og-combobox-BorderWidth) * -1);left:0;height:var(--og-combobox__indicator-Height);background:var(--og-combobox__indicator-Background);width:var(--og-combobox__indicator-Width);-webkit-transition:width .2s ease;transition:width .2s ease}.og-combobox__button__arrow{-webkit-transition:-webkit-transform .1s;transition:-webkit-transform .1s;transition:transform .1s;transition:transform .1s,-webkit-transform .1s;overflow:visible}.og-combobox__button__arrow--collapsed{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.og-combobox__button__arrow__line{stroke-linecap:round;stroke-linejoin:round}.og-combobox__flyout{position:relative}.og-combobox__flyout__list{margin:0;margin-top:4px;padding:0;list-style-type:none;display:none;position:fixed;width:100%;-webkit-box-shadow:var(--og-combobox__flyout-BoxShadow);box-shadow:var(--og-combobox__flyout-BoxShadow);background:var(--og-combobox__flyout-Background);z-index:9999;overflow-y:auto}.og-combobox__flyout__list--visible{display:block}.og-combobox__flyout__list__item{line-height:1.5em;display:block;cursor:pointer;padding:1em 2em;-webkit-transition:background .2s ease;transition:background .2s ease;color:var(--og-combobox__flyout__item-Color);background:var(--og-combobox__flyout__item-Background)}.og-combobox__flyout__list__item:hover{--og-combobox__flyout__item-Background:var(--og-combobox__flyout__item-Background--hover)}.og-combobox__flyout__list__item--active,.og-combobox__flyout__list__item--active:hover{--og-combobox__flyout__item-Background:var(--og-combobox__flyout__item-Background--active)}"; }
}

exports.og_combobox = OgCombobox;
