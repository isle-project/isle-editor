---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Teplotná mapa na vizualizáciu vzťahu medzi dvoma premennými.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt pre každú premennú. Default: `none`.
* __x__ | `string (required)`: Premenná na osi x. Default: `none`.
* __y__ | `string (required)`: premenná na osi y. Default: `none`.
* __group__ | `(string|Factor)`: zoskupovanie premenných. Default: `none`.
* __overlayPoints__ | `boolean`: kontroluje, či sa majú prekrývať body pre každé pozorovanie.. Default: `false`.
* __smoothSpan__ | `number`: vyhladzovacie rozpätie. Default: `0.66`.
* __regressionMethod__ | `array<string>`: pole obsahujúce `lineárne` a/alebo `vyhladené` na prekrytie lineárnej a/alebo vyhladenej regresnej priamky. Default: `none`.
* __alternateColor__ | `boolean`: kontroluje, či sa má pre tepelnú mapu použiť alternatívna farebná schéma.. Default: `false`.
* __commonXAxis__ | `boolean`: kontroluje, či sa má pri vytváraní viacerých tepelných máp na hodnotu zoskupujúcej premennej použiť spoločná os x.. Default: `false`.
* __commonYAxis__ | `boolean`: kontroluje, či sa má pri vytváraní viacerých tepelných máp na hodnotu zoskupujúcej premennej použiť spoločná os y.. Default: `false`.


## Príklady

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
