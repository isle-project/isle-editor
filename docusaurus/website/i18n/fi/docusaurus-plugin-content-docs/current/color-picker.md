---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

Kääre [react-color](https://casesandberg.github.io/react-color/) -värinvalitsimelle.

## Vaihtoehdot

* __variant__ | `string`: värinvalitsimen variantti (joko `Compact`, `Sketch`, `Material`, `Button` tai `Block`).. Default: `'Sketch'`.
* __color__ | `(string|object)`: `merkkijono`, joka sisältää HeX-koodin tai `objekti`, joka sisältää RGB- tai HSL-arvoja, kuten `{ r: 255, g: 255, b: 255 }` tai `{ h: 0, s: 0, l: .10 }`, joka määrittää aktiivisen värin. Molemmat hyväksyvät `a`-ominaisuuden muille kuin yhden alfa-arvon arvoille.. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: valvoo, poistetaanko alfaliukusäädin ja vaihtoehdot.. Default: `false`.
* __presetColors__ | `array<string>`: HeX `merkkijonot`, jotka määrittelevät oletusvärit värivalitsimen alareunassa.. Default: `[
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
* __width__ | `number`: värivalitsimen leveys (px). Default: `200`.
* __className__ | `string`: luokan nimi. Default: `''`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onChange__ | `function`: callback kutsutaan joka kerta, kun väriä muutetaan. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: callback, jota kutsutaan, kun värinmuutos on valmis.. Default: `onChangeComplete() {}`.


## Esimerkkejä

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

