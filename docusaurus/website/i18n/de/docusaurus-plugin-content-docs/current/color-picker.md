---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

Ein Wrapper für den [react-color](https://casesandberg.github.io/react-color/) Farbwähler.

## Optionen

* __variant__ | `string`: undefined. Default: `'Sketch'`.
* __color__ | `(string|object)`: Zeichenkette" mit einem HeX-Code oder ein "Objekt" mit RGB- oder HSL-Werten wie "r: 255, g: 255, b: 255" oder "h: 0, s: 0, l: .10 }`, das die aktive Farbe bestimmt. Beide akzeptieren eine "a"-Eigenschaft für andere Alphawerte als einen. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: steuert, ob Alpha-Schieberegler und Optionen entfernt werden sollen. Default: `false`.
* __presetColors__ | `array<string>`: HeX `Strings`, die die Standardfarben am unteren Rand des Colorpickers festlegen. Default: `[
  '#D0021B',
  '#F5A623',
  '#F8E71C',
  '#8B572A',
  '#7ED321',
  '#417505',
  '#BD10E0',
  '#9013FE',
  '#4A90E2',
  '#50E3C2',
  '#B8E986',
  '#000000',
  '#4A4A4A',
  '#9B9B9B',
  '#FFFFFF'
]`.
* __width__ | `number`: Breite des Farbwählers (in px). Default: `200`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onChange__ | `function`: Callback, der jedes Mal aufgerufen wird, wenn die Farbe geändert wird. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: Callback, der aufgerufen wird, sobald ein Farbwechsel abgeschlossen ist. Default: `onChangeComplete() {}`.


## Beispiele

```jsx live
<ColorPicker onChangeComplete={ color => {
    const out = color;
    /* e.g., returns 
        {
            "hsl": {"h":~250,"s":~0.4967,"l":~0.2063,"a":1},
            "hex":"#231a4f",
            "rgb":{"r":35,"g":26,"b":79,"a":1},
            "hsv":{"h":~250,"s":~0.664,"v":~0.3088,"a":1},
            "oldHue":~250,
            "source":"rgb"
        }
    */
}} />
```

