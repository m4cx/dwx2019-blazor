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
import { r as registerInstance, h, H as Host, g as getElement$1 } from './orgenic-ui-5001260f.js';
function getElement(element, selector, timeout) {
    return __awaiter(this, void 0, void 0, function () {
        var timeoutFn, time, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    timeoutFn = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
                    time = 0;
                    result = element.querySelector(selector);
                    _a.label = 1;
                case 1:
                    if (!(!result && time < timeout)) return [3 /*break*/, 3];
                    time += 25;
                    return [4 /*yield*/, timeoutFn(25)];
                case 2:
                    _a.sent();
                    result = element.querySelector(selector);
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/, result];
            }
        });
    });
}
var OgFormItem = /** @class */ (function () {
    function OgFormItem(hostRef) {
        registerInstance(this, hostRef);
        this.editorHasFocus = false;
        this.editorIsEmpty = false;
    }
    OgFormItem.prototype.disabledChanged = function (newValue) {
        this.editor.setAttribute('disabled', newValue);
    };
    OgFormItem.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, valueChangeEvent;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, getElement(this.el, '.og-form-item__editor', 1000)];
                    case 1:
                        _a.editor = _b.sent();
                        if (!this.editor) {
                            return [2 /*return*/, console.error('OgFormItem is unable to resolve editor')];
                        }
                        this.editor.addEventListener('focusGained', function () {
                            _this.editorHasFocus = true;
                        });
                        this.editor.addEventListener('focusLost', function () {
                            _this.editorHasFocus = false;
                        });
                        valueChangeEvent = 'valueChanged';
                        switch (this.editor.tagName.toLowerCase()) {
                            case 'og-combobox':
                                valueChangeEvent = 'itemSelected';
                                break;
                            case 'og-datepicker':
                                valueChangeEvent = 'dateSelected';
                                break;
                            default:
                        }
                        this.editor.addEventListener(valueChangeEvent, function (event) {
                            _this.checkEditorEmpty(event.detail);
                        });
                        this.checkEditorEmpty(this.editor['value']);
                        // update disabled state of child editor
                        if (this.disabled) {
                            this.editor.setAttribute('disabled', 'true');
                        }
                        else {
                            this.editor.removeAttribute('disabled');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    OgFormItem.prototype.checkEditorEmpty = function (value) {
        this.editorIsEmpty = (typeof value === 'object' && value === null) || value === undefined || value.length === 0;
    };
    OgFormItem.prototype.render = function () {
        return h(Host, { class: {
                'og-form-item--focused': this.editorHasFocus,
                'og-form-item--empty': this.editorIsEmpty
            } }, h("label", { class: "og-form-item", htmlFor: "input#1" }, h("div", { class: "og-form-item__body" }, h("div", { class: "og-form-item__label" }, this.label), h("slot", null))));
    };
    Object.defineProperty(OgFormItem.prototype, "el", {
        get: function () { return getElement$1(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OgFormItem, "watchers", {
        get: function () {
            return {
                "disabled": ["disabledChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OgFormItem, "style", {
        get: function () { return ":host{--og-form-item-Margin:4px;--og-form-item__body-Background:transparent;--og-form-item__body-Padding:0;--og-form-item__label-FontSize:inherit;--og-form-item__label-Top:28px;--og-form-item__label-Left:4px;--og-form-item__label-Color:var(--OG-COLOR-SHADE--100--50,rgba(57,83,96,0.5));--og-form-item__label-Color--hover:var(--OG-COLOR-SHADE--100--50,rgba(57,83,96,0.5));--og-form-item__label-Color--active:var(--OG-COLOR-PRIMARY--100,#1da2d3);display:block;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}:host(.og-form-item--focused){--og-form-item__label-FontSize:var(--og-input__label--focus-FontSize,12px);--og-form-item__label-Top:4px;--og-form-item__label-Color:var(--og-form-item__label-Color--active);--og-input__indicator-Width:100%}:host(:not(.og-form-item--empty)){--og-form-item__label-FontSize:var(--og-input__label--focus-FontSize,12px);--og-form-item__label-Top:4px}.og-form-item__body{display:block;position:relative;background:var(--og-form-item__body-Background);padding:var(--og-form-item__body-Padding);min-height:56px}.og-form-item__label{position:absolute;pointer-events:none;top:var(--og-form-item__label-Top);left:var(--og-form-item__label-Left);z-index:1;font-size:var(--og-form-item__label-FontSize);color:var(--og-form-item__label-Color);-webkit-transition:all .2s cubic-bezier(.19,1,.22,1);transition:all .2s cubic-bezier(.19,1,.22,1)}"; },
        enumerable: true,
        configurable: true
    });
    return OgFormItem;
}());
export { OgFormItem as og_form_item };
