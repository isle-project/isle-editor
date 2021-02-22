---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Компонент круговой диаграммы, который по умолчанию отображает количество всех категорий из выбранной переменной.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __variable__ | `string (required)`: переменная для отображения. Default: `none`.
* __group__ | `string`: переменная группировки. Default: `none`.
* __summaryVariable__ | `string`: необязательная переменная, сумма которой должна отображаться для каждой категории "Переменная".. Default: `none`.


## Примеры

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

