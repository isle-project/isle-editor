---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

Viiulilooming.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __variable__ | `string (required)`: muutuja kuvamiseks. Default: `none`.
* __group__ | `(string|Factor)`: rühmitav muutuja. Default: `none`.
* __showBox__ | `boolean`: kontrollib, kas kuvada ruutdiagrammi sees. Default: `false`.


## Näited

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
