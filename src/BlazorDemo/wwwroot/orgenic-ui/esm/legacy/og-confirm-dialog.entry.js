import { r as registerInstance, c as createEvent, h } from './orgenic-ui-5001260f.js';
import { S as SVGContent } from './chunk-09c2288f.js';
var OgConfirmDialog = /** @class */ (function () {
    function OgConfirmDialog(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Visibility state of this dialog.
         */
        this.visible = false;
        /**
         * Optional SVG Icon as markup.
         */
        this.svgIcon = SVGContent['question'];
        /**
         * Label for confirmation button.
         */
        this.confirmLabel = 'OK';
        /**
         * Label for cancel button.
         */
        this.cancelLabel = 'Cancel';
        this.confirmed = createEvent(this, "confirmed", 7);
        this.cancelled = createEvent(this, "cancelled", 7);
    }
    OgConfirmDialog.prototype.handleConfirm = function () {
        this.confirmed.emit();
        this.visible = false;
    };
    OgConfirmDialog.prototype.handleCancel = function () {
        this.cancelled.emit();
        this.visible = false;
    };
    OgConfirmDialog.prototype.render = function () {
        var _this = this;
        return (h("og-dialog", { class: "og-dialog--info", name: this.name, "svg-icon": this.svgIcon, visible: this.visible }, h("slot", null), h("div", { slot: "footer" }, h("og-button", { label: this.cancelLabel, onClicked: function (_e) { return _this.handleCancel(); } }), ' ', h("og-button", { "data-context": "workflow", label: this.confirmLabel, onClicked: function (_e) { return _this.handleConfirm(); } }))));
    };
    Object.defineProperty(OgConfirmDialog, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return OgConfirmDialog;
}());
export { OgConfirmDialog as og_confirm_dialog };
