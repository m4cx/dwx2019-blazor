/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/
import { h } from '@stencil/core';
import moment from 'moment';
import { CalendarUtils } from './utils/utils';
import { loadMomentLocale, getDefaultLocale } from '../../utils/moment-locale-loader';
export class OgInternalCalendar {
    constructor() {
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth();
        this.loc = getDefaultLocale();
        this.showCalendarWeek = true;
    }
    async componentWillLoad() {
        await loadMomentLocale(this.loc, moment);
        this.internalMoment = moment();
    }
    getFirstDayOfWeek() {
        return this.internalMoment.startOf('week').day();
    }
    getDayArray() {
        return [0, 1, 2, 3, 4, 5, 6].map(d => {
            return (d + this.getFirstDayOfWeek()) % 7;
        });
    }
    getClasses(m) {
        let result = 'day';
        if (m.isSame(new Date(), "day")) {
            result += ' day--today';
        }
        if (m.year() === this.year && m.month() === this.month) {
            result += ' day--same-month';
            if (this.selection && this.selection.find(s => CalendarUtils.compareCalendarDate2Moment(s, m))) {
                result += ' day--selected';
            }
            if (this.dateDecorator) {
                const dd = this.dateDecorator.getDateDecoration(m.clone());
                if (dd.class) {
                    result += ` ${dd.class}`;
                }
            }
        }
        else {
            result += ' day--disabled';
        }
        return result;
    }
    setUpInternalMoment() {
        this.internalMoment.locale(this.loc);
        this.internalMoment.year(this.year);
        this.internalMoment.month(this.month);
        this.internalMoment.date(1);
        const firstDayOfWeek = this.getFirstDayOfWeek();
        if (this.internalMoment.day() < firstDayOfWeek) {
            this.internalMoment.day(firstDayOfWeek - 7);
        }
        else {
            this.internalMoment.day(firstDayOfWeek);
        }
    }
    render() {
        this.setUpInternalMoment();
        return [
            h("table", null,
                h("thead", null,
                    h("tr", null,
                        this.showCalendarWeek && h("th", null),
                        this.getDayArray().map(d => {
                            return h("th", null, this.internalMoment.day(d).format('dd'));
                        }))),
                h("tbody", null, [0, 1, 2, 3, 4, 5].map(() => {
                    return (h("tr", null,
                        this.showCalendarWeek && h("td", { class: "week" }, this.internalMoment.week()),
                        [0, 1, 2, 3, 4, 5, 6].map(() => {
                            const localM = this.internalMoment.clone();
                            this.internalMoment.add(1, 'd');
                            return h("td", { class: this.getClasses(localM), onClick: () => this.dateClicked.emit(localM) }, localM.date());
                        })));
                })))
        ];
    }
    static get is() { return "og-internal-calendar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-internal-calendar.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-internal-calendar.css"]
    }; }
    static get properties() { return {
        "year": {
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
            "attribute": "year",
            "reflect": false,
            "defaultValue": "new Date().getFullYear()"
        },
        "month": {
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
            "attribute": "month",
            "reflect": false,
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
        "dateDecorator": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "OgDateDecorator",
                "resolved": "OgDateDecorator",
                "references": {
                    "OgDateDecorator": {
                        "location": "import",
                        "path": "./interfaces/og-calendar-date-decorator"
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
        "selection": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "OgCalendarDate[]",
                "resolved": "OgCalendarDate[]",
                "references": {
                    "OgCalendarDate": {
                        "location": "import",
                        "path": "./interfaces/og-calendar-date-decorator"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
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
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
