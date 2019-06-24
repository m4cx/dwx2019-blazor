# og-expander



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                            | Type      | Default     |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ----------- |
| `expanded` | `expanded` | Sets or unsets the expanded state.                                                                                                                     | `boolean` | `false`     |
| `group`    | `group`    | Optional group identifier for this expander. Expanders with same group will behave like an accordion, opening one expander will close other expanders. | `string`  | `undefined` |
| `name`     | `name`     | The name for this expander                                                                                                                             | `string`  | `undefined` |


## Methods

### `toggleExpandedState() => Promise<void>`

Use this method to toggle expanded state. Group property is respected when calling this method.

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                                   | Description                                 | Default Value |
| -------------------------------------- | ------------------------------------------- | ------------- |
| `--og-expander-BackgroundColor`        | Overall background color of the card        | - |
| `--og-expander-BorderColor`            | Border color of the expanders border        | - |
| `--og-expander-BorderRadius`           | Border radius of the expanders border       | --OG-BORDER-RADIUS |
| `--og-expander-BorderWidth`            | Border width of the expanders border        | --OG-BORDER-WIDTH |
| `--og-expander-Margin`                 | Margin around the card                      | - |
| `--og-expander__button__arrow-Padding` | Padding of the Button Arrow                 | - |
| `--og-expander__button__arrow-Width`   | Width of the Button Arrow                   | - |
| `--og-expander__content-Padding`       | Padding of the expanders content            | - |
| `--og-expander__header-BorderColor`    | Border color of the expanders header border | - |
| `--og-expander__header-BorderStyle`    | Border style of the expanders header border | - |
| `--og-expander__header-BorderWidth`    | Border width of the expanders header border | - |
| `--og-expander__header-FontSize`       | Font size of the expanders header           | - |
| `--og-expander__header-FontWeight`     | Font weight of the expanders header         | --OG-FONT-WEIGHT--MEDIUM |
| `--og-expander__header-Margin`         | Margin of the expanders header              | - |
| `--og-expander__header-Padding`        | Padding of the expanders header             | - |
| `--og-expander__header-TextTransform`  | Text transformation of the expanders header | - |

