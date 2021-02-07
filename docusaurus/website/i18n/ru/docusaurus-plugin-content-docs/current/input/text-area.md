---
id: text-area
title: Text Area
sidebar_label: Text Area
---

Компонент текстовой области. Используется как отдельный компонент, изменения должны обрабатываться через атрибут `onChange`.

## Options

* __defaultValue__ | `string`: стандартное значение текстовой области. Default: `''`.
* __value__ | `string`: текстовое значение (для контролируемого компонента). Default: `none`.
* __disabled__ | `boolean`: контролирует, должна ли быть отключена текстовая область. Default: `false`.
* __legend__ | `(string|node)`: текст легенды. Default: `''`.
* __onBlur__ | `function`: функция обратного вызова вызывается при потере фокуса текстовой области. Default: `onBlur() {}`.
* __onChange__ | `function`: функция обратного вызова, вызываемая с новым текстом при изменении текста области. Default: `onChange() {}`.
* __placeholder__ | `string`: текст заполнителя. Default: `none`.
* __resizable__ | `string`: контролирует, должна ли текстовая область быть изменена по размеру (может быть `зубчатой`, `горизонтальной`, `вертикальной` или `нет`).. Default: `'none'`.
* __rows__ | `number`: количество рядов. Default: `5`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Examples

```jsx live
<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
/>
```



