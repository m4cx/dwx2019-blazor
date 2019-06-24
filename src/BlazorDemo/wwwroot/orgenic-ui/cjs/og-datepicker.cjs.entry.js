'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./orgenic-ui-ae2bfbb5.js');
const __chunk_3 = require('./chunk-5c49972f.js');

class OgDatepicker {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        /**
         * Locale for this datepicker (country code in ISO 3166 format)
         */
        this.loc = __chunk_3.getDefaultLocale();
        /**
         * Defines the date string format. The value will be parsed and emitted using this format.
         */
        this.format = 'DD.MM.YYYY';
        this.dropdownActive = false;
        this.dateSelected = __chunk_1.createEvent(this, "dateSelected", 7);
        this.focusGained = __chunk_1.createEvent(this, "focusGained", 7);
        this.focusLost = __chunk_1.createEvent(this, "focusLost", 7);
        this.resourcesUrl = __chunk_1.getContext(this, "resourcesUrl");
    }
    setValue(newValue) {
        if (typeof newValue === 'string') {
            __chunk_3.moment.locale(this.loc);
            const lmoment = __chunk_3.moment(newValue, this.format);
            this.internalValue = __chunk_3.CalendarUtils.moment2CalendarDate(lmoment);
        }
    }
    setFormat() {
        this.setValue(this.value);
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
    async componentWillLoad() {
        await __chunk_3.loadMomentLocale(this.loc, __chunk_3.moment);
        this.setValue(this.value);
    }
    componentDidLoad() {
        this.setValue(this.value);
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
    handleDateClicked(event) {
        event.cancelBubble = true;
        if (!this.disabled) {
            const date = event.detail;
            this.dropdownActive = false;
            this.internalValue = date;
            this.value = __chunk_3.CalendarUtils.calendarDate2Moment(date, this.loc).format(this.format);
            this.dateSelected.emit(__chunk_3.CalendarUtils.calendarDate2Moment(date, this.loc).toDate());
            this.focusLost.emit();
        }
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
        this.flyoutCalendar.style.display = 'block';
        let flyoutHeight = this.flyoutCalendar.getBoundingClientRect().height;
        this.flyoutCalendar.style.display = '';
        if (flyoutTop + flyoutHeight > window.innerHeight) {
            flyoutTop = this.el.getBoundingClientRect().top - flyoutHeight;
        }
        return {
            top: Math.max(0, flyoutTop) + 'px',
        };
    }
    render() {
        return (__chunk_1.h(__chunk_1.Host, { class: { 'og-form-item__editor': true, 'is-focused': this.dropdownActive } }, __chunk_1.h("div", { class: "og-datepicker__header", onClick: () => this.buttonClicked() }, __chunk_1.h("input", { type: "text", class: "og-datepicker__input", readonly: "true", value: !this.internalValue ? '' : __chunk_3.CalendarUtils.calendarDate2Moment(this.internalValue, this.loc).format(this.format), placeholder: this.placeholder, disabled: this.disabled }), __chunk_1.h("div", { class: "og-datepicker__button" }, __chunk_1.h("svg", { class: 'og-datepicker__button__arrow' +
                (this.isDropdownActive() ? ' og-datepicker__button__arrow--collapsed' : ''), version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 12", preserveAspectRatio: "none" }, __chunk_1.h("polyline", { class: "og-datepicker__button__arrow__line", points: "0,0 12,12 24,0", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecaps": "round", "stroke-linejoin": "round" }))), __chunk_1.h("div", { class: "og-datepicker__indicator", ref: (el) => this.indicatorElement = el })), __chunk_1.h("div", { class: "og-datepicker__flyout" }, __chunk_1.h("og-calendar", { class: 'og-datepicker__flyout__calendar' +
                (this.isDropdownActive() ? ' og-datepicker__flyout__calendar--visible' : ''), style: this.getFlyoutCss(), ref: (el) => this.flyoutCalendar = el, year: !this.internalValue ? undefined : this.internalValue.year, month: !this.internalValue ? undefined : this.internalValue.month, loc: this.loc, dateDecorator: this.dateDecorator, selection: !this.internalValue ? [] : [this.internalValue], selectionType: "single", onDateClicked: (e) => this.handleDateClicked(e) }))));
    }
    get el() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "value": ["setValue"],
        "format": ["setFormat"]
    }; }
    static get style() { return ":host{--og-datepicker-Background:var(--OG-COLOR-SHADE--80--05,rgba(62,129,163,0.05));--og-datepicker-BorderColor:var(--OG-COLOR-SHADE--100--20,rgba(57,83,96,0.2));--og-datepicker-BorderWidth:1px;--og-datepicker-BorderStyle:solid;--og-datepicker-Color:var(--OG-COLOR-SHADE--100,#395360);--og-datepicker-FontSize:inherit;--og-datepicker-Outline:none;--og-datepicker-Opacity:1;--og-datepicker__flyout-BoxShadow:0 0 8px rgba(0,0,0,0.05),0 2px 4px rgba(0,0,0,0.2);--og-datepicker__flyout-Background:var(--OG-COLOR-PRIMARY--0,#fff);--og-datepicker__flyout__item-Background:transparent;--og-datepicker__flyout__item-Background--hover:var(--OG-COLOR-PRIMARY--100--15,rgba(29,162,211,0.15));--og-datepicker__flyout__item-Background--active:var(--OG-COLOR-PRIMARY--100--30,rgba(29,162,211,0.3));--og-datepicker__flyout__item-Color:var(--OG-COLOR-SHADE--100,#395360);--og-datepicker__placeholder-Color:var(--OG-COLOR-SHADE--50,#8fadbc);--og-datepicker__indicator-Width:0;--og-datepicker__indicator-Height:2px;--og-datepicker__indicator-Background:var(--OG-COLOR-PRIMARY--100,#1da2d3);--og-datepicker__button__arrow-Width:16px;--og-datepicker__button__arrow-Height:16px;--og-datepicker__button__arrow-Padding:22px 2px 0 2px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:auto;max-width:inherit;max-height:inherit;cursor:pointer;background:var(--og-datepicker-Background);opacity:var(--og-datepicker-Opacity);-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}:host(.is-focused){--og-datepicker__button__indicator-Width:100%;--og-datepicker__indicator-Width:100%}:host([disabled]){cursor:default;--og-datepicker-Opacity:.3}.og-datepicker__header{display:-ms-flexbox;display:flex;position:relative;margin:4px;outline:var(--og-datepicker-Outline);border-bottom:var(--og-datepicker-BorderWidth) var(--og-datepicker-BorderStyle) var(--og-datepicker-BorderColor)}.og-datepicker__input{-ms-flex:1;flex:1;background:transparent;border:none;cursor:inherit;outline:none;color:var(--og-datepicker-Color);font-size:var(--og-datepicker-FontSize);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0;padding-top:25px;padding-bottom:4px}.og-datepicker__input::-webkit-input-placeholder{color:var(--og-datepicker__placeholder-Color)}.og-datepicker__input::-moz-placeholder{color:var(--og-datepicker__placeholder-Color)}.og-datepicker__input:-ms-input-placeholder{color:var(--og-datepicker__placeholder-Color)}.og-datepicker__input::-ms-input-placeholder{color:var(--og-datepicker__placeholder-Color)}.og-datepicker__input::placeholder{color:var(--og-datepicker__placeholder-Color)}.og-datepicker__input::-moz-selection{background:transparent}.og-datepicker__input::selection{background:transparent}.og-datepicker__button{-ms-flex:none;flex:none;width:var(--og-datepicker__button__arrow-Width);height:var(--og-datepicker__button__arrow-Width);padding:var(--og-datepicker__button__arrow-Padding)}.og-datepicker__indicator{display:var(--og-datepicker__indicator-Display);position:absolute;bottom:calc(var(--og-datepicker-BorderWidth) * -1);left:0;height:var(--og-datepicker__indicator-Height);background:var(--og-datepicker__indicator-Background);width:var(--og-datepicker__indicator-Width);-webkit-transition:width .2s ease;transition:width .2s ease}.og-datepicker__button__arrow{-webkit-transition:-webkit-transform .1s;transition:-webkit-transform .1s;transition:transform .1s;transition:transform .1s,-webkit-transform .1s;overflow:visible}.og-datepicker__button__arrow--collapsed{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.og-datepicker__button__arrow__line{stroke-linecap:round;stroke-linejoin:round}.og-datepicker__flyout{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;cursor:default}.og-datepicker__flyout__calendar{margin:0;margin-top:4px;padding:16px;display:none;position:fixed;-webkit-box-shadow:var(--og-datepicker__flyout-BoxShadow);box-shadow:var(--og-datepicker__flyout-BoxShadow);background:var(--og-datepicker__flyout-Background);z-index:9999;overflow-y:auto}.og-datepicker__flyout__calendar--visible{display:block}"; }
}

exports.og_datepicker = OgDatepicker;
