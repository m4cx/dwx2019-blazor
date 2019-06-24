'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./orgenic-ui-ae2bfbb5.js');
const __chunk_3 = require('./chunk-5c49972f.js');

class OgInternalCalendar {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth();
        this.loc = __chunk_3.getDefaultLocale();
        this.showCalendarWeek = true;
        this.dateClicked = __chunk_1.createEvent(this, "dateClicked", 7);
        this.resourcesUrl = __chunk_1.getContext(this, "resourcesUrl");
    }
    async componentWillLoad() {
        await __chunk_3.loadMomentLocale(this.loc, __chunk_3.moment);
        this.internalMoment = __chunk_3.moment();
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
            if (this.selection && this.selection.find(s => __chunk_3.CalendarUtils.compareCalendarDate2Moment(s, m))) {
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
            __chunk_1.h("table", null, __chunk_1.h("thead", null, __chunk_1.h("tr", null, this.showCalendarWeek && __chunk_1.h("th", null), this.getDayArray().map(d => {
                return __chunk_1.h("th", null, this.internalMoment.day(d).format('dd'));
            }))), __chunk_1.h("tbody", null, [0, 1, 2, 3, 4, 5].map(() => {
                return (__chunk_1.h("tr", null, this.showCalendarWeek && __chunk_1.h("td", { class: "week" }, this.internalMoment.week()), [0, 1, 2, 3, 4, 5, 6].map(() => {
                    const localM = this.internalMoment.clone();
                    this.internalMoment.add(1, 'd');
                    return __chunk_1.h("td", { class: this.getClasses(localM), onClick: () => this.dateClicked.emit(localM) }, localM.date());
                })));
            })))
        ];
    }
    static get style() { return ":host{--og-calendar__day-Background:none;--og-calendar__day-Background--hover:var(--OG-COLOR-PRIMARY--100--15,rgba(29,162,211,0.15));--og-calendar__day-Background--active:var(--OG-COLOR-PRIMARY--100,#1da2d3);--og-calendar__day-Background--disabled:none;--og-calendar__day-Color:inherit;--og-calendar__day-Color--hover:var(--OG-COLOR-PRIMARY--100--15,rgba(29,162,211,0.15));--og-calendar__day-Color--active:var(--OG-COLOR-SHADE--0,#fff);--og-calendar__day-Color--disabled:var(--OG-COLOR-SHADE--100--50,rgba(57,83,96,0.5));--og-calendar__day__indicator-Background:var(--OG-COLOR-PRIMARY--40,#8ad4ef)}table{border-spacing:2px}td{line-height:1}th{text-transform:uppercase}.day,th{text-align:center}.day{background:var(--og-calendar__day-Background);color:var(--og-calendar__day-Color);border-radius:3px;position:relative;cursor:pointer;padding:6px}.day:after{position:absolute;display:block;content:\"\";height:2px;top:auto;right:4px;bottom:2px;left:4px}.day:not(.day--disabled):not(.day--selected):hover{--og-calendar__day-Background:var(--og-calendar__day-Background--hover,none)}.day--selected{--og-calendar__day-Background:var(--og-calendar__day-Background--active,none);--og-calendar__day-Color:var(--og-calendar__day-Color--active)}.week{padding-right:8px;text-align:right;border-right:1px solid var(--OG-COLOR-SHADE--100--20)}.day--disabled{--og-calendar__day-Color:var(--og-calendar__day-Color--disabled);--og-calendar__day-Background:var(--og-calendar__day-Background--disabled);cursor:default}.day--today{font-weight:700}.day--highlight:after{background:var(--og-calendar__day__indicator-Background)}"; }
}

exports.og_internal_calendar = OgInternalCalendar;
