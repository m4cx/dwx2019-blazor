# og-tab-container



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                        | Type      | Default     |
| ---------- | ---------- | -------------------------------------------------- | --------- | ----------- |
| `disabled` | `disabled` | Determines, whether the control is disabled or not | `boolean` | `undefined` |


## Events

| Event         | Description                                | Type                  |
| ------------- | ------------------------------------------ | --------------------- |
| `tabSelected` | Event is being emitted when value changes. | `CustomEvent<number>` |


## Methods

### `openTab(index: number) => Promise<void>`



#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                                      | Description                                          | Default Value |
| ----------------------------------------- | ---------------------------------------------------- | ------------- |
| `--og-tabs__indicator-Background`         | Background of the focus indicator (not selected)     | - |
| `--og-tabs__indicator-Background--active` | Background of the focus indicator when selected      | --OG-COLOR-PRIMARY--100 |
| `--og-tabs__indicator-Background--hover`  | Background of the focus indicator when hovered       | --OG-COLOR-PRIMARY--100--50 |
| `--og-tabs__indicator-Height`             | Height of the focus indicator                        | - |
| `--og-tabs__indicator-Width`              | Width of the focus indicator                         | - |
| `--og-tabs__list-Border`                  | Bottom border of the tab list (shorthand)            | --OG-COLOR-SHADE--100--20 |
| `--og-tabs__tab-Background`               | Background of the tab item (shorthand)               | - |
| `--og-tabs__tab-Background--active`       | Background of the tab item when selected (shorthand) | - |
| `--og-tabs__tab-Background--hover`        | Background of the tab item when hovered (shorthand)  | - |
| `--og-tabs__tab-Opacity`                  | Opcaticty of the tab item                            | - |
| `--og-tabs__tab-Padding`                  | Padding of the tab item                              | --PADDING |

