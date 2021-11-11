---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

Uma embalagem para o colhedor de cores [react-color](https://casesandberg.github.io/react-color/).

## Opções

* __variant__ | `string`: undefined. Default: `'Sketch'`.
* __color__ | `(string|object)`: "string" contendo um código HeX ou um "objeto" contendo valores RGB ou HSL como "r: 255, g: 255, b: 255 }" ou "h: 0, s.": 0, l: .10 }`, que determina a cor ativa. Ambos aceitam uma propriedade `a' para valores alfa diferentes de um. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: controla se é necessário remover o controle deslizante alfa e as opções. Default: `false`.
* __presetColors__ | `array<string>`: HeX `trings` especificando as cores padrão na parte inferior do colorpicker. Default: `[
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
* __width__ | `number`: largura do colhedor de cores (em px). Default: `200`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onChange__ | `function`: chamada de retorno invocada toda vez que a cor é alterada. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: chamada de retorno invocada quando uma mudança de cor é concluída. Default: `onChangeComplete() {}`.


## Exemplos

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

