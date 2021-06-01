---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Komponenta pro vykreslení grafu R uvnitř lekce ISLE.

## Možnosti

* __code__ | `string`: Kód R pro generování grafu. Default: `''`.
* __width__ | `(number|string)`: šířka grafu (v px). Default: `600`.
* __height__ | `(number|string)`: výška grafu (v px). Default: `'auto'`.
* __draggable__ | `boolean`: určuje, zda má být graf přetažitelný. Default: `false`.
* __fileType__ | `string`: typ souboru grafu (`png` nebo `svg`).. Default: `'svg'`.
* __libraries__ | `array`: Knihovny R, které by se měly automaticky načíst při spuštění vstupního `kódu`.. Default: `[]`.
* __prependCode__ | `(string|array)`: `řetězec` nebo `množina` úryvků kódu R, které se při vyhodnocování přidají ke kódu uloženému v `code`.. Default: `''`.
* __meta__ | `object`: metainformace o pozemku. Default: `none`.
* __className__ | `string`: název třídy. Default: `''`.
* __onDone__ | `function`: zpětné volání vyvolané s argumenty `err`, `img` a `body`, jakmile je vytvořen pozemek.. Default: `onDone() {}`.


## Příklady

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
