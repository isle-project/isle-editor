---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Diagram razpršitve.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti za vsako spremenljivko. Default: `none`.
* __xval__ | `string (required)`: spremenljivka za prikaz na osi x. Default: `none`.
* __yval__ | `string (required)`: spremenljivka za prikaz na osi y. Default: `none`.
* __text__ | `(string|Factor)`: besedila, ki se prikažejo ob vsaki točki.. Default: `none`.
* __color__ | `(string|Factor)`: kategorična spremenljivka za preslikavo na barvo točk. Default: `none`.
* __type__ | `(string|Factor)`: kategorična spremenljivka za preslikavo na prikazane simbole.. Default: `none`.
* __size__ | `string`: kvantitativna spremenljivka za preslikavo na velikost točk. Default: `none`.
* __regressionLine__ | `boolean`: določa, ali naj se prekrijejo regresijske črte.. Default: `false`.
* __regressionMethod__ | `array<string>`: `linear` in/ali `smooth` za prikaz linearne regresije in zglajene regresijske linije LOWESS. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: prikaz ločene regresijske črte za vsako kategorijo določene kategorične spremenljivke. Default: `none`.
* __smoothSpan__ | `number`: parameter razpona glajenja za `gladko´ regresijsko linijo. Default: `0.66`.
* __jitterX__ | `boolean`: nadzira, ali naj se točke na osi x tresejo.. Default: `false`.
* __jitterY__ | `boolean`: nadzira, ali naj se točke na osi y tresejo.. Default: `false`.


## Primeri

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
