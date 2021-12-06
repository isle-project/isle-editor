---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

[react-color](https://casesandberg.github.io/react-color/) spalvų rinkiklio apvalkalas.

## Parinktys

* __variant__ | `string`: spalvų pasirinkimo variantas (`Compact`, `Sketch`, `Material`, `Button` arba `Block`). Default: `'Sketch'`.
* __color__ | `(string|object)`: `string`, kuriame įrašytas HeX kodas, arba `objektas`, kuriame įrašytos RGB arba HSL vertės, pavyzdžiui, `{ r: 255, g: 255, b: 255 }` arba `{ h: 0, s: 0, l: .10 }`, kuris nustato aktyviąją spalvą. Abiem atvejais priimama savybė `a`, skirta alfa reikšmėms, išskyrus vieną. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: kontroliuoja, ar pašalinti alfa slankiklį ir parinktis.. Default: `false`.
* __presetColors__ | `array<string>`: "HeX" `strings`, nurodančios numatytąsias spalvas, esančias spalvų rinkiklio apačioje. Default: `[
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
* __width__ | `number`: spalvų rinkiklio plotis (px). Default: `200`.
* __className__ | `string`: klasės pavadinimas. Default: `''`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onChange__ | `function`: grįžtamasis skambutis, iškviečiamas kiekvieną kartą, kai keičiama spalva.. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: grįžtamasis skambutis, iškviečiamas baigus keisti spalvą.. Default: `onChangeComplete() {}`.


## Pavyzdžiai

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

