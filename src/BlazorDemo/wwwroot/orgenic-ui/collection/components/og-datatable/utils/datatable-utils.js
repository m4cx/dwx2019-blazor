export function getBasicTableConfig() {
    // fill table space https://github.com/olifolkerd/tabulator/issues/1506
    return {
        layout: 'fitColumns',
        autoResize: true,
        resizableColumns: false,
        responsiveLayout: 'collapse',
        virtualDom: true,
        height: '100%',
        ajaxURL: '/',
    };
}
export function applyCustomTableConfig(config, tableConfig) {
    tableConfig.index = config.idProperty || 'id';
    tableConfig.placeholder = config.noDataMessage || tableConfig.placeholder;
    tableConfig.selectable = config.selectable;
}
export function getColumnConfig(columns) {
    return columns.map(column => {
        const columnDef = {
            title: column.title,
            field: column.property,
            width: column.width,
            widthGrow: column.grow,
            formatter: column.formatter,
        };
        if (column.sorter) {
            const sorterFn = column.sorter;
            columnDef.sorter = (a, b) => {
                return sorterFn(a, b);
            };
        }
        return columnDef;
    });
}
export function applyDataServiceConfig(dataService, tableConfig) {
    let provider;
    if (!dataService) {
        console.error('config.dataService must be set');
        return provider;
    }
    if (dataService.type === 'scrolled') {
        const service = dataService;
        tableConfig.paginationSize = (service.options && service.options.requestLimit) || 100;
        if (service.provider.type === 'default') {
            provider = service.provider;
        }
        else if (service.provider.type === 'lazy') {
            tableConfig.ajaxSorting = true;
            tableConfig.ajaxProgressiveLoad = 'scroll';
            provider = service.provider;
        }
    }
    else if (dataService.type === 'paginated') { // paginated
        const service = dataService;
        tableConfig.paginationSize = (service.options && service.options.pageSize) || 50;
        if (service.provider.type === 'default') {
            tableConfig.pagination = 'local';
            provider = service.provider;
        }
        else if (service.provider.type === 'lazy') {
            tableConfig.ajaxSorting = true;
            tableConfig.pagination = 'remote';
            provider = service.provider;
        }
    }
    else {
        console.error('unknown dataservice', dataService.type);
    }
    return provider;
}
