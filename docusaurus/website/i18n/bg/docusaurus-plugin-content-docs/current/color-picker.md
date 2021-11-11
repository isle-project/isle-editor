---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

Обвивка за избирателя на цветове [react-color](https://casesandberg.github.io/react-color/).

## Опции

* __variant__ | `string`: undefined. Default: `'Sketch'`.
* __color__ | `(string|object)`: `string`, съдържащ HeX код, или `object`, съдържащ RGB или HSL стойности, като например `{ r: 255, g: 255, b: 255 }` или `{ h: 0, s: 0, l: .10 }`, който определя активния цвят. И двете приемат свойство `a` за алфа стойности, различни от единица. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: контролира дали да премахне алфа плъзгача и опциите. Default: `false`.
* __presetColors__ | `array<string>`: HeX `низове`, определящи цветовете по подразбиране в долната част на цветоизбирателя. Default: `[
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
* __width__ | `number`: ширина на избор на цвят (в px). Default: `200`.
* __className__ | `string`: име на класа. Default: `''`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onChange__ | `function`: обратна връзка, извиквана при всяка промяна на цвета. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: обратна връзка, задействана след завършване на промяната на цвета. Default: `onChangeComplete() {}`.


## Примери

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

