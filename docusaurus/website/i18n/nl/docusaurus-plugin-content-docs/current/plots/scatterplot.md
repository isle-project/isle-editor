---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Berekent de minimale en maximale waarde van een array.

## Opties

* __data__ | `object (required)`: object of value arrays voor elke variabele. Default: `none`.
* __xval__ | `string (required)`: variabele voor weergave op de x-as. Default: `none`.
* __yval__ | `string (required)`: variabele voor weergave op de y-as. Default: `none`.
* __text__ | `(string|Factor)`: Teksten die naast elk punt moeten worden weergegeven. Default: `none`.
* __color__ | `(string|Factor)`: categorische variabele om de kleur van de punten in kaart te brengen. Default: `none`.
* __type__ | `(string|Factor)`: categorische variabele om de weergegeven symbolen in kaart te brengen. Default: `none`.
* __size__ | `string`: kwantitatieve variabele om de grootte van de punten in kaart te brengen. Default: `none`.
* __regressionLine__ | `boolean`: controleert of de regressielijn(en) moet(en) worden overlapt. Default: `false`.
* __regressionMethod__ | `array<string>`: Lineair` en/of `vloeiend` om lineaire regressie en gladgestreken LAGE regressielijn weer te geven. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: een aparte regressielijn weergeven voor elke categorie van de gespecificeerde categorische variabele. Default: `none`.
* __smoothSpan__ | `number`: afvlakkingsspanningsparameter voor `vloeiende` regressielijn. Default: `0.66`.
* __jitterX__ | `boolean`: bepaalt of punten op de x-as jitter moeten krijgen. Default: `false`.
* __jitterY__ | `boolean`: bepaalt of punten op de y-as jitter moeten krijgen. Default: `false`.


## Voorbeelden

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
