import { r as registerInstance, c as createEvent, h } from './orgenic-ui-5001260f.js';
var OgList = /** @class */ (function () {
    function OgList(hostRef) {
        registerInstance(this, hostRef);
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
        this.itemSelected = createEvent(this, "itemSelected", 7);
    }
    OgList.prototype.listItemSelected = function (item) {
        if (!this.disabled && !this.isItemDisabled(item)) {
            this.selected = item[this.keyProperty] + '';
            this.itemSelected.emit(item);
        }
    };
    OgList.prototype.hasValidItems = function () {
        return Array.isArray(this.items);
    };
    OgList.prototype.isItemSelected = function (item) {
        return !(this.isItemDisabled(item)) && (item[this.keyProperty] + '' === this.selected);
    };
    OgList.prototype.isItemDisabled = function (item) {
        return item[this.disabledProperty] || false;
    };
    OgList.prototype.render = function () {
        var _this = this;
        return h("ul", { class: "og-list" }, !this.hasValidItems()
            ? h("li", null, this.emptyListMessage)
            : this.items.map(function (item) { return h("og-list-item", { key: item[_this.keyProperty], label: item[_this.labelProperty], "show-image": !!_this.imageUrlProperty, image: item[_this.imageUrlProperty], "show-value": !!_this.valueProperty, value: item[_this.valueProperty], "is-selected": _this.isItemSelected(item), "is-disabled": _this.isItemDisabled(item), onClick: function () { return _this.listItemSelected(item); } }); }));
    };
    Object.defineProperty(OgList, "style", {
        get: function () { return ":host{--og-list-Opacity:1;--og-list-Opacity--disabled:.5;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host :after,:host :before{-webkit-box-sizing:inherit;box-sizing:inherit}:host([disabled]){--og-list-Opacity:var(--og-list-Opacity--disabled)}:host([disabled]) .og-list-item__content{cursor:default}.og-list{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;max-width:inherit;max-height:inherit;margin:0;padding:0;opacity:var(--og-list-Opacity)}"; },
        enumerable: true,
        configurable: true
    });
    return OgList;
}());
export { OgList as og_list };
