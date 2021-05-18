---
id: r-output
title: R Output
sidebar_label: R Output
---

Component voor het weergeven van R-uitvoer binnen een ISLE-les.

## Opties

* __code__ | `string`: R-code gebruikt om te evalueren. Default: `''`.
* __libraries__ | `array`: R-bibliotheken die automatisch moeten worden geladen wanneer de invoer `code` wordt uitgevoerd. Default: `[]`.
* __prependCode__ | `(string|array)`: R-code (of `array` van codeblokken) die bij de evaluatie moet worden voorgeprogrammeerd op de code die is opgeslagen in `code`. Default: `''`.
* __onPlots__ | `function`: callback ingeroepen met eventuele gegenereerde percelen. Default: `onPlots() {}`.
* __onResult__ | `function`: callback ingeroepen met `error` (`null` als de operatie succesvol was) en `resultaat` houden van R-uitgang. Default: `onResult() {}`.


## Voorbeelden

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
