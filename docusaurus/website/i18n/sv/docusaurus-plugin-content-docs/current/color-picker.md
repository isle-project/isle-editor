---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

En omslagsform för färgväljaren [react-color] (https://casesandberg.github.io/react-color/).

## Alternativ

* __variant__ | `string`: undefined. Default: `'Sketch'`.
* __color__ | `(string|object)`: `sträng` som innehåller en HeX-kod eller ett `objekt` som innehåller RGB- eller HSL-värden, t.ex. `{ r: 255, g: 255, b: 255 }` eller `{ h: 0, s: 0, l: .10 }`, som bestämmer den aktiva färgen. Båda accepterar en egenskap `a` för andra alfavärden än ett.. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: kontrollerar om alfaglidaren och alternativen ska tas bort. Default: `false`.
* __presetColors__ | `array<string>`: HeX-strängar som anger standardfärgerna i botten av färgväljaren. Default: `[
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
* __width__ | `number`: färgväljarens bredd (i px). Default: `200`.
* __className__ | `string`: klassens namn. Default: `''`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onChange__ | `function`: callback som anropas varje gång färgen ändras. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: callback som aktiveras när en färgförändring är klar. Default: `onChangeComplete() {}`.


## Exempel

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

