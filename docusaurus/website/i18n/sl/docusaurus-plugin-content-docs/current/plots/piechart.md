---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Komponenta krožnega diagrama, ki privzeto prikazuje število vseh kategorij iz izbrane spremenljivke.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __variable__ | `(string|Factor) (required)`: spremenljivka za prikaz. Default: `none`.
* __group__ | `(string|Factor)`: spremenljivka za razvrščanje v skupine. Default: `none`.
* __summaryVariable__ | `string`: neobvezna spremenljivka, katere vsota se prikaže za vsako kategorijo `spremenljivka`.. Default: `none`.


## Primeri

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
