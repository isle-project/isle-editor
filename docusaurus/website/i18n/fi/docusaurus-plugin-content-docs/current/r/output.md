---
id: r-output
title: R Output
sidebar_label: R Output
---

Komponentti R-ulostulon renderöintiin ISLE-oppitunnin sisällä.

## Vaihtoehdot

* __code__ | `string`: Arvioinnissa käytetty R-koodi. Default: `''`.
* __libraries__ | `array`: R-kirjastot, jotka pitäisi ladata automaattisesti, kun syötetty `koodi` suoritetaan.. Default: `[]`.
* __prependCode__ | `(string|array)`: R-koodi (tai koodilohkojen joukko), joka liitetään `koodiin` tallennetun koodin eteen, kun arviota arvioidaan.. Default: `''`.
* __onPlots__ | `function`: callback, jota kutsutaan kaikkien luotujen tonttien kanssa. Default: `onPlots() {}`.
* __onResult__ | `function`: callback, jossa on `error` (`null`, jos operaatio onnistui) ja `result`, jossa on R-tulos.. Default: `onResult() {}`.


## Esimerkkejä

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
