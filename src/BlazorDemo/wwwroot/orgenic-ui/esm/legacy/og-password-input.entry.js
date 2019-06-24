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
import { r as registerInstance, c as createEvent, h, H as Host } from './orgenic-ui-5001260f.js';
var OgPasswordInput = /** @class */ (function () {
    function OgPasswordInput(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Define, whether a switch should be visible, to show the password in plain text.
         */
        this.showTogglePasswordVisibility = false;
        this.passwordVisible = false;
        this.valueChanged = createEvent(this, "valueChanged", 7);
        this.focusGained = createEvent(this, "focusGained", 7);
        this.focusLost = createEvent(this, "focusLost", 7);
    }
    OgPasswordInput.prototype.togglePasswordVisibility = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.passwordVisible = !this.passwordVisible;
                return [2 /*return*/];
            });
        });
    };
    OgPasswordInput.prototype.handleChange = function (e) {
        this.value = e.target.value;
        this.valueChanged.emit(this.value);
    };
    OgPasswordInput.prototype.render = function () {
        var _this = this;
        return (h(Host, { class: { 'og-form-item__editor': true } }, h("input", { type: this.passwordVisible ? 'text' : 'password', class: "og-input__input", value: this.value, disabled: this.disabled, onInput: function (event) { return _this.handleChange(event); }, onFocus: function (event) { return _this.focusGained.emit(event); }, onBlur: function (event) { return _this.focusLost.emit(event); }, placeholder: this.placeholder }), h("div", { class: "og-input__indicator" }), this.showTogglePasswordVisibility &&
            h("div", { class: "og-input__visibility-button", onClick: function () { return _this.togglePasswordVisibility(); } }, h("svg", { class: "og-input__eye og-input__eye--opened", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { d: "M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z" })), h("svg", { class: "og-input__eye og-input__eye--closed", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { d: "M19.604 2.562l-3.346 3.137c-1.27-.428-2.686-.699-4.243-.699-7.569 0-12.015 6.551-12.015 6.551s1.928 2.951 5.146 5.138l-2.911 2.909 1.414 1.414 17.37-17.035-1.415-1.415zm-6.016 5.779c-3.288-1.453-6.681 1.908-5.265 5.206l-1.726 1.707c-1.814-1.16-3.225-2.65-4.06-3.66 1.493-1.648 4.817-4.594 9.478-4.594.927 0 1.796.119 2.61.315l-1.037 1.026zm-2.883 7.431l5.09-4.993c1.017 3.111-2.003 6.067-5.09 4.993zm13.295-4.221s-4.252 7.449-11.985 7.449c-1.379 0-2.662-.291-3.851-.737l1.614-1.583c.715.193 1.458.32 2.237.32 4.791 0 8.104-3.527 9.504-5.364-.729-.822-1.956-1.99-3.587-2.952l1.489-1.46c2.982 1.9 4.579 4.327 4.579 4.327z" })))));
    };
    Object.defineProperty(OgPasswordInput, "style", {
        get: function () { return ":host{--og-input-BorderColor:transparent;--og-input-Background:var(--OG-COLOR-SHADE--80--05,rgba(62,129,163,0.05));--og-input-Padding:4px;--og-input__input-Background:transparent;--og-input__input-BorderColor:var(--OG-COLOR-SHADE--50,#8fadbc);--og-input__input-BorderColor--disabled:var(--OG-COLOR-SHADE--70--50,rgba(99,140,161,0.5));--og-input__input-LineHeight:1;--og-input__input-Color:inherit;--og-input__input-Color--disabled:var(--OG-COLOR-SHADE--100--50,rgba(57,83,96,0.5));--og-input__input-FontFamily:inherit;--og-input__input-FontSize:inherit;--og-input__input-Padding:24px 0 4px;--og-input__input-Appearance:textfield;--og-input__indicator-Width:0;--og-input__indicator-Height:2px;--og-input__indicator-Background:var(--OG-COLOR-PRIMARY--100,#1da2d3);display:block;padding:var(--og-input-Padding);background:var(--og-input-Background);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}.og-input__input{display:block;background:var(--og-input__input-Background);width:100%;color:var(--og-input__input-Color);font-family:var(--og-input__input-FontFamily);font-size:var(--og-input__input-FontSize);line-height:var(--og-input__input-LineHeight);padding:var(--og-input__input-Padding);margin:0;border-width:0 0 var(--og-input__input-BorderWidth,1px) 0;border-style:solid;border-color:var(--og-input__input-BorderColor);outline:none}.og-input__indicator{display:var(--og-input__indicator-Display);position:absolute;bottom:var(--og-input-Padding);left:var(--og-input-Padding);width:var(--og-input__indicator-Width);height:var(--og-input__indicator-Height);background-color:var(--og-input__indicator-Background);-webkit-transition:all .3s ease;transition:all .3s ease}.og-input__input:focus+.og-input__indicator{--og-input__indicator-Width:calc(100% - (var(--og-input-Padding) * 2))}[disabled]{--og-input__input-Color:var(--og-input__input-Color--disabled);--og-input__input-BorderColor:var(--og-input__input-BorderColor--disabled)}.og-input__visibility-button{width:32px;height:32px;cursor:pointer;position:absolute;padding:8px;right:0;bottom:6px}.og-input__eye{max-width:100%;color:var(--og-input__input-Color)}.og-input__eye path{fill:currentColor}[type=password]~.og-input__visibility-button .og-input__eye--closed,[type=text]~.og-input__visibility-button .og-input__eye--opened{display:none}"; },
        enumerable: true,
        configurable: true
    });
    return OgPasswordInput;
}());
export { OgPasswordInput as og_password_input };
