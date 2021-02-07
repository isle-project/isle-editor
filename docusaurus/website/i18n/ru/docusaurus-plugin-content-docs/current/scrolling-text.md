---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Динамическая фоновая составляющая, проходящая через список текстов с заданным интервалом.

## Options

* __list__ | `array<string>`: список текстов для отображения. Default: `[]`.
* __loop__ | `boolean`: указывает, будет ли процесс отображаться бесконечно. Default: `false`.
* __direction__ | `string`: направление потока текста (либо `лево`, `право`, `вверх`, `вниз`, `трекинг`, `фокус`, либо `вихрь`).. Default: `'right'`.
* __still__ | `number`: время, в течение которого текст остается неподвижным (в секундах).. Default: `3`.
* __interval__ | `number`: интервал между вызовами (в секундах). Default: `15`.
* __inTime__ | `number`: время входного эффекта (в секундах). Default: `0.6`.
* __outTime__ | `number`: время эффекта выхода (в секундах). Default: `1`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: CSS-стили текста. Default: `{}`.


## Examples

```jsx live
<ScrollingText
    list={[ 'Heading' ]}
    style={{ fontSize: 44, color: 'red' }}
    interval={5}
    inTime={1.2}
    outTime={1.2}
    still={2}
/>
```



