---
id: r-output
title: R Output
sidebar_label: R Output
---

Komponenta za prikazovanje izpisa R znotraj lekcije ISLE.

## Možnosti

* __code__ | `string`: Koda R, uporabljena za ocenjevanje. Default: `''`.
* __libraries__ | `array`: Knjižnice R, ki naj se samodejno naložijo ob izvajanju vhodne `kode`.. Default: `[]`.
* __prependCode__ | `(string|array)`: R koda (ali `predalček` blokov kode), ki se pri vrednotenju doda kodi, shranjeni v `koda`.. Default: `''`.
* __onPlots__ | `function`: povratni klic, ki se sproži z vsemi ustvarjenimi parcelami. Default: `onPlots() {}`.
* __onResult__ | `function`: povratni klic, sprožen z `error` (`null`, če je bila operacija uspešna) in `result`, ki vsebuje izhod R. Default: `onResult() {}`.


## Primeri

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
