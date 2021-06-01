---
id: r-output
title: R Output
sidebar_label: R Output
---

Komponents R izvades atveidošanai ISLE stundā.

## Iespējas

* __code__ | `string`: R kods, kas izmantots, lai novērtētu. Default: `''`.
* __libraries__ | `array`: R bibliotēkas, kas jāielādē automātiski, kad tiek izpildīts ievades `kods`.. Default: `[]`.
* __prependCode__ | `(string|array)`: R kods (vai `koda bloku masīvs`), kas tiks pievienots kodam, kas saglabāts `code`, kad tiks novērtēts.. Default: `''`.
* __onPlots__ | `function`: izsaukums, kas tiek izsaukts kopā ar jebkuru ģenerētu zemes gabalu. Default: `onPlots() {}`.
* __onResult__ | `function`: atpakaļsaukums, kas izsaukts ar `error` (`null`, ja operācija ir bijusi veiksmīga) un `result`, kurā ir R izvads. Default: `onResult() {}`.


## Piemēri

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
