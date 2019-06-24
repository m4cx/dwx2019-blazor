/**
 * This class represents a data service for scrolled data
 *
 * @export
 * @class OgScrolledDataService
 * @implements {OgDataService}
 */
export class OgScrolledDataService {
    /**
     * Creates an instance of OgScrolledDataService.
     *
     * @param {OgScrolledDataOptions} options
     * @param {OgDataProvider} provider
     * @memberof OgScrolledDataService
     */
    constructor(options, provider) {
        this.options = options;
        this.provider = provider;
        /**
         * Gets the type
         *
         * @memberof OgScrolledDataService
         */
        this.type = 'scrolled';
    }
}
/**
 * This class represents a data service for paginated data
 *
 * @export
 * @class OgPaginatedDataService
 * @implements {OgDataService}
 */
export class OgPaginatedDataService {
    /**
     * Creates an instance of OgPaginatedDataService.
     *
     * @param {OgPaginatedDataOptions} options
     * @param {OgDataProvider} provider
     * @memberof OgPaginatedDataService
     */
    constructor(options, provider) {
        this.options = options;
        this.provider = provider;
        /**
         * Gets the type of the data service
         *
         * @memberof OgPaginatedDataService
         */
        this.type = 'paginated';
    }
}
/**
 * This class represents the default data provider
 *
 * @export
 * @class OgDefaultDataProvider
 * @implements {OgDataProvider}
 */
export class OgDefaultDataProvider {
    /**
     * Creates an instance of OgDefaultDataProvider.
     *
     * @param {DataProviderFunction} getData The function which takes care of loading data
     * @memberof OgDefaultDataProvider
     */
    constructor(getData) {
        this.getData = getData;
        /**
         * Gets the type of the data provider
         *
         * @memberof OgDefaultDataProvider
         */
        this.type = 'default';
    }
}
/**
 * This class represents a data provider that lazy loads data
 *
 * @export
 * @class OgLazyDataProvider
 * @implements {OgDataProvider}
 */
export class OgLazyDataProvider {
    /**
     * Creates an instance of OgLazyDataProvider.
     *
     * @param {LazyDataProviderFunction} getData The function which takes care of loading data
     * @memberof OgLazyDataProvider
     */
    constructor(getData) {
        this.getData = getData;
        /**
         * Gets the type of the data provider
         *
         * @memberof OgLazyDataProvider
         */
        this.type = 'lazy';
    }
}
