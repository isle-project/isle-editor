---
id: link
title: Link
sidebar_label: Link
---

Komponent na zobrazenie odkazu.

## Možnosti

* __href__ | `string (required)`: Adresa URL webovej lokality, na ktorú sa má odkazovať. Default: `none`.
* __download__ | `(string|boolean)`: určuje, či sa má odkaz stiahnuť: nastavením na `true` sa vynúti stiahnutie, alebo reťazec na zadanie názvu súboru; ak je `false`, stiahnutie sa nevynúti. Default: `false`.
* __target__ | `string`: definuje, kde sa odkaz otvorí: nastaví sa na `_blank` pre nové okno, `_self` pre vlastný rám, `_parent` pre rodičovské okno, `_top` pre celé telo okna alebo názov rámu. Default: `none`.
* __windowFeatures__ | `string`: zoznam funkcií okna oddelených čiarkou pre prípad otvorenia odkazu v novom okne (pozri: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features). Default: `none`.
* __openWindow__ | `boolean`: boolean kontrolujúci, či sa má URL otvoriť v novom okne. Default: `false`.
* __className__ | `string`: názov triedy. Default: `''`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.


## Príklady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'New Page', value: 'newPage' },
        { label: 'Image Link', value: 'imageLink' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<Link href="https://wikipedia.org">Wikipedia</Link>
```

</TabItem>

<TabItem value="newPage">

```jsx live
<Link target="_blank" 
style={{ fontSize: 35}}
href="https://wikipedia.org">New Wikipedia Page</Link>
```
</TabItem>

<TabItem value="imageLink">

```jsx live
<Link target="_blank" 
style={{ fontSize: 35}}
href="https://wikipedia.org">
<img src= "https://bit.ly/3aM4OU7" /></Link>
```

</TabItem>

</Tabs>
