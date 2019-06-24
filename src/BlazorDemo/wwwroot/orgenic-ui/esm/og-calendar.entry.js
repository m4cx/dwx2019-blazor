import { r as registerInstance, c as createEvent, d as getContext, h } from './orgenic-ui-5001260f.js';
import { g as getDefaultLocale, l as loadMomentLocale, m as moment, C as CalendarUtils } from './chunk-38451b79.js';

class OgCalendar {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth();
        this.loc = getDefaultLocale();
        this.showCalendarWeek = true;
        this.displayedMonths = 1;
        this.selectionType = 'single';
        this.selection = [];
        this.dateClicked = createEvent(this, "dateClicked", 7);
        this.selectionChanged = createEvent(this, "selectionChanged", 7);
        this.resourcesUrl = getContext(this, "resourcesUrl");
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
            result.push(h("div", { class: "calendar__container" }, h("div", { class: "calendar__header" }, h("div", { class: "calender__header__prefix" }, h("span", { class: 'calendar__nav' + (i > 0 ? ' calendar__nav--hidden' : ''), onClick: () => this.decreaseMonth() }, h("svg", { class: 'calendar__nav__icon', version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 14 24", preserveAspectRatio: "none" }, h("polyline", { class: "og-", points: "12,2 2,12 12,24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecaps": "round", "stroke-linejoin": "round" })))), h("div", { class: "calender__header__main" }, h("span", { class: "calender__header__month" }, localM.format('MMM')), h("span", { class: "calender__header__year" }, localM.year())), h("div", { class: "calender__header__suffix" }, h("div", { class: 'calendar__nav' + (i < this.displayedMonths - 1 ? ' calendar__nav--hidden' : ''), onClick: () => this.increaseMonth() }, h("svg", { class: 'calendar__nav__icon', version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 14 24", preserveAspectRatio: "none" }, h("polyline", { class: "og-", points: "2,2 12,12 2,24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecaps": "round", "stroke-linejoin": "round" }))))), h("og-internal-calendar", { class: "calendar__main", month: localM.month(), year: localM.year(), loc: this.loc, showCalendarWeek: this.showCalendarWeek, dateDecorator: this.dateDecorator, selection: this.selection, onDateClicked: (e) => this.handleDateClick(e) })));
            localM.add(1, 'M');
        }
        return result;
    }
    static get style() { return ":host{--og-calendar__header-BorderWidth:1px;--og-calendar__header-BorderStyle:solid;--og-calendar__header-BorderColor:var(--OG-COLOR-SHADE--100--20,rgba(57,83,96,0.2));--og-calendar__header-Border:var(--og-calendar__header-BorderWidth) var(--og-calendar__header-BorderStyle) var(--og-calendar__header-BorderColor);width:auto}.calendar__container,:host{display:inline-block}.calendar__container+.calendar__container{margin-left:32px}.calendar__header{display:-ms-flexbox;display:flex;text-align:center;border-bottom:var(--og-calendar__header-Border)}.calender__header__main{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.calender__header__prefix,.calender__header__suffix{padding:4px 8px;min-width:24px}.calendar__main{display:block;padding-top:8px}.calendar__nav{width:24px;height:24px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;cursor:pointer}.calendar__nav--hidden{display:none}.calendar__nav__icon{width:8px}.calender__header__month{font-size:14px;text-transform:uppercase;font-weight:500}.calender__header__month,.calender__header__year{display:inline-block;padding:4px}"; }
}

export { OgCalendar as og_calendar };
