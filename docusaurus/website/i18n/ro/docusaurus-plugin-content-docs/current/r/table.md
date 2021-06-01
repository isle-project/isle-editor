---
id: r-table
title: R Table
sidebar_label: R Table
---

Componentă pentru redarea unui cadru de date sau a unei matrice R într-un afișaj tabelar.

## Opțiuni

* __code__ | `string`: Cod R care returnează un data.frame care conține datele ce urmează a fi afișate în tabel. Default: `''`.
* __libraries__ | `array`: Biblioteci R care ar trebui să fie încărcate automat atunci când este executat `code` de intrare. Default: `[]`.
* __prependCode__ | `(string|array)`: Șirul `string` de cod R (sau `array` de blocuri de cod R) care urmează să fie adăugat la codul stocat în `code` la evaluarea codului.. Default: `''`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.


## Exemple


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
