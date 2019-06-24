import { r as registerInstance, c as createEvent, h } from './orgenic-ui-5001260f.js';
var OgButton = /** @class */ (function () {
    function OgButton(hostRef) {
        registerInstance(this, hostRef);
        this.clicked = createEvent(this, "clicked", 7);
    }
    OgButton.prototype.handleClick = function (e) {
        if (!this.disabled) {
            this.clicked.emit(e);
        }
        e.cancelBubble = true;
    };
    OgButton.prototype.render = function () {
        var _this = this;
        return h("button", { class: "og-button", onClick: function (e) { return _this.handleClick(e); }, disabled: this.disabled }, this.label);
    };
    Object.defineProperty(OgButton, "style", {
        get: function () { return ":host{--Display:inline-block;--Width:auto;--MaxWidth:inherit;--Height:auto;--MaxHeight:inherit;--Padding:var(--PADDING,0.75rem 1.5rem);--BorderWidth:1px;--BorderStyle:solid;--BorderColor:transparent;--og-button-BorderRadius:var(--OG-BORDER-RADIUS,3px);--og-button-Background:var(--OG-COLOR-SECONDARY--100--20,rgba(51,51,51,0.2));--og-button-Background--hover:var(--OG-COLOR-SECONDARY--100--30,rgba(51,51,51,0.3));--og-button-Background--active:var(--OG-COLOR-SECONDARY--100--10,rgba(51,51,51,0.1));--og-button-Background--disabled:var(--OG-COLOR-SECONDARY--100--07,rgba(51,51,51,0.07));--og-button-Color:var(--OG-COLOR-SHADE--100,#395360);--og-button-Color--hover:var(--OG-COLOR-SHADE--100,#395360);--og-button-Color--active:var(--OG-COLOR-SHADE--100,#395360);--og-button-Color--disabled:var(--OG-COLOR-SHADE--100--30,rgba(57,83,96,0.3));--og-button-FontWeight:var(--OG-FONT-WEIGHT--MEDIUM,500);--BoxShadow:var(--og-button-BoxShadow);--FontFamily:var(--og-button-FontFamily,inherit);--FontSize:var(--og-button-FontSize,inherit);--Outline:none;--TextTransform:uppercase;display:var(--Display);width:var(--Width);min-width:var(--MinWidth);max-width:var(--MaxWidth);height:var(--Height);max-height:var(--maxHeight);font-family:var(--FontFamily);font-size:var(--FontSize);font-weight:var(--og-button-FontWeight,normal);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}:host([data-context~=workflow]){--og-button-Background:var(--OG-COLOR-PRIMARY--100,#1da2d3);--og-button-Background--hover:var(--OG-COLOR-PRIMARY--120,#1783ab);--og-button-Background--active:var(--OG-COLOR-PRIMARY--80,#3ab7e4);--og-button-Background--disabled:var(--OG-COLOR-PRIMARY--100--30,rgba(29,162,211,0.3));--og-button-Color:var(--OG-COLOR-SHADE--0,#fff);--og-button-Color--hover:var(--OG-COLOR-SHADE--0,#fff);--og-button-Color--active:var(--OG-COLOR-SHADE--0,#fff);--og-button-Color--disabled:var(--OG-COLOR-SHADE--0--30,hsla(0,0%,100%,0.3))}:host([data-context~=link]){--og-button-Background:transparent;--og-button-Background--hover:var(--OG-COLOR-SHADE--100--30,rgba(57,83,96,0.3));--og-button-Background--active:var(--OG-COLOR-SHADE--100--10,rgba(57,83,96,0.1));--og-button-Background--disabled:transparent;--og-button-Color:var(--OG-COLOR-SHADE--100,#395360);--og-button-Color--hover:var(--OG-COLOR-SHADE--100,#395360);--og-button-Color--active:var(--OG-COLOR-SHADE--100,#395360);--og-button-Color--disabled:var(--OG-COLOR-SHADE--100--30,rgba(57,83,96,0.3))}.og-button{display:block;width:100%;max-width:inherit;height:100%;max-height:inherit;padding:var(--Padding);font-family:inherit;font-size:inherit;font-weight:inherit;background:var(--og-button-Background);border:var(--BorderWidth) var(--BorderStyle) var(--BorderColor);border-radius:var(--og-button-BorderRadius);color:var(--og-button-Color);text-transform:var(--TextTransform);-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-property:background-color;transition-property:background-color;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out}.og-button:focus{outline:none}.og-button:hover{--og-button-Background:var(--og-button-Background--hover);--og-button-Color:var(--og-button-Color--hover);cursor:pointer}.og-button:active,.og-button:hover{-webkit-transition-duration:.3s;transition-duration:.3s}.og-button:active{--og-button-Background:var(--og-button-Background--active);--og-button-Color:var(--og-button-Color--active)}.og-button:disabled{--og-button-Background:var(--og-button-Background--disabled);--og-button-Color:var(--og-button-Color--disabled);cursor:default}"; },
        enumerable: true,
        configurable: true
    });
    return OgButton;
}());
var ScrollHandler = /** @class */ (function () {
    function ScrollHandler() {
    }
    return ScrollHandler;
}());
ScrollHandler.cancelScrollingKeyFilter = function (ev) {
    /* 33: pgup; 34: pgdwn; 35: end; 36: pos1; 37 - 40: arrows */
    if (ev.keyCode >= 33 && ev.keyCode <= 40) {
        ScrollHandler.cancelScrolling(ev);
    }
};
ScrollHandler.cancelScrolling = function (ev) {
    if (ev.preventDefault) {
        ev.preventDefault();
    }
    ev.returnValue = false;
};
var OgDialog = /** @class */ (function () {
    function OgDialog(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Visibility state of this dialog.
         */
        this.visible = false;
    }
    OgDialog.prototype.handleWheel = function (ev) {
        this.visible && ScrollHandler.cancelScrolling(ev);
    };
    OgDialog.prototype.handleMouseWheel = function (ev) {
        this.visible && ScrollHandler.cancelScrolling(ev);
    };
    OgDialog.prototype.handleTouchMove = function (ev) {
        this.visible && ScrollHandler.cancelScrolling(ev);
    };
    OgDialog.prototype.handleKeyDown = function (ev) {
        this.visible && ScrollHandler.cancelScrollingKeyFilter(ev);
    };
    OgDialog.prototype.closeDialog = function () {
        this.visible = false;
    };
    OgDialog.prototype.render = function () {
        return (h("div", { class: 'og-dialog__container ' + (this.visible ? ' og-dialog__container--visible' : '') }, h("div", { class: "og-dialog__overlay" }), h("div", { class: "og-dialog__box" }, h("div", { class: "og-dialog__header" }, this.svgIcon && h("div", { class: "og-dialog__svg-container", innerHTML: this.svgIcon }), h("span", { class: "og-dialog__title" }, this.name)), h("div", { class: "og-dialog__content" }, h("slot", null), h("slot", { name: "content" })), h("div", { class: "og-dialog__footer" }, h("slot", { name: "footer" })))));
    };
    Object.defineProperty(OgDialog, "style", {
        get: function () { return ":host{--og-dialog__overlay-Background:var(--OG-COLOR-SECONDARY--100--30,rgba(51,51,51,0.3));--og-dialog__overlay-ZIndex:10000;--og-dialog-Width:calc(100% - 2rem);--og-dialog-MaxWidth:640px;--og-dialog-Height:auto;--og-dialog-MaxHeight:calc(100% - 2rem);--og-dialog-Background:var(--OG-COLOR-SHADE--0,#fff);--og-dialog-BorderRadius:var(--OG-BORDER-RADIUS,3px);--og-dialog-BoxShadow:0 2px 8px rgba(0,0,0,0.2);--og-dialog__header-Display:block;--og-dialog__header-TextOverflow:ellipsis;--og-dialog__header-FontSize:18px;--og-dialog__header-FontWeight:var(--OG-FONT-WEIGHT--MEDIUM,500);--og-dialog__header-TextTransform:uppercase;--og-dialog__header-Padding:16px 0;--og-dialog__header-Margin:0 32px;--og-dialog__header-BorderWidth:0 0 1px 0;--og-dialog__header-BorderStyle:solid;--og-dialog__header-BorderColor:var(--OG-COLOR-SECONDARY--100--20,rgba(51,51,51,0.2));--og-dialog__content-Padding:16px 32px;--og-dialog__svg-container-Width:40px;--og-dialog__svg-Background:none;--og-dialog__svg-Color:var(--OG-COLOR-INFO--100,#4b91e2);--og-dialog--info__svg-Color:var(--OG-COLOR-INFO--100,#4b91e2);--og-dialog--success__svg-Color:var(--OG-COLOR-SUCCESS--100,#68ca58);--og-dialog--warning__svg-Color:var(--OG-COLOR-WARNING--100,#f70);--og-dialog--error__svg-Color:var(--OG-COLOR-error--100,#cf021a);--og-dialog__svg-Padding:2px;--og-dialog__svg-Margin:0;--og-dialog__svg-Width:28px;--og-dialog__svg-Height:var(--og-dialog__svg-Width);--og-dialog__svg-Display:block;--og-dialog__svg-BorderRadius:50%;--og-dialog__footer-Padding:16px 32px 32px;--og-dialog__footer-Background:none;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}:host(.og-dialog--success){--og-dialog__svg-Color:var(--og-dialog--success__svg-Color)}:host(.og-dialog--warning){--og-dialog__svg-Color:var(--og-dialog--warning__svg-Color)}:host(.og-dialog--error){--og-dialog__svg-Color:var(--og-dialog--error__svg-Color)}:host(.og-dialog--info){--og-dialog__svg-Color:var(--og-dialog--info__svg-Color)}.og-dialog__container{position:fixed;top:0;left:0;width:100vw;height:100vh;display:none;z-index:var(--og-dialog__overlay-ZIndex)}.og-dialog__container--visible{display:-ms-flexbox;display:flex}.og-dialog__overlay{background:var(--og-dialog__overlay-Background);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;top:0;right:0;bottom:0;left:0}.og-dialog__box{height:var(--og-dialog-Height);max-height:var(--og-dialog-MaxHeight);width:var(--og-dialog-Width);max-width:var(--og-dialog-MaxWidth);margin:auto;background:var(--og-dialog-Background);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-shadow:var(--og-dialog-BoxShadow);box-shadow:var(--og-dialog-BoxShadow);border-radius:var(--og-dialog-BorderRadius);-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;z-index:1}.og-dialog__header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:var(--og-dialog__header-Padding);margin:var(--og-dialog__header-Margin);border-width:var(--og-dialog__header-BorderWidth);border-style:var(--og-dialog__header-BorderStyle);border-color:var(--og-dialog__header-BorderColor)}.og-dialog__title{display:var(--og-dialog__header-Display);font-size:var(--og-dialog__header-FontSize);font-weight:var(--og-dialog__header-FontWeight);text-transform:var(--og-dialog__header-TextTransform);text-overflow:var(--og-dialog__header-TextOverflow);overflow:hidden;white-space:nowrap;-ms-flex:1;flex:1}.og-dialog__content{padding:var(--og-dialog__content-Padding);overflow:auto;-ms-flex:1;flex:1}.og-dialog__svg-container{width:var(--og-dialog__svg-container-Width)}.og-dialog__svg-container svg{display:var(--og-dialog__svg-Display);background:var(--og-dialog__svg-Background);color:var(--og-dialog__svg-Color);width:var(--og-dialog__svg-Width);height:var(--og-dialog__svg-Height);padding:var(--og-dialog__svg-Padding);margin:var(--og-dialog__svg-Margin);border-radius:var(--og-dialog__svg-BorderRadius)}.og-dialog__footer{text-align:right;background:var(--og-dialog__footer-Background);padding:var(--og-dialog__footer-Padding)}"; },
        enumerable: true,
        configurable: true
    });
    return OgDialog;
}());
export { OgButton as og_button, OgDialog as og_dialog };
