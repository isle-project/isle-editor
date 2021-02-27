---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Un componente de gráfico circular que por defecto muestra los recuentos de todas las categorías de una variable elegida.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __variable__ | `(string|Factor) (required)`: variable a mostrar. Default: `none`.
* __group__ | `(string|Factor)`: variable de agrupación. Default: `none`.
* __summaryVariable__ | `string`: variable opcional cuya suma para mostrar para cada categoría de "variable".... Default: `none`.


## Ejemplos

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
