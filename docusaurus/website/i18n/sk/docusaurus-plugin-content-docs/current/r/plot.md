---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Komponent na vykreslenie grafu R v rámci lekcie ISLE.

## Možnosti

* __code__ | `string`: Kód R na generovanie grafu. Default: `''`.
* __width__ | `(number|string)`: šírka grafu (v px). Default: `600`.
* __height__ | `(number|string)`: výška grafu (v px). Default: `'auto'`.
* __draggable__ | `boolean`: kontroluje, či má byť plocha preťahovateľná.. Default: `false`.
* __fileType__ | `string`: typ súboru grafu (`png` alebo `svg`). Default: `'svg'`.
* __libraries__ | `array`: Knižnice R, ktoré by sa mali automaticky načítať pri spustení vstupného kódu. Default: `[]`.
* __prependCode__ | `(string|array)`: `string` alebo `array` úryvkov kódu R, ktoré sa pri vyhodnocovaní pridajú ku kódu uloženému v `code`.. Default: `''`.
* __meta__ | `object`: metainformácie o pozemku. Default: `none`.
* __className__ | `string`: názov triedy. Default: `''`.
* __onDone__ | `function`: spätné volanie vyvolané s argumentmi `err`, `img` a `body` po vytvorení výkresu. Default: `onDone() {}`.


## Príklady

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
