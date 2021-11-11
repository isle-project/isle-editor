---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

A wrapper for the [react-color](https://casesandberg.github.io/react-color/) color picker.

## Options

* __variant__ | `string`: color picker variant (either `Compact`, `Sketch`, `Material`, `Button`, or `Block`). Default: `'Sketch'`.
* __color__ | `(string|object)`: `string` holding an HeX code or an `object` holding RGB or HSL values such as `{ r: 255, g: 255, b: 255 }` or `{ h: 0, s: 0, l: .10 }`, which determines the active color. Both accept an `a` property for alpha values other than one. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: controls whether to remove alpha slider and options. Default: `false`.
* __presetColors__ | `array<string>`: HeX `strings` specifying the default colors at the bottom of the colorpicker. Default: `[
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
* __width__ | `number`: width of the color picker (in px). Default: `200`.
* __className__ | `string`: class name. Default: `''`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onChange__ | `function`: callback invoked every time color is changed. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: callback invoked once a color change is complete. Default: `onChangeComplete() {}`.


## Examples

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

