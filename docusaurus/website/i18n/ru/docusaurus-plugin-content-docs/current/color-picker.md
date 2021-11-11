---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

Обертка для цветного пикера [реакторный цвет](https://casesandberg.github.io/react-color/).

## Варианты

* __variant__ | `string`: undefined. Default: `'Sketch'`.
* __color__ | `(string|object)`: `строка`, содержащая HeX-код или `объект`, содержащие RGB или HSL-значения, такие как { r: 255, g: 255, b: 255 }` или `{ h: 0, s: 0, l: .10 }`, что определяет активный цвет. Оба принимают свойство `a` для значений альфа, отличных от `a`. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: управляет удалением альфа-слайдера и опций. Default: `false`.
* __presetColors__ | `array<string>`: HeX `strings` с указанием цветов по умолчанию в нижней части цветовой палитры. Default: `[
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
* __width__ | `number`: ширина палитры цветов (в px). Default: `200`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onChange__ | `function`: обратный вызов при каждом изменении цвета. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: обратный вызов после завершения смены цвета. Default: `onChangeComplete() {}`.


## Примеры

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

