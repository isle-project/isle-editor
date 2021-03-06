---
id: r-output
title: R Output
sidebar_label: R Output
---

Komponent för att återge R-utdata i en ISLE-lektion.

## Alternativ

* __code__ | `string`: R-kod som används för att utvärdera. Default: `''`.
* __libraries__ | `array`: R-bibliotek som ska laddas automatiskt när inmatningskoden körs.. Default: `[]`.
* __prependCode__ | `(string|array)`: R-kod (eller `array` av kodblock) som ska läggas till den kod som lagras i `code` vid utvärderingen.. Default: `''`.
* __onPlots__ | `function`: callback som åberopas med alla genererade tomter. Default: `onPlots() {}`.
* __onResult__ | `function`: callback som anropas med `error` (`null` om operationen lyckades) och `result` som innehåller R-utdata.. Default: `onResult() {}`.


## Exempel

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
