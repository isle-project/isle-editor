---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Šilumos žemėlapis, skirtas dviejų kintamųjų ryšiui vizualizuoti.

## Parinktys

* __data__ | `object (required)`: kiekvieno kintamojo reikšmių masyvų objektas. Default: `none`.
* __x__ | `string (required)`: x ašies kintamasis. Default: `none`.
* __y__ | `string (required)`: y ašies kintamasis. Default: `none`.
* __group__ | `(string|Factor)`: grupavimo kintamasis. Default: `none`.
* __overlayPoints__ | `boolean`: kontroliuoja, ar kiekvieno stebėjimo taškai turi būti uždengti.. Default: `false`.
* __smoothSpan__ | `number`: išlyginimo intervalas. Default: `0.66`.
* __regressionMethod__ | `array<string>`: masyvas, kuriame yra `linear` ir (arba) `smooth`, kad uždengtumėte tiesinę ir (arba) išlygintą regresijos liniją.. Default: `none`.
* __alternateColor__ | `boolean`: kontroliuoja, ar naudoti alternatyvią spalvų schemą šilumos žemėlapyje.. Default: `false`.
* __commonXAxis__ | `boolean`: kontroliuoja, ar kurti kelis šilumos žemėlapius pagal grupuojančio kintamojo vertę, ar naudoti bendrą x ašį.. Default: `false`.
* __commonYAxis__ | `boolean`: kontroliuoja, ar kurti kelis šilumos žemėlapius pagal grupuojančio kintamojo vertę, ar naudoti bendrą y ašį.. Default: `false`.


## Pavyzdžiai

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
    data={heartdisease} 
    x="Interventions"
    y="Age"
    group="Gender"
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
