---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

Ovitek za izbirnik barv [react-color](https://casesandberg.github.io/react-color/).

## Možnosti

* __variant__ | `string`: različica izbirnika barv (bodisi `Compact`, `Sketch`, `Material`, `Button` ali `Block`). Default: `'Sketch'`.
* __color__ | `(string|object)`: `string`, ki vsebuje kodo HeX, ali `objekt`, ki vsebuje vrednosti RGB ali HSL, kot so `{ r: 255, g: 255, b: 255 }` ali `{ h: 0, s: 0, l: .10 }`, ki določa aktivno barvo. Oba sprejemata lastnost `a` za vrednosti alfa, ki niso ena. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: nadzoruje, ali se odstranijo drsnik alfa in možnosti. Default: `false`.
* __presetColors__ | `array<string>`: HeX `stringi`, ki določajo privzete barve na dnu izbirnika barv. Default: `[
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
* __width__ | `number`: širina izbirnika barv (v px). Default: `200`.
* __className__ | `string`: ime razreda. Default: `''`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onChange__ | `function`: povratni klic, ki se sproži ob vsaki spremembi barve. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: povratni klic, ki se sproži, ko je sprememba barve končana.. Default: `onChangeComplete() {}`.


## Primeri

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

