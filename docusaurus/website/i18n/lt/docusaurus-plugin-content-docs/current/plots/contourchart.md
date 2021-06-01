---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Kontūrinė diagrama.

## Parinktys

* __data__ | `object (required)`: kiekvieno kintamojo reikšmių masyvų objektas. Default: `none`.
* __x__ | `string (required)`: x ašies kintamasis. Default: `none`.
* __y__ | `string (required)`: y ašies kintamasis. Default: `none`.
* __overlayPoints__ | `boolean`: kontroliuoja, ar kiekvieno stebėjimo taškai turi būti uždengti.. Default: `false`.
* __smoothSpan__ | `number`: išlyginimo intervalas. Default: `0.66`.
* __regressionMethod__ | `array<string>`: masyvas, kuriame yra `linear` ir (arba) `smooth`, kad uždengtumėte tiesinę ir (arba) išlygintą regresijos liniją.. Default: `none`.
* __onSelected__ | `function`: atgalinis skambutis, inicijuojamas, kai pasirenkami taškai su x, y reikšmėmis ir pasirinktais taškais.. Default: `onSelected() {}`.


## Pavyzdžiai

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
