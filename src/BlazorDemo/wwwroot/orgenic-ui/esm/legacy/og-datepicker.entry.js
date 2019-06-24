var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, d as getContext, h, H as Host, g as getElement } from './orgenic-ui-5001260f.js';
import { g as getDefaultLocale, m as moment, C as CalendarUtils, l as loadMomentLocale } from './chunk-38451b79.js';
var OgDatepicker = /** @class */ (function () {
    function OgDatepicker(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Locale for this datepicker (country code in ISO 3166 format)
         */
        this.loc = getDefaultLocale();
        /**
         * Defines the date string format. The value will be parsed and emitted using this format.
         */
        this.format = 'DD.MM.YYYY';
        this.dropdownActive = false;
        this.dateSelected = createEvent(this, "dateSelected", 7);
        this.focusGained = createEvent(this, "focusGained", 7);
        this.focusLost = createEvent(this, "focusLost", 7);
        this.resourcesUrl = getContext(this, "resourcesUrl");
    }
    OgDatepicker.prototype.setValue = function (newValue) {
        if (typeof newValue === 'string') {
            moment.locale(this.loc);
            var lmoment = moment(newValue, this.format);
            this.internalValue = CalendarUtils.moment2CalendarDate(lmoment);
        }
    };
    OgDatepicker.prototype.setFormat = function () {
        this.setValue(this.value);
    };
    OgDatepicker.prototype.handleWindowScroll = function (_ev) {
        // close flyout on scroll events
        this.dropdownActive = false;
        this.focusLost.emit();
    };
    OgDatepicker.prototype.handleBodyScroll = function (_ev) {
        // close flyout on scroll events
        this.dropdownActive = false;
        this.focusLost.emit();
    };
    OgDatepicker.prototype.handleBodyClick = function (ev) {
        if (!this.dropdownActive || this.el === ev.target) {
            return;
        }
        if (this.dropdownActive) {
            this.dropdownActive = false;
            ev.cancelBubble = true;
            this.focusLost.emit();
        }
    };
    OgDatepicker.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loadMomentLocale(this.loc, moment)];
                    case 1:
                        _a.sent();
                        this.setValue(this.value);
                        return [2 /*return*/];
                }
            });
        });
    };
    OgDatepicker.prototype.componentDidLoad = function () {
        this.setValue(this.value);
    };
    OgDatepicker.prototype.buttonClicked = function () {
        if (!this.disabled) {
            this.dropdownActive = !this.dropdownActive;
            if (this.dropdownActive) {
                this.focusGained.emit();
            }
            else {
                this.focusLost.emit();
            }
        }
    };
    OgDatepicker.prototype.handleDateClicked = function (event) {
        event.cancelBubble = true;
        if (!this.disabled) {
            var date = event.detail;
            this.dropdownActive = false;
            this.internalValue = date;
            this.value = CalendarUtils.calendarDate2Moment(date, this.loc).format(this.format);
            this.dateSelected.emit(CalendarUtils.calendarDate2Moment(date, this.loc).toDate());
            this.focusLost.emit();
        }
    };
    OgDatepicker.prototype.isDropdownActive = function () {
        return this.dropdownActive && !this.disabled;
    };
    /**
     * behaviour:
     *   * combobox flyout shows 7 items
     *   * if it does not fit on screen, scale down flyout
     *   * if flyout would be smaller than 4 items, show flyout above combobox
     */
    OgDatepicker.prototype.getFlyoutCss = function () {
        if (!this.indicatorElement) {
            return {};
        }
        var flyoutTop = (this.indicatorElement.getBoundingClientRect().top + this.indicatorElement.offsetHeight);
        this.flyoutCalendar.style.display = 'block';
        var flyoutHeight = this.flyoutCalendar.getBoundingClientRect().height;
        this.flyoutCalendar.style.display = '';
        if (flyoutTop + flyoutHeight > window.innerHeight) {
            flyoutTop = this.el.getBoundingClientRect().top - flyoutHeight;
        }
        return {
            top: Math.max(0, flyoutTop) + 'px',
        };
    };
    OgDatepicker.prototype.render = function () {
        var _this = this;
        return (h(Host, { class: { 'og-form-item__editor': true, 'is-focused': this.dropdownActive } }, h("div", { class: "og-datepicker__header", onClick: function () { return _this.buttonClicked(); } }, h("input", { type: "text", class: "og-datepicker__input", readonly: "true", value: !this.internalValue ? '' : CalendarUtils.calendarDate2Moment(this.internalValue, this.loc).format(this.format), placeholder: this.placeholder, disabled: this.disabled }), h("div", { class: "og-datepicker__button" }, h("svg", { class: 'og-datepicker__button__arrow' +
                (this.isDropdownActive() ? ' og-datepicker__button__arrow--collapsed' : ''), version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 12", preserveAspectRatio: "none" }, h("polyline", { class: "og-datepicker__button__arrow__line", points: "0,0 12,12 24,0", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecaps": "round", "stroke-linejoin": "round" }))), h("div", { class: "og-datepicker__indicator", ref: function (el) { return _this.indicatorElement = el; } })), h("div", { class: "og-datepicker__flyout" }, h("og-calendar", { class: 'og-datepicker__flyout__calendar' +
                (this.isDropdownActive() ? ' og-datepicker__flyout__calendar--visible' : ''), style: this.getFlyoutCss(), ref: function (el) { return _this.flyoutCalendar = el; }, year: !this.internalValue ? undefined : this.internalValue.year, month: !this.internalValue ? undefined : this.internalValue.month, loc: this.loc, dateDecorator: this.dateDecorator, selection: !this.internalValue ? [] : [this.internalValue], selectionType: "single", onDateClicked: function (e) { return _this.handleDateClicked(e); } }))));
    };
    Object.defineProperty(OgDatepicker.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OgDatepicker, "watchers", {
        get: function () {
            return {
                "value": ["setValue"],
                "format": ["setFormat"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OgDatepicker, "style", {
        get: function () { return ":host{--og-datepicker-Background:var(--OG-COLOR-SHADE--80--05,rgba(62,129,163,0.05));--og-datepicker-BorderColor:var(--OG-COLOR-SHADE--100--20,rgba(57,83,96,0.2));--og-datepicker-BorderWidth:1px;--og-datepicker-BorderStyle:solid;--og-datepicker-Color:var(--OG-COLOR-SHADE--100,#395360);--og-datepicker-FontSize:inherit;--og-datepicker-Outline:none;--og-datepicker-Opacity:1;--og-datepicker__flyout-BoxShadow:0 0 8px rgba(0,0,0,0.05),0 2px 4px rgba(0,0,0,0.2);--og-datepicker__flyout-Background:var(--OG-COLOR-PRIMARY--0,#fff);--og-datepicker__flyout__item-Background:transparent;--og-datepicker__flyout__item-Background--hover:var(--OG-COLOR-PRIMARY--100--15,rgba(29,162,211,0.15));--og-datepicker__flyout__item-Background--active:var(--OG-COLOR-PRIMARY--100--30,rgba(29,162,211,0.3));--og-datepicker__flyout__item-Color:var(--OG-COLOR-SHADE--100,#395360);--og-datepicker__placeholder-Color:var(--OG-COLOR-SHADE--50,#8fadbc);--og-datepicker__indicator-Width:0;--og-datepicker__indicator-Height:2px;--og-datepicker__indicator-Background:var(--OG-COLOR-PRIMARY--100,#1da2d3);--og-datepicker__button__arrow-Width:16px;--og-datepicker__button__arrow-Height:16px;--og-datepicker__button__arrow-Padding:22px 2px 0 2px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:auto;max-width:inherit;max-height:inherit;cursor:pointer;background:var(--og-datepicker-Background);opacity:var(--og-datepicker-Opacity);-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}:host(.is-focused){--og-datepicker__button__indicator-Width:100%;--og-datepicker__indicator-Width:100%}:host([disabled]){cursor:default;--og-datepicker-Opacity:.3}.og-datepicker__header{display:-ms-flexbox;display:flex;position:relative;margin:4px;outline:var(--og-datepicker-Outline);border-bottom:var(--og-datepicker-BorderWidth) var(--og-datepicker-BorderStyle) var(--og-datepicker-BorderColor)}.og-datepicker__input{-ms-flex:1;flex:1;background:transparent;border:none;cursor:inherit;outline:none;color:var(--og-datepicker-Color);font-size:var(--og-datepicker-FontSize);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0;padding-top:25px;padding-bottom:4px}.og-datepicker__input::-webkit-input-placeholder{color:var(--og-datepicker__placeholder-Color)}.og-datepicker__input::-moz-placeholder{color:var(--og-datepicker__placeholder-Color)}.og-datepicker__input:-ms-input-placeholder{color:var(--og-datepicker__placeholder-Color)}.og-datepicker__input::-ms-input-placeholder{color:var(--og-datepicker__placeholder-Color)}.og-datepicker__input::placeholder{color:var(--og-datepicker__placeholder-Color)}.og-datepicker__input::-moz-selection{background:transparent}.og-datepicker__input::selection{background:transparent}.og-datepicker__button{-ms-flex:none;flex:none;width:var(--og-datepicker__button__arrow-Width);height:var(--og-datepicker__button__arrow-Width);padding:var(--og-datepicker__button__arrow-Padding)}.og-datepicker__indicator{display:var(--og-datepicker__indicator-Display);position:absolute;bottom:calc(var(--og-datepicker-BorderWidth) * -1);left:0;height:var(--og-datepicker__indicator-Height);background:var(--og-datepicker__indicator-Background);width:var(--og-datepicker__indicator-Width);-webkit-transition:width .2s ease;transition:width .2s ease}.og-datepicker__button__arrow{-webkit-transition:-webkit-transform .1s;transition:-webkit-transform .1s;transition:transform .1s;transition:transform .1s,-webkit-transform .1s;overflow:visible}.og-datepicker__button__arrow--collapsed{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.og-datepicker__button__arrow__line{stroke-linecap:round;stroke-linejoin:round}.og-datepicker__flyout{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;cursor:default}.og-datepicker__flyout__calendar{margin:0;margin-top:4px;padding:16px;display:none;position:fixed;-webkit-box-shadow:var(--og-datepicker__flyout-BoxShadow);box-shadow:var(--og-datepicker__flyout-BoxShadow);background:var(--og-datepicker__flyout-Background);z-index:9999;overflow-y:auto}.og-datepicker__flyout__calendar--visible{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return OgDatepicker;
}());
export { OgDatepicker as og_datepicker };
