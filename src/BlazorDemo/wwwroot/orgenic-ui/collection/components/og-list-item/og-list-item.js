/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/
import { h } from '@stencil/core';
export class OgListItem {
    render() {
        return h("li", { class: "og-list-item" + (this.isDisabled ? " og-list-item--disabled" : "") },
            h("div", { class: "og-list-item__content" + (this.isSelected ? " og-list-item__content--selected" : "") },
                this.showImage && h("div", { class: "og-list-item__icon" }, this.image && h("img", { src: this.image })),
                h("div", { class: "og-list-item__label" }, this.label),
                this.showValue && this.value
                    && h("div", { class: "og-list-item__value" }, this.value)));
    }
    static get is() { return "og-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-list-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-list-item.css"]
    }; }
    static get properties() { return {
        "key": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{*}",
                        "name": "type"
                    }, {
                        "text": "OgListItem",
                        "name": "memberof"
                    }],
                "text": "The value is needed for the using @see OgList instance to correctly handle selection."
            },
            "attribute": "key",
            "reflect": false
        },
        "label": {
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
                "tags": [{
                        "text": "{string}",
                        "name": "type"
                    }, {
                        "text": "OgListItem",
                        "name": "memberof"
                    }],
                "text": "Sets the value of the label."
            },
            "attribute": "label",
            "reflect": false
        },
        "showImage": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{boolean}",
                        "name": "type"
                    }, {
                        "text": "OgListItem",
                        "name": "memberof"
                    }],
                "text": "Set flag, if place for an image is reserved, wheather used or not."
            },
            "attribute": "show-image",
            "reflect": false
        },
        "image": {
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
                "tags": [{
                        "text": "{string}",
                        "name": "type"
                    }, {
                        "text": "OgListItem",
                        "name": "memberof"
                    }],
                "text": "Set the url of the image to be shown in the placeholder"
            },
            "attribute": "image",
            "reflect": false
        },
        "showValue": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{boolean}",
                        "name": "type"
                    }, {
                        "text": "OgListItem",
                        "name": "memberof"
                    }],
                "text": "Set flag, if place for a value bage is reserved wheather used or not"
            },
            "attribute": "show-value",
            "reflect": false
        },
        "value": {
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
                "tags": [{
                        "text": "{string}",
                        "name": "type"
                    }, {
                        "text": "OgListItem",
                        "name": "memberof"
                    }],
                "text": "Set the value to be shown in the badge placeholder"
            },
            "attribute": "value",
            "reflect": false
        },
        "isSelected": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{boolean}",
                        "name": "type"
                    }, {
                        "text": "OgListItem",
                        "name": "memberof"
                    }],
                "text": "Set the flag, if this list item is in selected state."
            },
            "attribute": "is-selected",
            "reflect": false
        },
        "isDisabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{boolean}",
                        "name": "type"
                    }, {
                        "text": "OgListItem",
                        "name": "memberof"
                    }],
                "text": "Set the flag, it this list item is in disabled state."
            },
            "attribute": "is-disabled",
            "reflect": false
        }
    }; }
}
