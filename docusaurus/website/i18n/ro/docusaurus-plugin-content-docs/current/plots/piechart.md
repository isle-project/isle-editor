---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

O componentă de diagramă circulară care, în mod implicit, afișează numărul tuturor categoriilor dintr-o variabilă aleasă.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __variable__ | `(string|Factor) (required)`: variabilă pentru a afișa. Default: `none`.
* __group__ | `(string|Factor)`: variabilă de grupare. Default: `none`.
* __summaryVariable__ | `string`: variabilă opțională a cărei sumă trebuie afișată pentru fiecare categorie `variabilă`.. Default: `none`.


## Exemple

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
