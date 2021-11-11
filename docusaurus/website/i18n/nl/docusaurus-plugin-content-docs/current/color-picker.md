---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

Een wikkel voor de [reactiekleur](https://casesandberg.github.io/react-color/) kleurkiezer.

## Opties

* __variant__ | `string`: undefined. Default: `'Sketch'`.
* __color__ | `(string|object)`: String` met een HeX-code of een `object` met RGB- of HSL-waarden zoals `{ r: 255, g: 255, b: 255 }` of `{ h: 0, s: 0, l: .10 }`, die de actieve kleur bepaalt. Beide accepteren een `a` eigenschap voor andere alpha-waarden dan een. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: bepaalt of de alfa-schuifregelaar en de opties moeten worden verwijderd. Default: `false`.
* __presetColors__ | `array<string>`: HeX `strings` met vermelding van de standaardkleuren aan de onderkant van de kleurkiezer. Default: `[
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
* __width__ | `number`: breedte van de kleurkiezer (in px). Default: `200`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onChange__ | `function`: callback ingeroepen elke keer dat de kleur wordt veranderd. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: terugroeping aangeroepen zodra een kleurverandering is voltooid. Default: `onChangeComplete() {}`.


## Voorbeelden

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

