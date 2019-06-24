'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./orgenic-ui-ae2bfbb5.js');
const __chunk_2 = require('./chunk-85a73d67.js');

class OgConfirmDialog {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        /**
         * Visibility state of this dialog.
         */
        this.visible = false;
        /**
         * Optional SVG Icon as markup.
         */
        this.svgIcon = __chunk_2.SVGContent['question'];
        /**
         * Label for confirmation button.
         */
        this.confirmLabel = 'OK';
        /**
         * Label for cancel button.
         */
        this.cancelLabel = 'Cancel';
        this.confirmed = __chunk_1.createEvent(this, "confirmed", 7);
        this.cancelled = __chunk_1.createEvent(this, "cancelled", 7);
    }
    handleConfirm() {
        this.confirmed.emit();
        this.visible = false;
    }
    handleCancel() {
        this.cancelled.emit();
        this.visible = false;
    }
    render() {
        return (__chunk_1.h("og-dialog", { class: "og-dialog--info", name: this.name, "svg-icon": this.svgIcon, visible: this.visible }, __chunk_1.h("slot", null), __chunk_1.h("div", { slot: "footer" }, __chunk_1.h("og-button", { label: this.cancelLabel, onClicked: _e => this.handleCancel() }), ' ', __chunk_1.h("og-button", { "data-context": "workflow", label: this.confirmLabel, onClicked: _e => this.handleConfirm() }))));
    }
    static get style() { return ""; }
}

exports.og_confirm_dialog = OgConfirmDialog;
