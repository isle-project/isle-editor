---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Komponent koláčového grafu, ktorý štandardne zobrazuje počty všetkých kategórií z vybranej premennej.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __variable__ | `(string|Factor) (required)`: premenná na zobrazenie. Default: `none`.
* __group__ | `(string|Factor)`: zoskupovanie premenných. Default: `none`.
* __summaryVariable__ | `string`: voliteľná premenná, ktorej súčet sa má zobraziť pre každú kategóriu `premenná`. Default: `none`.


## Príklady

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
