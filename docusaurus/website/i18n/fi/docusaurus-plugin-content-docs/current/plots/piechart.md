---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Piirakkakaavio-komponentti, joka näyttää oletusarvoisesti kaikkien luokkien lukumäärät valitusta muuttujasta.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __variable__ | `(string|Factor) (required)`: muuttuja näyttää. Default: `none`.
* __group__ | `(string|Factor)`: ryhmittelymuuttuja. Default: `none`.
* __summaryVariable__ | `string`: valinnainen muuttuja, jonka summa näytetään kunkin `muuttujan` luokan osalta.. Default: `none`.


## Esimerkkejä

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
