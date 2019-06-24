'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./orgenic-ui-ae2bfbb5.js');

class OgList {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
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
        this.itemSelected = __chunk_1.createEvent(this, "itemSelected", 7);
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
        return __chunk_1.h("ul", { class: "og-list" }, !this.hasValidItems()
            ? __chunk_1.h("li", null, this.emptyListMessage)
            : this.items.map((item) => __chunk_1.h("og-list-item", { key: item[this.keyProperty], label: item[this.labelProperty], "show-image": !!this.imageUrlProperty, image: item[this.imageUrlProperty], "show-value": !!this.valueProperty, value: item[this.valueProperty], "is-selected": this.isItemSelected(item), "is-disabled": this.isItemDisabled(item), onClick: () => this.listItemSelected(item) })));
    }
    static get style() { return ":host{--og-list-Opacity:1;--og-list-Opacity--disabled:.5;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}:host([disabled]){--og-list-Opacity:var(--og-list-Opacity--disabled)}:host([disabled]) .og-list-item__content{cursor:default}.og-list{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;max-width:inherit;max-height:inherit;margin:0;padding:0;opacity:var(--og-list-Opacity)}"; }
}

exports.og_list = OgList;
