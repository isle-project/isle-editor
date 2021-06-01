---
id: r-output
title: R Output
sidebar_label: R Output
---

Komponent til gengivelse af R-uddata i en ISLE-lektion.

## Indstillinger

* __code__ | `string`: R-kode, der anvendes til at evaluere. Default: `''`.
* __libraries__ | `array`: R-biblioteker, der skal indlæses automatisk, når inputkoden udføres. Default: `[]`.
* __prependCode__ | `(string|array)`: R-kode (eller `array` af kodeblokke), der skal tilføjes til den kode, der er gemt i `code`, når den evalueres. Default: `''`.
* __onPlots__ | `function`: callback, der påkaldes med alle genererede plot. Default: `onPlots() {}`.
* __onResult__ | `function`: callback påkaldt med `error` (`null`, hvis operationen lykkedes) og `result` med R output. Default: `onResult() {}`.


## Eksempler

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
