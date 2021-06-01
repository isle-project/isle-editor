---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Komponentas, skirtas R sklypui atvaizduoti ISLE pamokoje.

## Parinktys

* __code__ | `string`: R kodas sklypui generuoti. Default: `''`.
* __width__ | `(number|string)`: sklypo plotis (px). Default: `600`.
* __height__ | `(number|string)`: sklypo aukštis (px). Default: `'auto'`.
* __draggable__ | `boolean`: kontroliuoja, ar sklypą galima vilkti.. Default: `false`.
* __fileType__ | `string`: brėžinio failo tipas (`png` arba `svg`).. Default: `'svg'`.
* __libraries__ | `array`: R bibliotekos, kurios turėtų būti automatiškai įkeliamos, kai įvesties `kodas` yra vykdomas.. Default: `[]`.
* __prependCode__ | `(string|array)`: `stringa` arba `dėžutė` R kodo fragmentų, kurie bus pridėti prie kodo, saugomo `code`, vertinant. Default: `''`.
* __meta__ | `object`: sklypo metainformacija. Default: `none`.
* __className__ | `string`: klasės pavadinimas. Default: `''`.
* __onDone__ | `function`: grįžtamasis skambutis su `err`, `img` ir `body` argumentais, kai tik sukuriamas sklypas.. Default: `onDone() {}`.


## Pavyzdžiai

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Draggable', value: 'draggable' },
        { label: 'Custom Dimensions', value: 'customDimensions' },
        { label: 'Using Libraries', value: 'usingLibraries' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RPlot code="hist( c(20,50,40,70,40,30) )" />
```

</TabItem>

<TabItem value="draggable" >

```jsx live
<RPlot draggable code="hist( c(20,50,40,70,40,30) )" />
```

</TabItem>

<TabItem value="customDimensions" >

```jsx live
<RPlot code="hist( c(20,50,40,70,40,30) )" width="900px" />
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<RPlot 
    libraries={[ 'ggplot2' ]}
    code="qplot(mpg, wt, data = mtcars)" 
/>
```

</TabItem>

</Tabs>
