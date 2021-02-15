---
id: boxplot
title: Box Plot
sidebar_label: Box Plot
---

Fabuła pudełkowa.

## Options

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __variable__ | `(array|string) (required)`: zmienna do wyświetlania. Default: `none`.
* __group__ | `array`: jedna lub dwie zmienne grupowania. Default: `[]`.
* __orientation__ | `string`: `w orientacji pionowej` lub `poziomej`. Default: `'vertical'`.
* __overlayPoints__ | `boolean`: kontroluje czy nakładać punkty. Default: `false`.


## Examples

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable="Cost"
/>
```

