---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Компонент на кръгова диаграма, който по подразбиране показва броя на всички категории от избрана променлива.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __variable__ | `(string|Factor) (required)`: променлива за показване. Default: `none`.
* __group__ | `(string|Factor)`: променлива за групиране. Default: `none`.
* __summaryVariable__ | `string`: незадължителна променлива, чиято сума да се показва за всяка категория `променлива`. Default: `none`.


## Примери

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
