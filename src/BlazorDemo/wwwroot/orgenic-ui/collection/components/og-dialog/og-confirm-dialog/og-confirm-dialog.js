import { h } from '@stencil/core';
import { SVGContent } from '../utils/svg-content';
export class OgConfirmDialog {
    constructor() {
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
        return (h("og-dialog", { class: "og-dialog--info", name: this.name, "svg-icon": this.svgIcon, visible: this.visible },
            h("slot", null),
            h("div", { slot: "footer" },
                h("og-button", { label: this.cancelLabel, onClicked: _e => this.handleCancel() }),
                ' ',
                h("og-button", { "data-context": "workflow", label: this.confirmLabel, onClicked: _e => this.handleConfirm() }))));
    }
    static get is() { return "og-confirm-dialog"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-confirm-dialog.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-confirm-dialog.css"]
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
            "reflect": false,
            "defaultValue": "SVGContent['question']"
        },
        "confirmLabel": {
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
                "text": "Label for confirmation button."
            },
            "attribute": "confirm-label",
            "reflect": false,
            "defaultValue": "'OK'"
        },
        "cancelLabel": {
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
                "text": "Label for cancel button."
            },
            "attribute": "cancel-label",
            "reflect": false,
            "defaultValue": "'Cancel'"
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
        }, {
            "method": "cancelled",
            "name": "cancelled",
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
