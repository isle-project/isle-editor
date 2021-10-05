---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Egy szórásdiagram.

## Opciók

* __data__ | `object (required)`: az egyes változók értéktábláinak objektuma. Default: `none`.
* __xval__ | `string (required)`: az x-tengelyen megjelenítendő változó. Default: `none`.
* __yval__ | `string (required)`: az y-tengelyen megjelenítendő változó. Default: `none`.
* __text__ | `(string|Factor)`: az egyes pontok mellett megjelenítendő szövegek. Default: `none`.
* __color__ | `(string|Factor)`: kategorikus változó a pontok színéhez való hozzárendeléshez. Default: `none`.
* __type__ | `(string|Factor)`: kategorikus változó a megjelenített szimbólumokhoz való hozzárendeléshez. Default: `none`.
* __size__ | `string`: mennyiségi változó, amely a pontok méretét jelöli ki. Default: `none`.
* __regressionLine__ | `boolean`: szabályozza, hogy a regressziós vonal(ak) átfedésbe kerüljön(ek)-e. Default: `false`.
* __regressionMethod__ | `array<string>`: `linear` és/vagy `smooth` a lineáris regresszió és a simított LOWESS regressziós vonal megjelenítéséhez. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: külön regressziós egyenes megjelenítése a megadott kategorikus változó minden egyes kategóriájára vonatkozóan. Default: `none`.
* __smoothSpan__ | `number`: simítási tartomány paramétere a "sima" regressziós egyeneshez. Default: `0.66`.
* __jitterX__ | `boolean`: szabályozza, hogy az x-tengelyen lévő pontok jittereljenek-e.. Default: `false`.
* __jitterY__ | `boolean`: szabályozza, hogy az y-tengelyen lévő pontok jittereljenek-e.. Default: `false`.


## Példák

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
