/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/
import { h } from '@stencil/core';
export class OgList {
    constructor() {
        /**
         * Set the property for the items to define as value. Default: 'key'
         */
        this.keyProperty = 'key';
        /**
         * Set the property for the items to define as label. Default: 'label'
         */
        this.labelProperty = 'label';
        /**
         * Set the property for the items to define as disabled. Default: 'disabled'
         */
        this.disabledProperty = 'disabled';
        /**
         * Set the that will be displayed if the items array is empty.
         */
        this.emptyListMessage = 'No items available';
    }
    listItemSelected(item) {
        if (!this.disabled && !this.isItemDisabled(item)) {
            this.selected = item[this.keyProperty] + '';
            this.itemSelected.emit(item);
        }
    }
    hasValidItems() {
        return Array.isArray(this.items);
    }
    isItemSelected(item) {
        return !(this.isItemDisabled(item)) && (item[this.keyProperty] + '' === this.selected);
    }
    isItemDisabled(item) {
        return item[this.disabledProperty] || false;
    }
    render() {
        return h("ul", { class: "og-list" }, !this.hasValidItems()
            ? h("li", null, this.emptyListMessage)
            : this.items.map((item) => h("og-list-item", { key: item[this.keyProperty], label: item[this.labelProperty], "show-image": !!this.imageUrlProperty, image: item[this.imageUrlProperty], "show-value": !!this.valueProperty, value: item[this.valueProperty], "is-selected": this.isItemSelected(item), "is-disabled": this.isItemDisabled(item), onClick: () => this.listItemSelected(item) })));
    }
    static get is() { return "og-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-list.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-list.css"]
    }; }
    static get properties() { return {
        "selected": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The key of the selected list item"
            },
            "attribute": "selected",
            "reflect": false
        },
        "items": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "any[]",
                "resolved": "any[]",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "An array of items to choose from"
            }
        },
        "keyProperty": {
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
                "text": "Set the property for the items to define as value. Default: 'key'"
            },
            "attribute": "key-property",
            "reflect": false,
            "defaultValue": "'key'"
        },
        "imageUrlProperty": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Set the property for the items to define as image url. *Optional* Default: no image"
            },
            "attribute": "image-url-property",
            "reflect": false
        },
        "labelProperty": {
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
                "text": "Set the property for the items to define as label. Default: 'label'"
            },
            "attribute": "label-property",
            "reflect": false,
            "defaultValue": "'label'"
        },
        "valueProperty": {
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
                "text": "Set the property for the items to define as value. *Optional* Default: no value"
            },
            "attribute": "value-property",
            "reflect": false
        },
        "disabledProperty": {
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
                "text": "Set the property for the items to define as disabled. Default: 'disabled'"
            },
            "attribute": "disabled-property",
            "reflect": false,
            "defaultValue": "'disabled'"
        },
        "emptyListMessage": {
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
                "text": "Set the that will be displayed if the items array is empty."
            },
            "attribute": "empty-list-message",
            "reflect": false,
            "defaultValue": "'No items available'"
        },
        "disabled": {
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
                "tags": [],
                "text": "Determines, whether the control is disabled or not"
            },
            "attribute": "disabled",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "itemSelected",
            "name": "itemSelected",
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
