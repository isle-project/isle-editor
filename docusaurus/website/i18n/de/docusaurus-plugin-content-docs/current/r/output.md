---
id: r-output
title: R Output
sidebar_label: R Output
---

Komponente zum Rendern der R-Ausgabe innerhalb einer ISLE-Lektion.

## Optionen

* __code__ | `string`: R-Code zur Auswertung. Default: `''`.
* __libraries__ | `array`: R-Bibliotheken, die automatisch geladen werden sollen, wenn der Eingabe-"Code" ausgeführt wird. Default: `[]`.
* __prependCode__ | `(string|array)`: R-Code (oder `Array` von Codeblöcken), der bei der Auswertung dem in `code` gespeicherten Code vorangestellt wird. Default: `''`.
* __onPlots__ | `function`: Callback, der mit allen erzeugten Plots aufgerufen wird. Default: `onPlots() {}`.
* __onResult__ | `function`: Callback, der mit `error` (`null`, wenn die Operation erfolgreich war) und `result` mit der R-Ausgabe aufgerufen wird. Default: `onResult() {}`.


## Beispiele

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
