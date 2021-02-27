---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Компонент круговой диаграммы, который по умолчанию отображает количество всех категорий из выбранной переменной.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __variable__ | `(string|Factor) (required)`: переменная для отображения. Default: `none`.
* __group__ | `(string|Factor)`: переменная группировки. Default: `none`.
* __summaryVariable__ | `string`: необязательная переменная, сумма которой должна отображаться для каждой категории "Переменная".. Default: `none`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Summary Variable', value: 'summaryVariable' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
    group="Gender"
/>
```

</TabItem>

<TabItem value="summaryVariable">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
    summaryVariable="Cost"
/>
```

</TabItem>

</Tabs>
