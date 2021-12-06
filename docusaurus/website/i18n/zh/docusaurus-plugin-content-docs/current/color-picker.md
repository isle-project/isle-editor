---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

一个[react-color](https://casesandberg.github.io/react-color/)颜色选择器的包装器。

## 选项

* __variant__ | `string`: 颜色选择器的变体（"紧凑"、"草图"、"材料"、"按钮 "或 "块状"）。. Default: `'Sketch'`.
* __color__ | `(string|object)`: `string 含有HeX代码或`object`含有RGB或HSL值，如`{ r: 255, g: 255, b: 255 }`或`{ h: 0, s. 0, l: .10 }`，它决定了活动颜色。0, l: .10 }`，它决定了活动颜色。两者都接受一个`a`属性，用于除一个以外的alpha值。. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: 控制是否删除alpha滑块和选项. Default: `false`.
* __presetColors__ | `array<string>`: HeX `strings`指定colorpicker底部的默认颜色。. Default: `[
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
* __width__ | `number`: 取色器的宽度(单位：px). Default: `200`.
* __className__ | `string`: 班名. Default: `''`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onChange__ | `function`: 每次改变颜色时都会调用回调. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: 在颜色改变完成后调用回调。. Default: `onChangeComplete() {}`.


## 例子

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

