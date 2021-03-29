---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Komponente zum Rendern eines R-Plots innerhalb einer ISLE-Lektion.

## Optionen

* __code__ | `string`: R-Code zum Erzeugen des Plots. Default: `''`.
* __width__ | `(number|string)`: Breite des Plots (in px). Default: `600`.
* __height__ | `(number|string)`: Höhe des Plots (in px). Default: `'auto'`.
* __draggable__ | `boolean`: steuert, ob der Plot verschiebbar sein soll. Default: `false`.
* __fileType__ | `string`: Dateityp des Plots (`png` oder `svg`). Default: `'svg'`.
* __libraries__ | `array`: R-Bibliotheken, die automatisch geladen werden sollen, wenn der Eingabe-"Code" ausgeführt wird. Default: `[]`.
* __prependCode__ | `(string|array)`: Zeichenkette" oder ein "Array" von R-Code-Schnipseln, die bei der Auswertung dem in "code" gespeicherten Code vorangestellt werden. Default: `''`.
* __meta__ | `object`: Plot-Meta-Informationen. Default: `none`.
* __className__ | `string`: Klassenname. Default: `''`.
* __onDone__ | `function`: Callback, der mit den Argumenten `err`, `img` und `body` aufgerufen wird, sobald ein Plot erstellt ist. Default: `onDone() {}`.


## Beispiele

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
