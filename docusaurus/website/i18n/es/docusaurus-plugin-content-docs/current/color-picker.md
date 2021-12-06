---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

Un envoltorio para el selector de colores [react-color](https://casesandberg.github.io/react-color/).

## Opciones

* __variant__ | `string`: variante del selector de color (ya sea `Compact`, `Sketch`, `Material`, `Button` o `Block`). Default: `'Sketch'`.
* __color__ | `(string|object)`: "cadena" que contiene un código HeX o un "objeto" que contiene valores RGB o HSL como "r: 255, g: 255, b: 255" o "h: 0, s": 0, l: .10 }`, que determina el color activo. Ambos aceptan una propiedad "a" para los valores alfa que no sean uno. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: controla si se debe eliminar el deslizador alfa y las opciones. Default: `false`.
* __presetColors__ | `array<string>`: HeX "cuerdas" especificando los colores por defecto en la parte inferior del selector de colores. Default: `[
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
* __width__ | `number`: ancho del recolector de color (en px). Default: `200`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onChange__ | `function`: llamada de retorno invocada cada vez que se cambia de color. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: llamada de regreso invocada una vez que el cambio de color se ha completado. Default: `onChangeComplete() {}`.


## Ejemplos

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

