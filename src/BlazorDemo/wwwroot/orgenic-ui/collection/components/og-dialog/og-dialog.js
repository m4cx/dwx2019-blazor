/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/
import { h } from '@stencil/core';
import { ScrollHandler } from '../../utils/scroll-handler';
export class OgDialog {
    constructor() {
        /**
         * Visibility state of this dialog.
         */
        this.visible = false;
    }
    handleWheel(ev) {
        this.visible && ScrollHandler.cancelScrolling(ev);
    }
    handleMouseWheel(ev) {
        this.visible && ScrollHandler.cancelScrolling(ev);
    }
    handleTouchMove(ev) {
        this.visible && ScrollHandler.cancelScrolling(ev);
    }
    handleKeyDown(ev) {
        this.visible && ScrollHandler.cancelScrollingKeyFilter(ev);
    }
    closeDialog() {
        this.visible = false;
    }
    render() {
        return (h("div", { class: 'og-dialog__container ' + (this.visible ? ' og-dialog__container--visible' : '') },
            h("div", { class: "og-dialog__overlay" }),
            h("div", { class: "og-dialog__box" },
                h("div", { class: "og-dialog__header" },
                    this.svgIcon && h("div", { class: "og-dialog__svg-container", innerHTML: this.svgIcon }),
                    h("span", { class: "og-dialog__title" }, this.name)),
                h("div", { class: "og-dialog__content" },
                    h("slot", null),
                    h("slot", { name: "content" })),
                h("div", { class: "og-dialog__footer" },
                    h("slot", { name: "footer" })))));
    }
    static get is() { return "og-dialog"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-dialog.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-dialog.css"]
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
                "text": "The title for this modal dialog."
            },
            "attribute": "name",
            "reflect": false
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
                "text": "SVG markup that can be styled by orgenic themes."
            },
            "attribute": "svg-icon",
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
        }
    }; }
    static get listeners() { return [{
            "name": "wheel",
            "method": "handleWheel",
            "target": "window",
            "capture": false,
            "passive": false
        }, {
            "name": "mousewheel",
            "method": "handleMouseWheel",
            "target": "window",
            "capture": false,
            "passive": false
        }, {
            "name": "touchmove",
            "method": "handleTouchMove",
            "target": "window",
            "capture": false,
            "passive": false
        }, {
            "name": "keydown",
            "method": "handleKeyDown",
            "target": "window",
            "capture": false,
            "passive": false
        }]; }
}
