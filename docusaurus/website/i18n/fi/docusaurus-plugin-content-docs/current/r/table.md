---
id: r-table
title: R Table
sidebar_label: R Table
---

Komponentti R-tietokehyksen tai -matriisin esittämiseen taulukkomuodossa.

## Vaihtoehdot

* __code__ | `string`: R-koodi, joka palauttaa taulukossa näytettävät tiedot sisältävän data.frame-kehyksen.. Default: `''`.
* __libraries__ | `array`: R-kirjastot, jotka pitäisi ladata automaattisesti, kun syötetty `koodi` suoritetaan.. Default: `[]`.
* __prependCode__ | `(string|array)`: R-koodi `merkkijono` (tai R-koodilohkojen `rivi`), joka liitetään `koodiin` tallennetun koodin eteen, kun koodia arvioidaan.. Default: `''`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.


## Esimerkkejä


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Using Libraries', value: 'usingLibraries' },
        { label: 'Custom Style', value: 'customStyle' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RTable
    code={`data <- matrix( runif(64), nrow=8, ncol=8); 
    data`}
/>
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<RTable 
    libraries={[ 'dplyr' ]}
    code="starwars"
/>
```

</TabItem>

<TabItem value="customStyle" >

```jsx live
<RTable 
    libraries={[ 'dplyr' ]}
    code="starwars"
    style={{ width: '400px' }}
/>
```

</TabItem>

</Tabs>
