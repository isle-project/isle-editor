---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Et konturkort.

## Indstillinger

* __data__ | `object (required)`: objekt med værdiarrays for hver variabel. Default: `none`.
* __x__ | `string (required)`: x-aksen variabel. Default: `none`.
* __y__ | `string (required)`: y-aksen variabel. Default: `none`.
* __overlayPoints__ | `boolean`: styrer, om der skal overlejres punkter for hver observation. Default: `false`.
* __smoothSpan__ | `number`: udjævningsspændvidde. Default: `0.66`.
* __regressionMethod__ | `array<string>`: array, der indeholder `linear` og/eller `smooth` for at lægge en lineær og/eller udjævnet regressionslinje over. Default: `none`.
* __onSelected__ | `function`: callback, der påkaldes, når der vælges punkter med x- og y-værdier og de valgte punkter. Default: `onSelected() {}`.


## Eksempler

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
