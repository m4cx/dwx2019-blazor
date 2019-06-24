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
var OgInternalCalendar = /** @class */ (function () {
    function OgInternalCalendar(hostRef) {
        registerInstance(this, hostRef);
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth();
        this.loc = getDefaultLocale();
        this.showCalendarWeek = true;
        this.dateClicked = createEvent(this, "dateClicked", 7);
        this.resourcesUrl = getContext(this, "resourcesUrl");
    }
    OgInternalCalendar.prototype.componentWillLoad = function () {
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
    OgInternalCalendar.prototype.getFirstDayOfWeek = function () {
        return this.internalMoment.startOf('week').day();
    };
    OgInternalCalendar.prototype.getDayArray = function () {
        var _this = this;
        return [0, 1, 2, 3, 4, 5, 6].map(function (d) {
            return (d + _this.getFirstDayOfWeek()) % 7;
        });
    };
    OgInternalCalendar.prototype.getClasses = function (m) {
        var result = 'day';
        if (m.isSame(new Date(), "day")) {
            result += ' day--today';
        }
        if (m.year() === this.year && m.month() === this.month) {
            result += ' day--same-month';
            if (this.selection && this.selection.find(function (s) { return CalendarUtils.compareCalendarDate2Moment(s, m); })) {
                result += ' day--selected';
            }
            if (this.dateDecorator) {
                var dd = this.dateDecorator.getDateDecoration(m.clone());
                if (dd.class) {
                    result += " " + dd.class;
                }
            }
        }
        else {
            result += ' day--disabled';
        }
        return result;
    };
    OgInternalCalendar.prototype.setUpInternalMoment = function () {
        this.internalMoment.locale(this.loc);
        this.internalMoment.year(this.year);
        this.internalMoment.month(this.month);
        this.internalMoment.date(1);
        var firstDayOfWeek = this.getFirstDayOfWeek();
        if (this.internalMoment.day() < firstDayOfWeek) {
            this.internalMoment.day(firstDayOfWeek - 7);
        }
        else {
            this.internalMoment.day(firstDayOfWeek);
        }
    };
    OgInternalCalendar.prototype.render = function () {
        var _this = this;
        this.setUpInternalMoment();
        return [
            h("table", null, h("thead", null, h("tr", null, this.showCalendarWeek && h("th", null), this.getDayArray().map(function (d) {
                return h("th", null, _this.internalMoment.day(d).format('dd'));
            }))), h("tbody", null, [0, 1, 2, 3, 4, 5].map(function () {
                return (h("tr", null, _this.showCalendarWeek && h("td", { class: "week" }, _this.internalMoment.week()), [0, 1, 2, 3, 4, 5, 6].map(function () {
                    var localM = _this.internalMoment.clone();
                    _this.internalMoment.add(1, 'd');
                    return h("td", { class: _this.getClasses(localM), onClick: function () { return _this.dateClicked.emit(localM); } }, localM.date());
                })));
            })))
        ];
    };
    Object.defineProperty(OgInternalCalendar, "style", {
        get: function () { return ":host{--og-calendar__day-Background:none;--og-calendar__day-Background--hover:var(--OG-COLOR-PRIMARY--100--15,rgba(29,162,211,0.15));--og-calendar__day-Background--active:var(--OG-COLOR-PRIMARY--100,#1da2d3);--og-calendar__day-Background--disabled:none;--og-calendar__day-Color:inherit;--og-calendar__day-Color--hover:var(--OG-COLOR-PRIMARY--100--15,rgba(29,162,211,0.15));--og-calendar__day-Color--active:var(--OG-COLOR-SHADE--0,#fff);--og-calendar__day-Color--disabled:var(--OG-COLOR-SHADE--100--50,rgba(57,83,96,0.5));--og-calendar__day__indicator-Background:var(--OG-COLOR-PRIMARY--40,#8ad4ef)}table{border-spacing:2px}td{line-height:1}th{text-transform:uppercase}.day,th{text-align:center}.day{background:var(--og-calendar__day-Background);color:var(--og-calendar__day-Color);border-radius:3px;position:relative;cursor:pointer;padding:6px}.day:after{position:absolute;display:block;content:\"\";height:2px;top:auto;right:4px;bottom:2px;left:4px}.day:not(.day--disabled):not(.day--selected):hover{--og-calendar__day-Background:var(--og-calendar__day-Background--hover,none)}.day--selected{--og-calendar__day-Background:var(--og-calendar__day-Background--active,none);--og-calendar__day-Color:var(--og-calendar__day-Color--active)}.week{padding-right:8px;text-align:right;border-right:1px solid var(--OG-COLOR-SHADE--100--20)}.day--disabled{--og-calendar__day-Color:var(--og-calendar__day-Color--disabled);--og-calendar__day-Background:var(--og-calendar__day-Background--disabled);cursor:default}.day--today{font-weight:700}.day--highlight:after{background:var(--og-calendar__day__indicator-Background)}"; },
        enumerable: true,
        configurable: true
    });
    return OgInternalCalendar;
}());
export { OgInternalCalendar as og_internal_calendar };
