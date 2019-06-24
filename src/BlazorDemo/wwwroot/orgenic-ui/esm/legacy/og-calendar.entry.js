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
import { r as registerInstance, c as createEvent, d as getContext, h } from './orgenic-ui-5001260f.js';
import { g as getDefaultLocale, l as loadMomentLocale, m as moment, C as CalendarUtils } from './chunk-38451b79.js';
var OgCalendar = /** @class */ (function () {
    function OgCalendar(hostRef) {
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
    OgCalendar.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loadMomentLocale(this.loc, moment)];
                    case 1:
                        _a.sent();
                        this.internalMoment = moment();
                        return [2 /*return*/];
                }
            });
        });
    };
    OgCalendar.prototype.handleDateClick = function (event) {
        event.cancelBubble = true;
        var date = CalendarUtils.moment2CalendarDate(event.detail);
        if (this.selectionType !== 'none') {
            if (this.selectionType === 'single' || !this.selection) {
                this.selection = [date];
            }
            else {
                // multi
                // todo: implement selection types: range + multi-range
                var index = this.selection.findIndex(function (s) { return CalendarUtils.compareCalendarDate(s, date); });
                if (index >= 0) {
                    this.selection.splice(index, 1);
                }
                else {
                    this.selection.push(date);
                }
                this.selection = this.selection.slice();
            }
        }
        this.dateClicked.emit(date);
        this.selectionChanged.emit(this.selection);
    };
    OgCalendar.prototype.increaseMonth = function () {
        this.internalMoment.add(1, 'M');
        this.month = this.internalMoment.month();
        this.year = this.internalMoment.year();
    };
    OgCalendar.prototype.decreaseMonth = function () {
        this.internalMoment.subtract(1, 'M');
        this.month = this.internalMoment.month();
        this.year = this.internalMoment.year();
    };
    OgCalendar.prototype.render = function () {
        var _this = this;
        this.internalMoment.locale(this.loc);
        this.internalMoment.year(this.year);
        this.internalMoment.month(this.month);
        var localM = this.internalMoment.clone();
        var result = [];
        for (var i = 0; i < this.displayedMonths; i++) {
            result.push(h("div", { class: "calendar__container" }, h("div", { class: "calendar__header" }, h("div", { class: "calender__header__prefix" }, h("span", { class: 'calendar__nav' + (i > 0 ? ' calendar__nav--hidden' : ''), onClick: function () { return _this.decreaseMonth(); } }, h("svg", { class: 'calendar__nav__icon', version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 14 24", preserveAspectRatio: "none" }, h("polyline", { class: "og-", points: "12,2 2,12 12,24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecaps": "round", "stroke-linejoin": "round" })))), h("div", { class: "calender__header__main" }, h("span", { class: "calender__header__month" }, localM.format('MMM')), h("span", { class: "calender__header__year" }, localM.year())), h("div", { class: "calender__header__suffix" }, h("div", { class: 'calendar__nav' + (i < this.displayedMonths - 1 ? ' calendar__nav--hidden' : ''), onClick: function () { return _this.increaseMonth(); } }, h("svg", { class: 'calendar__nav__icon', version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 14 24", preserveAspectRatio: "none" }, h("polyline", { class: "og-", points: "2,2 12,12 2,24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecaps": "round", "stroke-linejoin": "round" }))))), h("og-internal-calendar", { class: "calendar__main", month: localM.month(), year: localM.year(), loc: this.loc, showCalendarWeek: this.showCalendarWeek, dateDecorator: this.dateDecorator, selection: this.selection, onDateClicked: function (e) { return _this.handleDateClick(e); } })));
            localM.add(1, 'M');
        }
        return result;
    };
    Object.defineProperty(OgCalendar, "style", {
        get: function () { return ":host{--og-calendar__header-BorderWidth:1px;--og-calendar__header-BorderStyle:solid;--og-calendar__header-BorderColor:var(--OG-COLOR-SHADE--100--20,rgba(57,83,96,0.2));--og-calendar__header-Border:var(--og-calendar__header-BorderWidth) var(--og-calendar__header-BorderStyle) var(--og-calendar__header-BorderColor);width:auto}.calendar__container,:host{display:inline-block}.calendar__container+.calendar__container{margin-left:32px}.calendar__header{display:-ms-flexbox;display:flex;text-align:center;border-bottom:var(--og-calendar__header-Border)}.calender__header__main{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.calender__header__prefix,.calender__header__suffix{padding:4px 8px;min-width:24px}.calendar__main{display:block;padding-top:8px}.calendar__nav{width:24px;height:24px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;cursor:pointer}.calendar__nav--hidden{display:none}.calendar__nav__icon{width:8px}.calender__header__month{font-size:14px;text-transform:uppercase;font-weight:500}.calender__header__month,.calender__header__year{display:inline-block;padding:4px}"; },
        enumerable: true,
        configurable: true
    });
    return OgCalendar;
}());
export { OgCalendar as og_calendar };
