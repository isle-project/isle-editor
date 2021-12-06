---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

Krāsu atlasītāja [react-color](https://casesandberg.github.io/react-color/) ietvars.

## Iespējas

* __variant__ | `string`: krāsu atlasītāja variants (`Compact`, `Sketch`, `Material`, `Button` vai `Block`).. Default: `'Sketch'`.
* __color__ | `(string|object)`: `string`, kurā ir HeX kods, vai `objekts`, kurā ir RGB vai HSL vērtības, piemēram, `{ r: 255, g: 255, b: 255 }` vai `{ h: 0, s: 0, l: .10 }`, kas nosaka aktīvo krāsu. Abi pieņem īpašību `a`, kas paredzēta citām alfa vērtībām, kas nav vienāds ar vienu.. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: kontrolē, vai noņemt alfa slīdni un opcijas.. Default: `false`.
* __presetColors__ | `array<string>`: HeX `virknes`, kas norāda noklusējuma krāsas krāsu atlasītāja apakšā.. Default: `[
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
* __width__ | `number`: krāsu atlasītāja platums (px). Default: `200`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onChange__ | `function`: atgriezeniskais zvans, kas tiek izsaukts katru reizi, kad mainās krāsa.. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: atsauces zvans, kas tiek izsaukts, tiklīdz ir pabeigta krāsas maiņa.. Default: `onChangeComplete() {}`.


## Piemēri

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

