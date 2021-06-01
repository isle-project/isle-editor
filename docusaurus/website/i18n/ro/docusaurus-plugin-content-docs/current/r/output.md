---
id: r-output
title: R Output
sidebar_label: R Output
---

Componentă pentru redarea ieșirii R în cadrul unei lecții ISLE.

## Opțiuni

* __code__ | `string`: Codul R utilizat pentru a evalua. Default: `''`.
* __libraries__ | `array`: Biblioteci R care ar trebui să fie încărcate automat atunci când este executat `code` de intrare. Default: `[]`.
* __prependCode__ | `(string|array)`: Codul R (sau `array` de blocuri de cod) care trebuie adăugat la codul stocat în `code` la evaluarea codului.. Default: `''`.
* __onPlots__ | `function`: callback invocat cu orice parcelă generată. Default: `onPlots() {}`.
* __onResult__ | `function`: callback invocat cu `error` (`null` dacă operațiunea a avut succes) și `result` care conține rezultatul R. Default: `onResult() {}`.


## Exemple

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
