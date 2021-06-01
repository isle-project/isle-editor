---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Korkeuskäyrästö.

## Vaihtoehdot

* __data__ | `object (required)`: kunkin muuttujan arvomääritysten objekti. Default: `none`.
* __x__ | `string (required)`: x-akselin muuttuja. Default: `none`.
* __y__ | `string (required)`: y-akselin muuttuja. Default: `none`.
* __overlayPoints__ | `boolean`: ohjaa, asetetaanko kunkin havainnon pisteet päällekkäin. Default: `false`.
* __smoothSpan__ | `number`: tasoitusväli. Default: `0.66`.
* __regressionMethod__ | `array<string>`: array, joka sisältää `linear` ja/tai `smooth`, lineaarisen ja/tai tasoitetun regressiosuoran asettamiseksi päälle.. Default: `none`.
* __onSelected__ | `function`: callback kutsutaan, kun pisteitä valitaan x- ja y-arvoilla ja valitut pisteet valitaan. Default: `onSelected() {}`.


## Esimerkkejä

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Overlay Points', value: 'overlayPoints' },
        { label: 'Regression Method', value: 'regressionMethod' },
        { label: 'Smooth Span', value: 'smoothSpan' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ContourChart 
    data={heartdisease} 
    x="Age"
    y="Cost"
/>
```

</TabItem>

<TabItem value="overlayPoints">

```jsx live
<ContourChart 
    overlayPoints 
    data={heartdisease} 
    x="ERVisit"
    y="Duration"
/>
```

</TabItem>

<TabItem value="regressionMethod">

```jsx live
<ContourChart 
    overlayPoints 
    regressionMethod={['smooth', 'linear']}
    data={heartdisease} 
    x="ERVisit"
    y="Duration"
/>
```

</TabItem>

<TabItem value="smoothSpan">

```jsx live
<ContourChart 
    overlayPoints 
    regressionMethod={['smooth', 'linear']}
    data={heartdisease} 
    x="ERVisit"
    y="Duration"
    smoothSpan={.12}
/>
```

</TabItem>

</Tabs>
