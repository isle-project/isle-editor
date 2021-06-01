---
id: r-output
title: R Output
sidebar_label: R Output
---

Komponentas, skirtas R išvesties atvaizdavimui ISLE pamokoje.

## Parinktys

* __code__ | `string`: R kodas, naudojamas įvertinti. Default: `''`.
* __libraries__ | `array`: R bibliotekos, kurios turėtų būti automatiškai įkeliamos, kai įvesties `kodas` yra vykdomas.. Default: `[]`.
* __prependCode__ | `(string|array)`: R kodas (arba `kodo blokų masyvas`), kuris bus pridėtas prie kodo, saugomo `code`, vertinant. Default: `''`.
* __onPlots__ | `function`: atgalinis skambutis, iškviečiamas su visais sugeneruotais sklypais. Default: `onPlots() {}`.
* __onResult__ | `function`: iškviečiamas grįžtamasis ryšys su `error` (`null`, jei operacija buvo sėkminga) ir `result`, kuriame yra R išvestis. Default: `onResult() {}`.


## Pavyzdžiai

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
