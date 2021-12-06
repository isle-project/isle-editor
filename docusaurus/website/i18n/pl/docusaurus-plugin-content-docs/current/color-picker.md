---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

Okładka dla zbieracza kolorów [reaktor-kolor](https://casesandberg.github.io/react-color/).

## Opcje

* __variant__ | `string`: wariant selektora kolorów (albo `Compact`, `Sketch`, `Material`, `Button`, lub `Block`). Default: `'Sketch'`.
* __color__ | `(string|object)`: `sznurek` trzymający kod HeX lub `obiekt` trzymający wartości RGB lub HSL takie jak `{ r: 255, g: 255, b: 255 }` lub `{ h: 0, s: 0, l: .10 }`, który określa aktywny kolor. Oba przyjmują właściwość `a` dla wartości alfa innych niż jedna. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: kontroluje, czy usunąć suwak alfa i opcje. Default: `false`.
* __presetColors__ | `array<string>`: HeX `stringi` określające domyślne kolory na dole colorpickera. Default: `[
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
* __width__ | `number`: szerokość zbieracza kolorów (w px). Default: `200`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onChange__ | `function`: wywołanie zwrotne przy każdej zmianie koloru. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: wywołanie zwrotne po zakończeniu zmiany koloru. Default: `onChangeComplete() {}`.


## Przykłady

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

