---
id: r-output
title: R Output
sidebar_label: R Output
---

Komponens az R kimenet megjelenítéséhez egy ISLE leckén belül.

## Opciók

* __code__ | `string`: A kiértékeléshez használt R kód. Default: `''`.
* __libraries__ | `array`: R könyvtárak, amelyeket automatikusan be kell tölteni, amikor a bemeneti "kód" végrehajtásra kerül.. Default: `[]`.
* __prependCode__ | `(string|array)`: R kód (vagy kódblokkok "tömbje"), amelyet a "kód"-ban tárolt kód elé kell illeszteni a kiértékeléskor.. Default: `''`.
* __onPlots__ | `function`: callback, amelyet minden generált plottal együtt hívnak meg. Default: `onPlots() {}`.
* __onResult__ | `function`: callback, amely a `error` (`null`, ha a művelet sikeres volt) és az R kimenetet tartalmazó `result` értékkel hívódik elő.. Default: `onResult() {}`.


## Példák

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
