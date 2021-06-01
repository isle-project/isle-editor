---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

Zaplet za violino.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __variable__ | `string (required)`: spremenljivka za prikaz. Default: `none`.
* __group__ | `(string|Factor)`: spremenljivka za razvrščanje v skupine. Default: `none`.
* __showBox__ | `boolean`: nadzoruje, ali naj se znotraj prikaže okvirni diagram.. Default: `false`.


## Primeri

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Show Boxplot', value: 'showBox' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
/>
```
</TabItem>

<TabItem value="grouped">

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
    group="Drugs"
/>
```
</TabItem>

<TabItem value="showBox">

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
    showBox
/>
```

</TabItem>

</Tabs>
