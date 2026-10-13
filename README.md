Unofficial component library for audako side projects written in Svelte.

Published to the audako Gitea registry. Map the scope in `.npmrc`, then install:

```
@audako:registry=https://git.dev.audako.net/api/packages/audako/npm/
```

```
npm i @audako/core-components
```

## Theming

The components render into shadow roots, so a host app's stylesheets do not
reach inside them. Two hooks do: CSS variables and `::part()`.

### CSS variables

Set the `--audako-*` variables in the host stylesheet, usually on `:root`:

```css
:root {
  --audako-color-primary: #0a6cff;
  --audako-color-primary-hover: #0857cc;
  --audako-font-family: 'Inter', sans-serif;
  --audako-radius-control: 4px;
}
```

The entity select dialog and the popups (select options, menus) render into
`<audako-entity-select-dialog>` and `<audako-popup-layer>` on `<body>`, so they
inherit from `:root` or `body` only. Variables set on a single element theme
that element, but not the dialog or popups it opens.

| Variable                        | Default                | Used for                                                       |
| ------------------------------- | ---------------------- | -------------------------------------------------------------- |
| `--audako-font-family`          | system UI fonts        | all text                                                       |
| `--audako-color-primary`        | `rgb(178, 24, 122)`    | accent: primary button, active tree node, focus borders, links |
| `--audako-color-primary-hover`  | `rgb(140, 18, 96)`     | primary button on hover                                        |
| `--audako-color-on-primary`     | `#ffffff`              | text on the accent                                             |
| `--audako-color-surface`        | `#ffffff`              | dialog, panels, popups                                         |
| `--audako-color-surface-border` | `#cccccc`              | popup border                                                   |
| `--audako-color-ink`            | `rgba(0, 0, 0, 0.86)`  | text                                                           |
| `--audako-color-ink-secondary`  | `rgba(0, 0, 0, 0.58)`  | secondary text and icons                                       |
| `--audako-color-ink-tertiary`   | `rgba(0, 0, 0, 0.4)`   | placeholders and hints                                         |
| `--audako-color-line`           | `rgba(0, 0, 0, 0.12)`  | borders and dividers                                           |
| `--audako-color-select`         | `rgb(25, 118, 210)`    | checked checkboxes                                             |
| `--audako-color-danger`         | `rgb(198, 40, 40)`     | errors and missing values                                      |
| `--audako-radius-control`       | `8px`                  | fields, tree nodes, paginator                                  |
| `--audako-radius-button`        | `6px`                  | buttons                                                        |
| `--audako-radius-popup`         | `6px`                  | popups                                                         |
| `--audako-radius-dialog`        | `10px`                 | dialog, table card                                             |
| `--audako-shadow-popup`         | soft two-layer shadow  | popups                                                         |
| `--audako-shadow-dialog`        | Material dialog shadow | dialog                                                         |

Accent tints (hover and selection backgrounds) are mixed from
`--audako-color-primary`, so they follow it.

### Parts

For what the variables do not cover, style the exposed parts. Select them on
the element that renders them:

```css
audako-entity-select::part(header),
audako-entity-select-dialog::part(header) {
  background-color: #f4f7fb;
}

audako-popup-layer::part(menu-item):hover {
  background-color: #e8f0fe;
}
```

| Element                                               | Parts                                                                                                                                                                                          |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `audako-entity-select`, `audako-entity-select-dialog` | `header`, `title`, `footer`, `button-primary`, `sidebar`, `toolbar`, `search-field`, `tree-node`, `table`, `header-row`, `row`, `paginator`, `select`, `checkbox`, `icon-button`, `tenant-row` |
| `audako-entity-select-dialog` only                    | `backdrop`, `dialog`                                                                                                                                                                           |
| `audako-tenant-select`                                | `title`, `search-field`, `tenant-row`, `icon-button`                                                                                                                                           |
| `audako-select`                                       | `select`, `checkbox`                                                                                                                                                                           |
| `audako-popup-layer` (select options, menus)          | `popup`, `option`, `menu-item`, `checkbox`                                                                                                                                                     |
| `audako-color-picker`                                 | `trigger`, `swatch`                                                                                                                                                                            |
| `audako-popup-layer` (color picker)                   | `color-picker-popup`, `header`, `title`, `swatch`, `footer`, `button-primary`                                                                                                                  |

States are extra part names, since `::part()` cannot be combined with classes:
`tree-node-selected`, `row-active`, `row-blocked`, `checkbox-checked`,
`tenant-row-disabled` and `option-selected`. User-action pseudo-classes such as
`:hover` work after `::part()`.

`<audako-menu>` has no shadow root of its own; its popup renders into
`<audako-popup-layer>`.

## Color picker

`<audako-color-picker>` is the colour picker of the main audako UI: a swatch
button that opens the palette next to a mixer. It makes no HTTP calls — the
host passes the palette, the user's own colours and the recent picks in, and
stores what the events report.

```html
<audako-color-picker value="#0070c0" allowclear></audako-color-picker>
```

```js
const picker = document.querySelector('audako-color-picker');
picker.customColors = profile.customColors;
picker.recentColors = profile.recentColors;
picker.addEventListener('valuechanged', (e) => save(e.detail)); // '#rrggbb' or null
picker.addEventListener('valuepreview', (e) => element.style.fill = e.detail); // optional live preview
picker.addEventListener('customcolorschanged', (e) => profile.saveCustomColors(e.detail));
picker.addEventListener('recentcolorschanged', (e) => profile.saveRecentColors(e.detail));
```

| Property            | Attribute           | Default               | Description                                               |
| ------------------- | ------------------- | --------------------- | --------------------------------------------------------- |
| `value`             | `value`             | `null`                | `#rrggbb`; anything else shows as no colour               |
| `palette`           | `palette`           | `defaultColorPalette` | `{ label, colors: (string \| { color, label? })[] }[]`    |
| `customColors`      | `customcolors`      | `[]`                  | the user's own colours                                    |
| `customColorsLimit` | `customcolorslimit` | `12`                  | slots for own colours; `0` hides the block and its action |
| `recentColors`      | `recentcolors`      | `[]`                  | recent picks, newest first                                |
| `recentColorsLimit` | `recentcolorslimit` | `6`                   | recent picks kept; `0` turns them off                     |
| `allowClear`        | `allowclear`        | `false`               | offer "Keine Farbe"                                       |
| `disabled`          | `disabled`          | `false`               |                                                           |
| `compact`           | `compact`           | `false`               | 30px trigger for dense rows                               |
| `label`             | `label`             | `Farbe auswählen`     | popup title                                               |

`valuepreview` reports the mixed colour on every change while the popup is
open, so a host can show it on the styled element before it is applied. It is
not a value change: nothing is stored until `valuechanged`. If the popup closes
without applying (Abbrechen, Escape, a click outside), `valuepreview` fires once
more with the unchanged value to undo the preview.

Array attributes take JSON; set them as properties where you can. The element
also keeps the changes it reported, so it works without the host writing them
back. All events bubble and are composed. The popup opens fullscreen on
viewports up to 600px wide. `defaultColorPalette` and the `ColorPaletteGroup`
type are exported to build on.
