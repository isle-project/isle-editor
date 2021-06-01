---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Tordiagrammi komponent, mis vaikimisi kuvab kõikide kategooriate arvu valitud muutujast.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __variable__ | `(string|Factor) (required)`: muutuja kuvamiseks. Default: `none`.
* __group__ | `(string|Factor)`: rühmitav muutuja. Default: `none`.
* __summaryVariable__ | `string`: valikuline muutuja, mille summa kuvatakse iga "muutuja" kategooria kohta. Default: `none`.


## Näited

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
