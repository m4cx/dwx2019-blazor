/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/
import { h } from '@stencil/core';
export class OgCard {
    handleDivRef(el) {
        if (!el) {
            return;
        }
        let slot = el.firstChild;
        if (!slot) {
            return;
        }
        el.style.display = slot.assignedNodes().length > 0 ? 'block' : 'none';
        slot.addEventListener('slotchange', () => {
            el.style.display = slot.assignedNodes().length > 0 ? 'block' : 'none';
        });
    }
    render() {
        return (h("div", { class: "og-card" },
            this.name
                ? h("div", { class: "og-card__header" },
                    h("span", { class: "og-card__title" }, this.name))
                : "",
            h("div", { class: "og-card__content" },
                h("slot", null),
                h("slot", { name: "content" })),
            h("div", { class: "og-card__footer", ref: el => this.handleDivRef(el) },
                h("slot", { name: "footer" }))));
    }
    static get is() { return "og-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-card.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-card.css"]
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
                "text": "The title for this card (optional)"
            },
            "attribute": "name",
            "reflect": false
        }
    }; }
}
