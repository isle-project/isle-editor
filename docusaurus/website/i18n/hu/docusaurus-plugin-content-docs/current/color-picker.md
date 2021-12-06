---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

A [react-color](https://casesandberg.github.io/react-color/) színválasztó csomagolása.

## Opciók

* __variant__ | `string`: színválasztó variáns (vagy `Compact`, `Sketch`, `Material`, `Button`, vagy `Block`). Default: `'Sketch'`.
* __color__ | `(string|object)`: `string`, amely egy HeX kódot tartalmaz, vagy egy `objektum`, amely RGB vagy HSL értékeket tartalmaz, mint például `{ r: 255, g: 255, b: 255 }` vagy `{ h: 0, s: 0, l: .10 }`, amely meghatározza az aktív színt. Mindkettő elfogadja az `a` tulajdonságot az egytől eltérő alfa-értékek esetén.. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: vezérli, hogy az alfa csúszka és az opciók eltávolításra kerüljenek-e. Default: `false`.
* __presetColors__ | `array<string>`: HeX `strings`, amely meghatározza az alapértelmezett színeket a színválasztó alján.. Default: `[
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
* __width__ | `number`: a színválasztó szélessége (px-ben). Default: `200`.
* __className__ | `string`: osztály neve. Default: `''`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onChange__ | `function`: callback minden egyes színváltoztatáskor meghívódik. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: callback hívás a színváltás befejezése után. Default: `onChangeComplete() {}`.


## Példák

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

