---
id: r-table
title: R Table
sidebar_label: R Table
---

Komponenta za prikaz podatkovnega okvira ali matrike R v tabelaričnem prikazu.

## Možnosti

* __code__ | `string`: Koda R, ki vrača data.frame s podatki, ki se prikažejo v tabeli. Default: `''`.
* __libraries__ | `array`: Knjižnice R, ki naj se samodejno naložijo ob izvajanju vhodne `kode`.. Default: `[]`.
* __prependCode__ | `(string|array)`: `vrvica` kode R (ali `mrežica` blokov kode R), ki se pri vrednotenju doda kodi, shranjeni v `kodi`.. Default: `''`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.


## Primeri


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
