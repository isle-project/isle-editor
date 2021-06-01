---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

Smuiko siužetas.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __variable__ | `string (required)`: kintamasis rodomas. Default: `none`.
* __group__ | `(string|Factor)`: grupavimo kintamasis. Default: `none`.
* __showBox__ | `boolean`: kontroliuoja, ar rodyti dėžutės sklypą viduje.. Default: `false`.


## Pavyzdžiai

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
