---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Sklaidos diagrama.

## Parinktys

* __data__ | `object (required)`: kiekvieno kintamojo reikšmių masyvų objektas. Default: `none`.
* __xval__ | `string (required)`: kintamasis, rodomas x ašyje. Default: `none`.
* __yval__ | `string (required)`: kintamasis, rodomas y ašyje. Default: `none`.
* __text__ | `(string|Factor)`: šalia kiekvieno taško rodomi tekstai. Default: `none`.
* __color__ | `(string|Factor)`: kategorinis kintamasis, kurį galima priskirti taškų spalvai. Default: `none`.
* __type__ | `(string|Factor)`: kategorinis kintamasis, kurį reikia priskirti rodomiems simboliams.. Default: `none`.
* __size__ | `string`: kiekybinis kintamasis, kuris atitinka taškų dydį.. Default: `none`.
* __regressionLine__ | `boolean`: kontroliuoja, ar uždėti regresijos liniją (-es).. Default: `false`.
* __regressionMethod__ | `array<string>`: `linear` ir (arba) `smooth`, jei norite rodyti tiesinę regresiją ir išlygintą LOWESS regresijos liniją. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: rodyti atskirą regresijos liniją kiekvienai nurodyto kategorinio kintamojo kategorijai.. Default: `none`.
* __smoothSpan__ | `number`: išlyginamojo intervalo parametras `smooth` regresijos linijai. Default: `0.66`.
* __jitterX__ | `boolean`: kontroliuoja, ar x ašies taškai turi būti drebinami.. Default: `false`.
* __jitterY__ | `boolean`: kontroliuoja, ar reikia drebinti y ašies taškus.. Default: `false`.


## Pavyzdžiai

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
