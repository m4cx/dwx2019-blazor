'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./orgenic-ui-ae2bfbb5.js');
const __chunk_2 = require('./chunk-85a73d67.js');

class OgMessageDialog {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        /**
         * Visibility state of this dialog.
         */
        this.visible = false;
        /**
         * Dialog type can be: success / warning / error / info with.
         * An icon as well as the icon color will be automatically assigned.
         */
        this.type = 'success';
        /**
         * Label for approve button.
         */
        this.approveLabel = 'OK';
        this.confirmed = __chunk_1.createEvent(this, "confirmed", 7);
    }
    handleConfirm() {
        this.confirmed.emit();
        this.visible = false;
    }
    getIcon() {
        if (this.svgIcon) {
            return this.svgIcon;
        }
        return __chunk_2.SVGContent[this.type];
    }
    render() {
        return (__chunk_1.h("og-dialog", { class: 'og-dialog--' + this.type, name: this.name, "svg-icon": this.getIcon(), visible: this.visible }, __chunk_1.h("slot", null), __chunk_1.h("div", { slot: "footer" }, __chunk_1.h("og-button", { label: this.approveLabel, onClicked: _e => this.handleConfirm() }))));
    }
    static get style() { return ""; }
}

exports.og_message_dialog = OgMessageDialog;
