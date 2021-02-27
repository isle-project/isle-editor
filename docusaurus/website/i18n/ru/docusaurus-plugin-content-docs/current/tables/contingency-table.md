---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Таблица непредвиденных обстоятельств.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __rowVar__ | `string (required)`: имя переменной строки. Default: `none`.
* __colVar__ | `string (required)`: имя столбцовой переменной. Default: `none`.
* __relativeFreqs__ | `boolean`: управляет отображением относительных частот. Default: `false`.
* __group__ | `(string|Factor)`: имя группирующей переменной. Default: `none`.
* __display__ | `array<string>`: отображать ли на экране `Строка процентов` и/или `Строка процентов`.. Default: `[]`.
* __nDecimalPlaces__ | `number`: количество знаков после запятой для относительных частот, отображаемых в таблице. Default: `3`.


## Примеры

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Gender"
    colVar="Drugs"
/>
```
