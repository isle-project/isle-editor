---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Um componente de gráfico de torta que, por padrão, exibe as contagens de todas as categorias de uma variável escolhida.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __variable__ | `(string|Factor) (required)`: variável a exibir. Default: `none`.
* __group__ | `(string|Factor)`: variável de agrupamento. Default: `none`.
* __summaryVariable__ | `string`: variável opcional cuja soma a exibir para cada categoria "variável. Default: `none`.


## Exemplos

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
