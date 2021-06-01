---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Toplotni zemljevid za vizualizacijo razmerja med dvema spremenljivkama.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti za vsako spremenljivko. Default: `none`.
* __x__ | `string (required)`: spremenljivka na osi x. Default: `none`.
* __y__ | `string (required)`: spremenljivka na osi y. Default: `none`.
* __group__ | `(string|Factor)`: spremenljivka za razvrščanje v skupine. Default: `none`.
* __overlayPoints__ | `boolean`: nadzoruje, ali naj se prekrijejo točke za vsako opazovanje.. Default: `false`.
* __smoothSpan__ | `number`: razpon glajenja. Default: `0.66`.
* __regressionMethod__ | `array<string>`: polje, ki vsebuje `linearno` in/ali `gladko` za prekrivanje linearne in/ali glajene regresijske linije. Default: `none`.
* __alternateColor__ | `boolean`: nadzoruje, ali naj se za toplotni zemljevid uporabi alternativna barvna shema.. Default: `false`.
* __commonXAxis__ | `boolean`: nadzira, ali naj se pri ustvarjanju več toplotnih zemljevidov na vrednost spremenljivke za združevanje uporabi skupna os x.. Default: `false`.
* __commonYAxis__ | `boolean`: nadzira, ali naj se pri ustvarjanju več toplotnih zemljevidov na vrednost spremenljivke za združevanje uporabi skupna os y.. Default: `false`.


## Primeri

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
