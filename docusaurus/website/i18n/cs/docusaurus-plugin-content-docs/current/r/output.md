---
id: r-output
title: R Output
sidebar_label: R Output
---

Komponenta pro vykreslování výstupu R uvnitř lekce ISLE.

## Možnosti

* __code__ | `string`: Kód R použitý k vyhodnocení. Default: `''`.
* __libraries__ | `array`: Knihovny R, které by se měly automaticky načíst při spuštění vstupního `kódu`.. Default: `[]`.
* __prependCode__ | `(string|array)`: R kód (nebo `array` bloků kódu), který se při vyhodnocování přidá ke kódu uloženému v `code`.. Default: `''`.
* __onPlots__ | `function`: zpětné volání vyvolané s jakýmikoliv vygenerovanými pozemky. Default: `onPlots() {}`.
* __onResult__ | `function`: zpětné volání vyvolané s `error` (`null`, pokud operace proběhla úspěšně) a `result` s výstupem R. Default: `onResult() {}`.


## Příklady

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
