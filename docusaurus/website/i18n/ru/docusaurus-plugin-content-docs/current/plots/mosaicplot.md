---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Мозаичный сюжет.

## Варианты

* __data__ | `object (required)`: массивы значений для каждой переменной. Default: `none`.
* __variables__ | `array (required)`: массив переменных для отображения. Default: `none`.
* __showColors__ | `boolean`: управляет отображением цветов, показывающих значение. Default: `false`.
* __axisLabels__ | `string`: позиционирование меток осей (либо `параллельно оси`, `горизонтально`, `перпендикулярно оси`, либо `вертикально`). Default: `'parallel to the axis'`.


## Примеры

## Examples

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
/>
```
