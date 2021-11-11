---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

Un emballage pour le sélecteur de couleurs [react-color](https://casesandberg.github.io/react-color/).

## Options

* __variant__ | `string`: undefined. Default: `'Sketch'`.
* __color__ | `(string|object)`: une "chaîne" contenant un code HeX ou un "objet" contenant des valeurs RGB ou HSL telles que "r : 255, g : 255, b : 255" ou "h : 0, s : 0, l : .10 }`, qui détermine la couleur active. Les deux acceptent une propriété `a` pour les valeurs alpha autres que. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: contrôle la suppression éventuelle du curseur alpha et des options. Default: `false`.
* __presetColors__ | `array<string>`: HeX `strings` spécifiant les couleurs par défaut au bas du colorpicker. Default: `[
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
* __width__ | `number`: largeur du sélecteur de couleurs (en px). Default: `200`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onChange__ | `function`: rappel invoqué à chaque fois que la couleur est changée. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: rappel invoqué une fois le changement de couleur terminé. Default: `onChangeComplete() {}`.


## Exemples

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

