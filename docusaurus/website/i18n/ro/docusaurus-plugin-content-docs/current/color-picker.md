---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

Un înveliș pentru selectorul de culori [react-color](https://casesandberg.github.io/react-color/).

## Opțiuni

* __variant__ | `string`: varianta de selectare a culorii (fie `Compact`, `Sketch`, `Material`, `Button`, sau `Block`). Default: `'Sketch'`.
* __color__ | `(string|object)`: `string` care conține un cod HeX sau un `object` care conține valori RGB sau HSL, cum ar fi `{ r: 255, g: 255, b: 255 }` sau `{ h: 0, s: 0, l: .10 }`, care determină culoarea activă. Ambele acceptă o proprietate `a` pentru alte valori alfa decât una.. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: controlează dacă se elimină sau nu cursorul alfa și opțiunile. Default: `false`.
* __presetColors__ | `array<string>`: HeX `strings` care specifică culorile implicite din partea de jos a selectorului de culori. Default: `[
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
* __width__ | `number`: lățimea selectorului de culori (în px). Default: `200`.
* __className__ | `string`: numele clasei. Default: `''`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onChange__ | `function`: callback invocat de fiecare dată când se schimbă culoarea. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: callback invocat odată ce o schimbare de culoare este finalizată. Default: `onChangeComplete() {}`.


## Exemple

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

