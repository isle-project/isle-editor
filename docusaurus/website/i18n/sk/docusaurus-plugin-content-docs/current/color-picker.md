---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

Obal pre výber farby [react-color](https://casesandberg.github.io/react-color/).

## Možnosti

* __variant__ | `string`: undefined. Default: `'Sketch'`.
* __color__ | `(string|object)`: `string` obsahujúci HeX kód alebo `objekt` obsahujúci RGB alebo HSL hodnoty, ako napríklad `{ r: 255, g: 255, b: 255 }` alebo `{ h: 0, s: 0, l: .10 }`, ktorý určuje aktívnu farbu. Obe akceptujú vlastnosť `a` pre iné hodnoty alfa ako jedna. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: kontroluje, či sa má odstrániť alfa posuvník a možnosti. Default: `false`.
* __presetColors__ | `array<string>`: HeX `reťazce` určujúce predvolené farby v spodnej časti výberového okna. Default: `[
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
* __width__ | `number`: šírka výberu farby (v px). Default: `200`.
* __className__ | `string`: názov triedy. Default: `''`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onChange__ | `function`: spätné volanie vyvolané pri každej zmene farby. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: spätné volanie vyvolané po dokončení zmeny farby. Default: `onChangeComplete() {}`.


## Príklady

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

