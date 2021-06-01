---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Tepelná mapa pro vizualizaci vztahu mezi dvěma proměnnými.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot pro každou proměnnou. Default: `none`.
* __x__ | `string (required)`: proměnná na ose x. Default: `none`.
* __y__ | `string (required)`: proměnná na ose y. Default: `none`.
* __group__ | `(string|Factor)`: seskupovací proměnná. Default: `none`.
* __overlayPoints__ | `boolean`: řídí, zda se mají překrývat body pro každé pozorování.. Default: `false`.
* __smoothSpan__ | `number`: rozpětí vyhlazování. Default: `0.66`.
* __regressionMethod__ | `array<string>`: pole obsahující `lineární` a/nebo `vyhlazené` pro překrytí lineární a/nebo vyhlazené regresní přímky.. Default: `none`.
* __alternateColor__ | `boolean`: kontroluje, zda se má pro tepelnou mapu použít alternativní barevné schéma.. Default: `false`.
* __commonXAxis__ | `boolean`: určuje, zda se má při vytváření více tepelných map na hodnotu seskupující proměnné použít společná osa x.. Default: `false`.
* __commonYAxis__ | `boolean`: určuje, zda se má při vytváření více tepelných map na hodnotu seskupující proměnné použít společná osa y.. Default: `false`.


## Příklady

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
