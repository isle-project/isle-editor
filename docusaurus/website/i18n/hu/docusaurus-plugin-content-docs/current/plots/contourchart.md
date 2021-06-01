---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Kontúrtáblázat.

## Opciók

* __data__ | `object (required)`: az egyes változók értéktábláinak objektuma. Default: `none`.
* __x__ | `string (required)`: x-tengelyű változó. Default: `none`.
* __y__ | `string (required)`: y-tengely változó. Default: `none`.
* __overlayPoints__ | `boolean`: szabályozza, hogy az egyes megfigyelésekhez tartozó pontokat átfedje-e. Default: `false`.
* __smoothSpan__ | `number`: simítási tartomány. Default: `0.66`.
* __regressionMethod__ | `array<string>`: "lineáris" és/vagy "simított" tömböt tartalmazó tömb egy lineáris és/vagy simított regressziós egyenes átlapolásához. Default: `none`.
* __onSelected__ | `function`: callback hívás, amikor a pontok x, y értékekkel vannak kijelölve és a kijelölt pontok. Default: `onSelected() {}`.


## Példák

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
