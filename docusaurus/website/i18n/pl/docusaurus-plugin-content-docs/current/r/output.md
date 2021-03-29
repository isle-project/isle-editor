---
id: r-output
title: R Output
sidebar_label: R Output
---

Komponent do renderowania wyjścia R wewnątrz lekcji ISLE.

## Opcje

* __code__ | `string`: Kod R używany do oceny. Default: `''`.
* __libraries__ | `array`: Biblioteki R, które powinny być ładowane automatycznie po wykonaniu wejścia `kodu`.. Default: `[]`.
* __prependCode__ | `(string|array)`: Kod R (lub `liczba` bloków kodu), który ma być dołączony do kodu przechowywanego w `kodu` podczas oceny. Default: `''`.
* __onPlots__ | `function`: Wywołanie zwrotne z dowolnie wygenerowanymi działkami. Default: `onPlots() {}`.
* __onResult__ | `function`: wywołanie zwrotne z `błędem` (`nieważne`, jeśli operacja zakończyła się sukcesem) i `wynik` posiadania wyjścia R. Default: `onResult() {}`.


## Przykłady

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
