---
id: r-output
title: R Output
sidebar_label: R Output
---

Komponent R-väljundi esitamiseks ISLE-tunnis.

## Valikud

* __code__ | `string`: R-kood, mida kasutatakse hindamiseks. Default: `''`.
* __libraries__ | `array`: R-raamatukogud, mis peaksid automaatselt laadima, kui sisendkood käivitatakse.. Default: `[]`.
* __prependCode__ | `(string|array)`: R-kood (või koodiblokkide rida), mis lisatakse koodis "kood" salvestatud koodile, kui seda hinnatakse.. Default: `''`.
* __onPlots__ | `function`: callback, mida kutsutakse üles koos kõigi genereeritud joonistega. Default: `onPlots() {}`.
* __onResult__ | `function`: callback, mida kutsutakse üles koos `error` (`null`, kui operatsioon oli edukas) ja `result`, mis sisaldab R väljundit.. Default: `onResult() {}`.


## Näited

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
