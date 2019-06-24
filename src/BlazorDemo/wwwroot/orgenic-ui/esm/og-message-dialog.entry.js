import { r as registerInstance, c as createEvent, h } from './orgenic-ui-5001260f.js';
import { S as SVGContent } from './chunk-09c2288f.js';

class OgMessageDialog {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.confirmed = createEvent(this, "confirmed", 7);
    }
    handleConfirm() {
        this.confirmed.emit();
        this.visible = false;
    }
    getIcon() {
        if (this.svgIcon) {
            return this.svgIcon;
        }
        return SVGContent[this.type];
    }
    render() {
        return (h("og-dialog", { class: 'og-dialog--' + this.type, name: this.name, "svg-icon": this.getIcon(), visible: this.visible }, h("slot", null), h("div", { slot: "footer" }, h("og-button", { label: this.approveLabel, onClicked: _e => this.handleConfirm() }))));
    }
    static get style() { return ""; }
}

export { OgMessageDialog as og_message_dialog };
