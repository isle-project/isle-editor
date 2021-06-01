---
id: r-table
title: R Table
sidebar_label: R Table
---

Komponenta pro vykreslení datového rámce nebo matice R v tabulkovém zobrazení.

## Možnosti

* __code__ | `string`: Kód R vracející data.frame obsahující data, která se mají zobrazit v tabulce. Default: `''`.
* __libraries__ | `array`: Knihovny R, které by se měly automaticky načíst při spuštění vstupního `kódu`.. Default: `[]`.
* __prependCode__ | `(string|array)`: `řetězec` kódu R (nebo `pásmo` bloků kódu R), který se při vyhodnocování připojí ke kódu uloženému v `code`.. Default: `''`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady


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
