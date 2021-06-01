---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

En värmekarta för att visualisera ett samband mellan två variabler.

## Alternativ

* __data__ | `object (required)`: objekt med värdematriser för varje variabel. Default: `none`.
* __x__ | `string (required)`: Variabel på x-axeln. Default: `none`.
* __y__ | `string (required)`: Variabel på y-axeln. Default: `none`.
* __group__ | `(string|Factor)`: grupperingsvariabel. Default: `none`.
* __overlayPoints__ | `boolean`: kontrollerar om punkterna för varje observation ska överlagras eller inte. Default: `false`.
* __smoothSpan__ | `number`: utjämningsområde. Default: `0.66`.
* __regressionMethod__ | `array<string>`: matris som innehåller `linear` och/eller `smooth` för att lägga över en linjär och/eller utjämnad regressionslinje.. Default: `none`.
* __alternateColor__ | `boolean`: Kontrollerar om ett alternativt färgschema ska användas för värmekartan.. Default: `false`.
* __commonXAxis__ | `boolean`: Kontrollerar om en gemensam x-axel ska användas när flera värmekartor skapas per värde för en grupperingsvariabel.. Default: `false`.
* __commonYAxis__ | `boolean`: Kontrollerar om en gemensam y-axel ska användas när flera värmekartor skapas per värde för en grupperingsvariabel.. Default: `false`.


## Exempel

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
