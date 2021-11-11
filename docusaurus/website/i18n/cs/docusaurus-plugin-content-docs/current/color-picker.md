---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

Obal pro nástroj pro výběr barev [react-color](https://casesandberg.github.io/react-color/).

## Možnosti

* __variant__ | `string`: undefined. Default: `'Sketch'`.
* __color__ | `(string|object)`: `string` obsahující HeX kód nebo `objekt` obsahující hodnoty RGB nebo HSL, jako například `{ r: 255, g: 255, b: 255 }` nebo `{ h: 0, s: 0, l: .10 }`, který určuje aktivní barvu. Obě přijímají vlastnost `a` pro jiné hodnoty alfa než jedna. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: určuje, zda se má odstranit posuvník alfa a možnosti. Default: `false`.
* __presetColors__ | `array<string>`: HeX `řetězce` určující výchozí barvy v dolní části colorpickeru. Default: `[
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
* __width__ | `number`: šířka nástroje pro výběr barvy (v px). Default: `200`.
* __className__ | `string`: název třídy. Default: `''`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onChange__ | `function`: zpětné volání vyvolané při každé změně barvy. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: zpětné volání vyvolané po dokončení změny barvy. Default: `onChangeComplete() {}`.


## Příklady

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

