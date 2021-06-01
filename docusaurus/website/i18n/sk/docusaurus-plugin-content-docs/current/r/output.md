---
id: r-output
title: R Output
sidebar_label: R Output
---

Komponent na vykresľovanie výstupu R v rámci lekcie ISLE.

## Možnosti

* __code__ | `string`: Kód R použitý na vyhodnotenie. Default: `''`.
* __libraries__ | `array`: Knižnice R, ktoré by sa mali automaticky načítať pri spustení vstupného kódu. Default: `[]`.
* __prependCode__ | `(string|array)`: R kód (alebo `pásmo` blokov kódu), ktorý sa má pri vyhodnocovaní pridať ku kódu uloženému v `code`. Default: `''`.
* __onPlots__ | `function`: spätné volanie vyvolané s akýmikoľvek vygenerovanými pozemkami. Default: `onPlots() {}`.
* __onResult__ | `function`: spätné volanie vyvolané s `error` (`null`, ak operácia prebehla úspešne) a `result` s výstupom R. Default: `onResult() {}`.


## Príklady

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
