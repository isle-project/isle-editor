---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Een warmtekaart voor het visualiseren van een relatie tussen twee variabelen.

## Opties

* __data__ | `object (required)`: object of value arrays voor elke variabele. Default: `none`.
* __x__ | `string (required)`: x-asvariabele. Default: `none`.
* __y__ | `string (required)`: y-asvariabele. Default: `none`.
* __group__ | `(string|Factor)`: groeperingsvariabele. Default: `none`.
* __overlayPoints__ | `boolean`: controleert of de punten voor elke waarneming worden overlapt. Default: `false`.
* __smoothSpan__ | `number`: afvlakkingsspanne. Default: `0.66`.
* __regressionMethod__ | `array<string>`: array met `lineair` en/of `vloeiend` om een lineaire en/of afgevlakte regressielijn te bedekken. Default: `none`.
* __alternateColor__ | `boolean`: controleert of er een alternatief kleurenschema voor de warmtekaart moet worden gebruikt. Default: `false`.
* __commonXAxis__ | `boolean`: bepaalt of er een gemeenschappelijke x-as moet worden gebruikt bij het maken van meerdere warmtekaarten per waarde van een groepsvariabele. Default: `false`.
* __commonYAxis__ | `boolean`: bepaalt of een gemeenschappelijke y-as moet worden gebruikt bij het maken van meerdere warmtekaarten per waarde van een groepsvariabele. Default: `false`.


## Voorbeelden

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Group', value: 'withGroup' },
        { label: 'Alternate Color', value: 'alternateColor' },
        { label: 'Overlay Points', value: 'overlayPoints' },
        { label: 'Regression Method', value: 'regressionMethod' },
    ]}
    lazy
>



<TabItem value="minimal">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
/>
```

</TabItem>


<TabItem value="withGroup">

```jsx live
<HeatMap 
    alternateColor
    group="Gender"
    data={heartdisease} 
    x="Interventions"
    y="Age"
    commonXAxis
/>
```

</TabItem>

<TabItem value="alternateColor">

```jsx live
<HeatMap 
    alternateColor
    group="Gender"
    data={heartdisease} 
    x="Interventions"
    y="Age"
    commonXAxis
/>
```

</TabItem>

<TabItem value="overlayPoints">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
    overlayPoints 
/>
```

</TabItem>


<TabItem value="regressionMethod">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
    regressionMethod={[ 'linear', 'smooth' ]} 
/>
```

</TabItem>

</Tabs>
