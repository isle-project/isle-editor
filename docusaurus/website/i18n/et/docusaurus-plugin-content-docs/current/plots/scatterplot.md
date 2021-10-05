---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Hajutuste graafik.

## Valikud

* __data__ | `object (required)`: iga muutuja väärtuste massiivi objekt. Default: `none`.
* __xval__ | `string (required)`: x-teljel kuvatav muutuja. Default: `none`.
* __yval__ | `string (required)`: y-teljel kuvatav muutuja. Default: `none`.
* __text__ | `(string|Factor)`: iga punkti kõrval kuvatavad tekstid. Default: `none`.
* __color__ | `(string|Factor)`: kategooriline muutuja, mis vastab punktide värvusele. Default: `none`.
* __type__ | `(string|Factor)`: kategooriline muutuja, mis vastab kuvatavatele sümbolitele. Default: `none`.
* __size__ | `string`: kvantitatiivne muutuja, mis vastab punktide suurusele. Default: `none`.
* __regressionLine__ | `boolean`: kontrollib, kas regressioonijoone(te) üle kanda.. Default: `false`.
* __regressionMethod__ | `array<string>`: `linear` ja/või `smooth` lineaarse regressiooni ja silutud LOWESS regressioonijoone kuvamiseks. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: kuvada eraldi regressioonijooned iga määratud kategoorilise muutuja kategooria kohta. Default: `none`.
* __smoothSpan__ | `number`: silumisvahemiku parameeter "sileda" regressioonijoone jaoks. Default: `0.66`.
* __jitterX__ | `boolean`: kontrollib, kas x-telje punkte jitteritakse.. Default: `false`.
* __jitterY__ | `boolean`: kontrollib, kas y-telje punkte jitteritakse.. Default: `false`.


## Näited

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Colored', value: 'colored' },
        { label: 'Type', value: 'type' },
        { label: 'Regression Line', value: 'regressionLine' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Cost"
/>
```

</TabItem>


<TabItem value="grouped">

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
    group="Gender"
/>
```

</TabItem>

<TabItem value="colored">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Cost"
    color="Gender"
/>
```
</TabItem>

<TabItem value="type">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Interventions"
    color="Gender"
    type="Gender"
/>
```

</TabItem>

<TabItem value="regressionLine">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Interventions"
    regressionLine
    regressionMethod={['smooth']}
/>
```
</TabItem>

</Tabs>
