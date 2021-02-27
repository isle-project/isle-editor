---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Een taartdiagramcomponent die standaard de tellingen van alle categorieën van een gekozen variabele weergeeft.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __variable__ | `(string|Factor) (required)`: weer te geven variabele. Default: `none`.
* __group__ | `(string|Factor)`: groepsvariabele. Default: `none`.
* __summaryVariable__ | `string`: facultatieve variabele waarvan de som voor elke `variabele` categorie moet worden weergegeven. Default: `none`.


## Voorbeelden

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
