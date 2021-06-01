---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Komponent R-ploki esitamiseks ISLE-tunnis.

## Valikud

* __code__ | `string`: R-kood graafiku genereerimiseks. Default: `''`.
* __width__ | `(number|string)`: joonise laius (px). Default: `600`.
* __height__ | `(number|string)`: joonise kõrgus (px). Default: `'auto'`.
* __draggable__ | `boolean`: kontrollib, kas joonis peaks olema lohistatav. Default: `false`.
* __fileType__ | `string`: joonise failitüüp (`png` või `svg`). Default: `'svg'`.
* __libraries__ | `array`: R-raamatukogud, mis peaksid automaatselt laadima, kui sisendkood käivitatakse.. Default: `[]`.
* __prependCode__ | `(string|array)`: `string` või `array` R-koodilõikudest, mis lisatakse koodis `code` salvestatud koodile, kui seda hinnatakse.. Default: `''`.
* __meta__ | `object`: krundi metainfo. Default: `none`.
* __className__ | `string`: klassi nimi. Default: `''`.
* __onDone__ | `function`: callback, mida kutsutakse üles argumentidega `err`, `img` ja `body`, kui joonis on loodud.. Default: `onDone() {}`.


## Näited

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
