/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/
import { h } from '@stencil/core';
import moment from 'moment';
import { CalendarUtils } from '../og-internal-calendar/utils/utils';
import { loadMomentLocale, getDefaultLocale } from '../../utils/moment-locale-loader';
export class OgCalendar {
    constructor() {
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth();
        this.loc = getDefaultLocale();
        this.showCalendarWeek = true;
        this.displayedMonths = 1;
        this.selectionType = 'single';
        this.selection = [];
    }
    async componentWillLoad() {
        await loadMomentLocale(this.loc, moment);
        this.internalMoment = moment();
    }
    handleDateClick(event) {
        event.cancelBubble = true;
        const date = CalendarUtils.moment2CalendarDate(event.detail);
        if (this.selectionType !== 'none') {
            if (this.selectionType === 'single' || !this.selection) {
                this.selection = [date];
            }
            else {
                // multi
                // todo: implement selection types: range + multi-range
                const index = this.selection.findIndex(s => CalendarUtils.compareCalendarDate(s, date));
                if (index >= 0) {
                    this.selection.splice(index, 1);
                }
                else {
                    this.selection.push(date);
                }
                this.selection = [...this.selection];
            }
        }
        this.dateClicked.emit(date);
        this.selectionChanged.emit(this.selection);
    }
    increaseMonth() {
        this.internalMoment.add(1, 'M');
        this.month = this.internalMoment.month();
        this.year = this.internalMoment.year();
    }
    decreaseMonth() {
        this.internalMoment.subtract(1, 'M');
        this.month = this.internalMoment.month();
        this.year = this.internalMoment.year();
    }
    render() {
        this.internalMoment.locale(this.loc);
        this.internalMoment.year(this.year);
        this.internalMoment.month(this.month);
        const localM = this.internalMoment.clone();
        const result = [];
        for (let i = 0; i < this.displayedMonths; i++) {
            result.push(h("div", { class: "calendar__container" },
                h("div", { class: "calendar__header" },
                    h("div", { class: "calender__header__prefix" },
                        h("span", { class: 'calendar__nav' + (i > 0 ? ' calendar__nav--hidden' : ''), onClick: () => this.decreaseMonth() },
                            h("svg", { class: 'calendar__nav__icon', version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 14 24", preserveAspectRatio: "none" },
                                h("polyline", { class: "og-", points: "12,2 2,12 12,24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecaps": "round", "stroke-linejoin": "round" })))),
                    h("div", { class: "calender__header__main" },
                        h("span", { class: "calender__header__month" }, localM.format('MMM')),
                        h("span", { class: "calender__header__year" }, localM.year())),
                    h("div", { class: "calender__header__suffix" },
                        h("div", { class: 'calendar__nav' + (i < this.displayedMonths - 1 ? ' calendar__nav--hidden' : ''), onClick: () => this.increaseMonth() },
                            h("svg", { class: 'calendar__nav__icon', version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 14 24", preserveAspectRatio: "none" },
                                h("polyline", { class: "og-", points: "2,2 12,12 2,24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecaps": "round", "stroke-linejoin": "round" }))))),
                h("og-internal-calendar", { class: "calendar__main", month: localM.month(), year: localM.year(), loc: this.loc, showCalendarWeek: this.showCalendarWeek, dateDecorator: this.dateDecorator, selection: this.selection, onDateClicked: (e) => this.handleDateClick(e) })));
            localM.add(1, 'M');
        }
        return result;
    }
    static get is() { return "og-calendar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-calendar.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-calendar.css"]
    }; }
    static get properties() { return {
        "year": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "year",
            "reflect": true,
            "defaultValue": "new Date().getFullYear()"
        },
        "month": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "month",
            "reflect": true,
            "defaultValue": "new Date().getMonth()"
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
                "text": ""
            },
            "attribute": "loc",
            "reflect": false,
            "defaultValue": "getDefaultLocale()"
        },
        "showCalendarWeek": {
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
                "text": ""
            },
            "attribute": "show-calendar-week",
            "reflect": false,
            "defaultValue": "true"
        },
        "displayedMonths": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "displayed-months",
            "reflect": false,
            "defaultValue": "1"
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
                "text": ""
            }
        },
        "selectionType": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "OgCalendarSelectionType",
                "resolved": "\"none\" | \"single\"",
                "references": {
                    "OgCalendarSelectionType": {
                        "location": "import",
                        "path": "../og-internal-calendar/interfaces/og-calendar-date-decorator"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "selection-type",
            "reflect": false,
            "defaultValue": "'single'"
        },
        "selection": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "OgCalendarDate[]",
                "resolved": "OgCalendarDate[]",
                "references": {
                    "OgCalendarDate": {
                        "location": "import",
                        "path": "../og-internal-calendar/interfaces/og-calendar-date-decorator"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "[]"
        }
    }; }
    static get contextProps() { return [{
            "name": "resourcesUrl",
            "context": "resourcesUrl"
        }]; }
    static get events() { return [{
            "method": "dateClicked",
            "name": "dateClicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "OgCalendarDate",
                "resolved": "OgCalendarDate",
                "references": {
                    "OgCalendarDate": {
                        "location": "import",
                        "path": "../og-internal-calendar/interfaces/og-calendar-date-decorator"
                    }
                }
            }
        }, {
            "method": "selectionChanged",
            "name": "selectionChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "OgCalendarDate[]",
                "resolved": "OgCalendarDate[]",
                "references": {
                    "OgCalendarDate": {
                        "location": "import",
                        "path": "../og-internal-calendar/interfaces/og-calendar-date-decorator"
                    }
                }
            }
        }]; }
}
