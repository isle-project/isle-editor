---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Hőtérkép két változó közötti kapcsolat megjelenítésére.

## Opciók

* __data__ | `object (required)`: az egyes változók értéktábláinak objektuma. Default: `none`.
* __x__ | `string (required)`: x-tengelyű változó. Default: `none`.
* __y__ | `string (required)`: y-tengely változó. Default: `none`.
* __group__ | `(string|Factor)`: csoportosító változó. Default: `none`.
* __overlayPoints__ | `boolean`: szabályozza, hogy az egyes megfigyelésekhez tartozó pontokat átfedje-e. Default: `false`.
* __smoothSpan__ | `number`: simítási tartomány. Default: `0.66`.
* __regressionMethod__ | `array<string>`: "lineáris" és/vagy "simított" tömböt tartalmazó tömb egy lineáris és/vagy simított regressziós egyenes átlapolásához. Default: `none`.
* __alternateColor__ | `boolean`: szabályozza, hogy használjon-e alternatív színsémát a hőtérképhez.. Default: `false`.
* __commonXAxis__ | `boolean`: szabályozza, hogy egy közös x-tengelyt használjon-e, amikor több hőtérképet hoz létre egy csoportosító változó értékénként.. Default: `false`.
* __commonYAxis__ | `boolean`: szabályozza, hogy egy csoportosító változó értékenként több hőtérkép létrehozásakor használjon-e közös y-tengelyt.. Default: `false`.


## Példák

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
