---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Componente per il rendering di un grafico R all'interno di una lezione ISLE.

## Opzioni

* __code__ | `string`: Codice R per generare il grafico. Default: `''`.
* __width__ | `(number|string)`: larghezza del terreno (in px). Default: `600`.
* __height__ | `(number|string)`: altezza del terreno (in px). Default: `'auto'`.
* __draggable__ | `boolean`: controlla se la trama deve essere trascinabile. Default: `false`.
* __fileType__ | `string`: tipo di file del grafico (`png` o `svg`). Default: `'svg'`.
* __libraries__ | `array`: R librerie che dovrebbero essere caricate automaticamente quando viene eseguito il `codice` di input. Default: `[]`.
* __prependCode__ | `(string|array)`: una "stringa" o un "array" di frammenti di codice R da preparare al codice memorizzato nel "codice" quando si valuta. Default: `''`.
* __meta__ | `object`: trama meta-informazioni. Default: `none`.
* __className__ | `string`: nome della classe. Default: `''`.
* __onDone__ | `function`: richiamata con argomenti `err`, `img` e `body` una volta creata la trama. Default: `onDone() {}`.


## Esempi

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
