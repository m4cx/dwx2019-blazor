import { h } from '@stencil/core';
import { SVGContent } from '../utils/svg-content';
export class OgMessageDialog {
    constructor() {
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
        return (h("og-dialog", { class: 'og-dialog--' + this.type, name: this.name, "svg-icon": this.getIcon(), visible: this.visible },
            h("slot", null),
            h("div", { slot: "footer" },
                h("og-button", { label: this.approveLabel, onClicked: _e => this.handleConfirm() }))));
    }
    static get is() { return "og-message-dialog"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-message-dialog.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-message-dialog.css"]
    }; }
    static get properties() { return {
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The title for this modal dialog"
            },
            "attribute": "name",
            "reflect": false
        },
        "visible": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Visibility state of this dialog."
            },
            "attribute": "visible",
            "reflect": true,
            "defaultValue": "false"
        },
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'success' | 'warning' | 'error' | 'info'",
                "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Dialog type can be: success / warning / error / info with.\nAn icon as well as the icon color will be automatically assigned."
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'success'"
        },
        "svgIcon": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Optional SVG Icon as markup."
            },
            "attribute": "svg-icon",
            "reflect": false
        },
        "approveLabel": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Label for approve button."
            },
            "attribute": "approve-label",
            "reflect": false,
            "defaultValue": "'OK'"
        }
    }; }
    static get events() { return [{
            "method": "confirmed",
            "name": "confirmed",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Event is being emitted when value changes."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
