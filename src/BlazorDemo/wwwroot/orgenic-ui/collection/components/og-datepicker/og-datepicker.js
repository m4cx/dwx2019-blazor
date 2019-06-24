/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/
import { h, Host } from '@stencil/core';
import { CalendarUtils } from '../og-internal-calendar/utils/utils';
import moment from 'moment';
import { loadMomentLocale, getDefaultLocale } from '../../utils/moment-locale-loader';
export class OgDatepicker {
    constructor() {
        /**
         * Locale for this datepicker (country code in ISO 3166 format)
         */
        this.loc = getDefaultLocale();
        /**
         * Defines the date string format. The value will be parsed and emitted using this format.
         */
        this.format = 'DD.MM.YYYY';
        this.dropdownActive = false;
    }
    setValue(newValue) {
        if (typeof newValue === 'string') {
            moment.locale(this.loc);
            const lmoment = moment(newValue, this.format);
            this.internalValue = CalendarUtils.moment2CalendarDate(lmoment);
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
        await loadMomentLocale(this.loc, moment);
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
            this.value = CalendarUtils.calendarDate2Moment(date, this.loc).format(this.format);
            this.dateSelected.emit(CalendarUtils.calendarDate2Moment(date, this.loc).toDate());
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
        return (h(Host, { class: { 'og-form-item__editor': true, 'is-focused': this.dropdownActive } },
            h("div", { class: "og-datepicker__header", onClick: () => this.buttonClicked() },
                h("input", { type: "text", class: "og-datepicker__input", readonly: "true", value: !this.internalValue ? '' : CalendarUtils.calendarDate2Moment(this.internalValue, this.loc).format(this.format), placeholder: this.placeholder, disabled: this.disabled }),
                h("div", { class: "og-datepicker__button" },
                    h("svg", { class: 'og-datepicker__button__arrow' +
                            (this.isDropdownActive() ? ' og-datepicker__button__arrow--collapsed' : ''), version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 12", preserveAspectRatio: "none" },
                        h("polyline", { class: "og-datepicker__button__arrow__line", points: "0,0 12,12 24,0", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecaps": "round", "stroke-linejoin": "round" }))),
                h("div", { class: "og-datepicker__indicator", ref: (el) => this.indicatorElement = el })),
            h("div", { class: "og-datepicker__flyout" },
                h("og-calendar", { class: 'og-datepicker__flyout__calendar' +
                        (this.isDropdownActive() ? ' og-datepicker__flyout__calendar--visible' : ''), style: this.getFlyoutCss(), ref: (el) => this.flyoutCalendar = el, year: !this.internalValue ? undefined : this.internalValue.year, month: !this.internalValue ? undefined : this.internalValue.month, loc: this.loc, dateDecorator: this.dateDecorator, selection: !this.internalValue ? [] : [this.internalValue], selectionType: "single", onDateClicked: (e) => this.handleDateClicked(e) }))));
    }
    static get is() { return "og-datepicker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-datepicker.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-datepicker.css"]
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
        "loc": {
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
                "text": "Locale for this datepicker (country code in ISO 3166 format)"
            },
            "attribute": "loc",
            "reflect": false,
            "defaultValue": "getDefaultLocale()"
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
        "format": {
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
                "text": "Defines the date string format. The value will be parsed and emitted using this format."
            },
            "attribute": "format",
            "reflect": false,
            "defaultValue": "'DD.MM.YYYY'"
        },
        "dateDecorator": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "OgDateDecorator",
                "resolved": "OgDateDecorator",
                "references": {
                    "OgDateDecorator": {
                        "location": "import",
                        "path": "../og-internal-calendar/interfaces/og-calendar-date-decorator"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The date decorator can be used to highlight special dates like public holidays or meetings."
            }
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
    static get contextProps() { return [{
            "name": "resourcesUrl",
            "context": "resourcesUrl"
        }]; }
    static get states() { return {
        "dropdownActive": {},
        "internalValue": {}
    }; }
    static get events() { return [{
            "method": "dateSelected",
            "name": "dateSelected",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Event is being emitted when selected date changes."
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
    static get watchers() { return [{
            "propName": "value",
            "methodName": "setValue"
        }, {
            "propName": "format",
            "methodName": "setFormat"
        }]; }
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
