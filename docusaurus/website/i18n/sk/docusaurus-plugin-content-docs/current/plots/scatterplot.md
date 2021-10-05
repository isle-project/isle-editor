---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Graf rozptylu.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt pre každú premennú. Default: `none`.
* __xval__ | `string (required)`: premenná, ktorá sa má zobraziť na osi x. Default: `none`.
* __yval__ | `string (required)`: premenná, ktorá sa má zobraziť na osi y. Default: `none`.
* __text__ | `(string|Factor)`: texty, ktoré sa zobrazia pri každom bode. Default: `none`.
* __color__ | `(string|Factor)`: kategorická premenná na mapovanie farby bodov. Default: `none`.
* __type__ | `(string|Factor)`: kategorická premenná, ktorá sa má priradiť k zobrazeným symbolom. Default: `none`.
* __size__ | `string`: kvantitatívna premenná, ktorá sa má priradiť k veľkosti bodov. Default: `none`.
* __regressionLine__ | `boolean`: kontroluje, či sa má prekryť regresná čiara (čiary). Default: `false`.
* __regressionMethod__ | `array<string>`: `linear` a/alebo `smooth` na zobrazenie lineárnej regresie a vyhladenej regresnej priamky LOWESS. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: zobrazenie samostatnej regresnej priamky pre každú kategóriu zadanej kategorickej premennej. Default: `none`.
* __smoothSpan__ | `number`: parameter vyhladzovacieho rozpätia pre regresnú priamku `smooth`. Default: `0.66`.
* __jitterX__ | `boolean`: kontroluje, či sa majú body na osi x rozkolísať.. Default: `false`.
* __jitterY__ | `boolean`: kontroluje, či sa majú body na osi y roztriasť.. Default: `false`.


## Príklady

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
