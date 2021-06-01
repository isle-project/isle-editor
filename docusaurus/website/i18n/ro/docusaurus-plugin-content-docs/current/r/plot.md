---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Componentă pentru redarea unui grafic R în cadrul unei lecții ISLE.

## Opțiuni

* __code__ | `string`: Codul R pentru a genera graficul. Default: `''`.
* __width__ | `(number|string)`: lățimea graficului (în px). Default: `600`.
* __height__ | `(number|string)`: înălțimea graficului (în px). Default: `'auto'`.
* __draggable__ | `boolean`: controlează dacă graficul ar trebui să poată fi trasat. Default: `false`.
* __fileType__ | `string`: tipul de fișier al graficului (`png` sau `svg`). Default: `'svg'`.
* __libraries__ | `array`: Biblioteci R care ar trebui să fie încărcate automat atunci când este executat `code` de intrare. Default: `[]`.
* __prependCode__ | `(string|array)`: `string` sau un `array` de fragmente de cod R care să fie adăugate la codul stocat în `code` la evaluarea codului.. Default: `''`.
* __meta__ | `object`: meta-informații parcelare. Default: `none`.
* __className__ | `string`: numele clasei. Default: `''`.
* __onDone__ | `function`: callback invocat cu argumentele `err`, `img` și `body` odată ce este creată o parcelă. Default: `onDone() {}`.


## Exemple

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
