---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

En wrapper for [react-color](https://casesandberg.github.io/react-color/) farvevælgeren.

## Indstillinger

* __variant__ | `string`: farvevælgervariant (enten `Compact`, `Sketch`, `Material`, `Button` eller `Block`). Default: `'Sketch'`.
* __color__ | `(string|object)`: `string` med en HeX-kode eller et `object` med RGB- eller HSL-værdier som f.eks. `{ r: 255, g: 255, b: 255 }` eller `{ h: 0, s: 0, l: .10 }`, som bestemmer den aktive farve. Begge accepterer en `a`-egenskab for andre alfaværdier end én. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: kontrollerer, om alfaregulatoren og indstillingerne skal fjernes. Default: `false`.
* __presetColors__ | `array<string>`: HeX `strings`, der angiver standardfarverne nederst i farvevælgeren. Default: `[
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
* __width__ | `number`: farvevælgerens bredde (i px). Default: `200`.
* __className__ | `string`: klassens navn. Default: `''`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onChange__ | `function`: callback, der påkaldes hver gang farven ændres. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: callback, der kaldes, når en farveændring er afsluttet. Default: `onChangeComplete() {}`.


## Eksempler

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

