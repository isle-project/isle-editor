---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

Un involucro per il raccoglitore di colore [react-color](https://casesandberg.github.io/react-color/).

## Opzioni

* __variant__ | `string`: undefined. Default: `'Sketch'`.
* __color__ | `(string|object)`: "stringa" che contiene un codice HeX o un "oggetto" che contiene valori RGB o HSL come `{ r: 255, g: 255, b: 255 }`` o `{ h: 0, s: 0, l: .10 }``, che determina il colore attivo. Entrambi accettano una proprietà `a` per valori alfa diversi da uno. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: controlla se rimuovere il cursore alfa e le opzioni. Default: `false`.
* __presetColors__ | `array<string>`: HeX `stringhe` che specificano i colori di default nella parte inferiore del colorpicker. Default: `[
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
* __width__ | `number`: larghezza del raccoglitore di colore (in px). Default: `200`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onChange__ | `function`: richiamata ogni volta che si cambia colore. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: richiamata una volta completato il cambio di colore. Default: `onChangeComplete() {}`.


## Esempi

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

