---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Et varmekort til at visualisere en sammenhæng mellem to variabler.

## Indstillinger

* __data__ | `object (required)`: objekt med værdiarrays for hver variabel. Default: `none`.
* __x__ | `string (required)`: x-aksen variabel. Default: `none`.
* __y__ | `string (required)`: y-aksen variabel. Default: `none`.
* __group__ | `(string|Factor)`: grupperingsvariabel. Default: `none`.
* __overlayPoints__ | `boolean`: styrer, om der skal overlejres punkter for hver observation. Default: `false`.
* __smoothSpan__ | `number`: udjævningsspændvidde. Default: `0.66`.
* __regressionMethod__ | `array<string>`: array, der indeholder `linear` og/eller `smooth` for at lægge en lineær og/eller udjævnet regressionslinje over. Default: `none`.
* __alternateColor__ | `boolean`: styrer, om der skal anvendes et alternativt farveskema til varmekortet. Default: `false`.
* __commonXAxis__ | `boolean`: styrer, om der skal bruges en fælles x-akse, når der oprettes flere varmekort pr. værdi af en grupperingsvariabel. Default: `false`.
* __commonYAxis__ | `boolean`: styrer, om der skal bruges en fælles y-akse, når der oprettes flere varmekort pr. værdi af en grupperingsvariabel. Default: `false`.


## Eksempler

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
