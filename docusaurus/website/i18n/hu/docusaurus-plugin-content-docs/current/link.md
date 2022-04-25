---
id: link
title: Link
sidebar_label: Link
---

Egy link megjelenítésére szolgáló komponens.

## Opciók

* __href__ | `string (required)`: A weboldal URL címe, amelyre hivatkozni kíván. Default: `none`.
* __download__ | `(string|boolean)`: megadja, hogy a linket le kell-e tölteni: a letöltés kikényszerítéséhez `true`, vagy egy karakterlánc a fájlnév megadásához; ha `false`, akkor nem kényszerül letöltésre.. Default: `false`.
* __target__ | `string`: meghatározza, hogy hol nyílik meg a link: új ablak esetén `_blank`, saját keret esetén `_self`, szülő esetén `_parent`, ablak teljes teste esetén `_top`, vagy a keret neve.. Default: `'_blank'`.
* __windowFeatures__ | `string`: vesszővel elválasztott lista a link új ablakban való megnyitásakor használt ablakjellemzőkről (lásd: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features). Default: `none`.
* __openWindow__ | `boolean`: undefined. Default: `false`.
* __className__ | `string`: osztály neve. Default: `''`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák

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
