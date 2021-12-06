---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

Värvivaliku [react-color](https://casesandberg.github.io/react-color/) ümbris.

## Valikud

* __variant__ | `string`: värvivaliku variant (kas `Kompakt`, `Sketch`, `Material`, `Nupp` või `Block`). Default: `'Sketch'`.
* __color__ | `(string|object)`: `string`, mis sisaldab HeX-koodi või `objekti`, mis sisaldab RGB- või HSL-väärtusi, näiteks `{ r: 255, g: 255, b: 255 }` või `{ h: 0, s: 0, l: .10 }`, mis määrab aktiivse värvi. Mõlemad aktsepteerivad omadust `a`, mis on mõeldud muude kui ühe alfa väärtuste jaoks.. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: kontrollib, kas eemaldada alfa liugur ja valikud. Default: `false`.
* __presetColors__ | `array<string>`: HeX "stringid", mis määravad vaikimisi värvid värvivaliku allosas. Default: `[
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
* __width__ | `number`: värvivaliku laius (px). Default: `200`.
* __className__ | `string`: klassi nimi. Default: `''`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onChange__ | `function`: callback, mida kutsutakse esile iga kord, kui värvi muudetakse. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: callback, mida kutsutakse üles, kui värvimuutus on lõpule viidud. Default: `onChangeComplete() {}`.


## Näited

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

