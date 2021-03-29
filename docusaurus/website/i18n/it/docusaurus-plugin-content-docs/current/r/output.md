---
id: r-output
title: R Output
sidebar_label: R Output
---

Componente per il rendering dell'uscita R all'interno di una lezione ISLE.

## Opzioni

* __code__ | `string`: Codice R utilizzato per valutare. Default: `''`.
* __libraries__ | `array`: R librerie che dovrebbero essere caricate automaticamente quando viene eseguito il `codice` di input. Default: `[]`.
* __prependCode__ | `(string|array)`: R code (o `array` di blocchi di codice) da preparare al codice memorizzato in `code` quando si valuta. Default: `''`.
* __onPlots__ | `function`: richiamata invocata con qualsiasi trama generata. Default: `onPlots() {}`.
* __onResult__ | `function`: richiamata con `errore` (`null` se l'operazione è andata a buon fine) e `risultato` mantenendo l'uscita R. Default: `onResult() {}`.


## Esempi

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Multiline', value: 'multiline' },
        { label: 'Loading Data', value: 'loadingData' },
        { label: 'Using Libraries', value: 'usingLibraries' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<ROutput code="runif(10)" />
```

</TabItem>

<TabItem value="multiline" >

```jsx live
<ROutput code={`
x <- runif( 100 );
y <- 3.0 * x + rnorm( 100 );
fit <- lm( y ~ x );
summary( fit );
`} />
```

</TabItem>

<TabItem value="loadingData" >

```jsx live
<ROutput 
    prependCode={'wages <- read.table( "https://raw.githubusercontent.com/stdlib-js/stdlib/develop/lib/node_modules/%40stdlib/datasets/berndt-cps-wages-1985/data/data.csv", header=TRUE, sep=",")'} 
    code="summary(wages)"
/>
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<ROutput 
    libraries={[ 'dplyr' ]}
    code={'starwars %>% filter(species == "Droid")'}
/>
```

</TabItem>

</Tabs>
