---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Lämpökartta kahden muuttujan välisen suhteen visualisoimiseksi.

## Vaihtoehdot

* __data__ | `object (required)`: kunkin muuttujan arvomääritysten objekti. Default: `none`.
* __x__ | `string (required)`: x-akselin muuttuja. Default: `none`.
* __y__ | `string (required)`: y-akselin muuttuja. Default: `none`.
* __group__ | `(string|Factor)`: ryhmittelymuuttuja. Default: `none`.
* __overlayPoints__ | `boolean`: ohjaa, asetetaanko kunkin havainnon pisteet päällekkäin. Default: `false`.
* __smoothSpan__ | `number`: tasoitusväli. Default: `0.66`.
* __regressionMethod__ | `array<string>`: array, joka sisältää `linear` ja/tai `smooth`, lineaarisen ja/tai tasoitetun regressiosuoran asettamiseksi päälle.. Default: `none`.
* __alternateColor__ | `boolean`: valvoo, käytetäänkö lämpökartassa vaihtoehtoista värimaailmaa.. Default: `false`.
* __commonXAxis__ | `boolean`: valvoo, käytetäänkö yhteistä x-akselia, kun luodaan useita lämpökarttoja ryhmittelymuuttujan arvoa kohti.. Default: `false`.
* __commonYAxis__ | `boolean`: valvoo, käytetäänkö yhteistä y-akselia, kun luodaan useita lämpökarttoja ryhmittelymuuttujan arvoa kohti.. Default: `false`.


## Esimerkkejä

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
