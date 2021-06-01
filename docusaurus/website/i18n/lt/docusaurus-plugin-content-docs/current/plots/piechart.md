---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Skritulinės diagramos komponentas, kuris pagal numatytuosius nustatymus rodo visų pasirinkto kintamojo kategorijų skaičių.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __variable__ | `(string|Factor) (required)`: kintamasis rodomas. Default: `none`.
* __group__ | `(string|Factor)`: grupavimo kintamasis. Default: `none`.
* __summaryVariable__ | `string`: neprivalomas kintamasis, kurio sumą reikia rodyti kiekvienai `kintamojo` kategorijai.. Default: `none`.


## Pavyzdžiai

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
