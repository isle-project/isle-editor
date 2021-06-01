---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

Un complot de vioară.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __variable__ | `string (required)`: variabilă pentru a afișa. Default: `none`.
* __group__ | `(string|Factor)`: variabilă de grupare. Default: `none`.
* __showBox__ | `boolean`: controlează dacă se afișează sau nu un box plot în interiorul. Default: `false`.


## Exemple

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
