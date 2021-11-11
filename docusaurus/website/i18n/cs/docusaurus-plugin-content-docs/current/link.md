---
id: link
title: Link
sidebar_label: Link
---

Komponenta pro zobrazení odkazu.

## Možnosti

* __href__ | `string (required)`: Adresa URL webové stránky, na kterou se má odkazovat. Default: `none`.
* __target__ | `string`: určuje, kde se odkaz otevře: nastaveno na `_blank` pro nové okno, `_self` pro vlastní rám, `_parent` pro nadřazené okno, `_top` pro celé tělo okna nebo název rámu.. Default: `'_blank'`.
* __windowFeatures__ | `string`: undefined. Default: `none`.
* __className__ | `string`: název třídy. Default: `''`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady

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
