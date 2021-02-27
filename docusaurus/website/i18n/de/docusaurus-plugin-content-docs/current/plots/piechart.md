---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Eine Tortendiagramm-Komponente, die standardmäßig die Anzahl aller Kategorien einer ausgewählten Variablen anzeigt.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __variable__ | `(string|Factor) (required)`: Variable zur Anzeige. Default: `none`.
* __group__ | `(string|Factor)`: Gruppierungsvariable. Default: `none`.
* __summaryVariable__ | `string`: optionale Variable, deren Summe für jede `Variable`-Kategorie angezeigt werden soll. Default: `none`.


## Beispiele

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
