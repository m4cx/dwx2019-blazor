/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/
import { h } from '@stencil/core';
import Tabulator from '../../../node_modules/tabulator-tables';
import { getBasicTableConfig, applyCustomTableConfig, getColumnConfig, applyDataServiceConfig } from './utils/datatable-utils';
export class OgDatatable {
    configChanged() {
        this.initTable();
    }
    /**
     * Programatically update selected row by idProperty.
     */
    async setSelection(id) {
        this.selected = id;
        this.updateRowSelection();
    }
    /**
     * Triggers a reload of the table data.
     */
    async reloadData() {
        if (this.table) {
            this.table.replaceData();
        }
    }
    initTable() {
        if (this.table || !this.tableContainer || !this.config) {
            return;
        }
        const tableConfig = getBasicTableConfig();
        if (this.config) {
            applyCustomTableConfig(this.config, tableConfig);
            tableConfig.columns = getColumnConfig(this.config.columns);
            this.dataProvider = applyDataServiceConfig(this.config.dataService, tableConfig);
        }
        tableConfig.rowClick = (_e, row) => {
            const data = row.getData();
            this.selected = data[this.table.options.index];
            this.itemSelected.emit(data);
        },
            tableConfig.dataLoaded = () => this.updateRowSelection();
        tableConfig.ajaxRequestFunc = (url, config, params) => this.requestFunc(url, config, params),
            this.table = new Tabulator(this.tableContainer, tableConfig);
    }
    updateRowSelection() {
        if (!this.table) {
            // console.log('update row selection - no table');
            return;
        }
        if (this.table.getData().findIndex(d => d[this.table.options.index] == this.selected) <= 0) {
            // console.log('update row selection - selection not in table data');
            return;
        }
        this.table.selectRow(this.selected);
    }
    async requestFunc(_url, _config, params) {
        if (!params.page) {
            return await this.dataProvider.getData();
        }
        const result = await this.dataProvider.getData(params.page, params.size, params.sorters);
        return {
            last_page: result.data.length === 0 ? 0 : result.totalRows / result.data.length,
            data: result.data
        };
    }
    render() {
        return h("div", { ref: el => { this.tableContainer = el; this.initTable(); }, class: this.config && this.config.dataService && this.config.dataService.type === 'scrolled' ? 'scrolled-table--limited-height' : '' });
    }
    static get is() { return "og-datatable"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["og-datatable.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["og-datatable.css"]
    }; }
    static get properties() { return {
        "config": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "OgDatatableConfig",
                "resolved": "OgDatatableConfig",
                "references": {
                    "OgDatatableConfig": {
                        "location": "import",
                        "path": "./interfaces/og-datatable-column-def"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Table configuration (type OgDatatableConfig)"
            }
        },
        "selected": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Selected row identified by id-property"
            },
            "attribute": "selected",
            "reflect": true
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
                "text": "Item selection event. Event.detail contains selected item."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "setSelection": {
            "complexType": {
                "signature": "(id: any) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Programatically update selected row by idProperty.",
                "tags": []
            }
        },
        "reloadData": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Triggers a reload of the table data.",
                "tags": []
            }
        }
    }; }
    static get watchers() { return [{
            "propName": "config",
            "methodName": "configChanged"
        }]; }
}
