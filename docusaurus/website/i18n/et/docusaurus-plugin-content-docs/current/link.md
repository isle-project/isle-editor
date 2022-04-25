---
id: link
title: Link
sidebar_label: Link
---

Komponent lingi kuvamiseks.

## Valikud

* __href__ | `string (required)`: Veebisaidi URL, millele linkida. Default: `none`.
* __download__ | `(string|boolean)`: määrab, kas linki tuleb alla laadida: allalaadimise sundimiseks on määratud `true` või string, mis määrab failinime; kui `false`, siis allalaadimist ei sunnita.. Default: `false`.
* __target__ | `string`: määratleb, kus link avatakse: uue akna puhul on määratud `_blank`, oma raami puhul `_self`, vanema puhul `_parent`, akna kogu keha puhul `_top` või raami nimi.. Default: `'_blank'`.
* __windowFeatures__ | `string`: komadega eraldatud loetelu aknafunktsioonidest, kui link avatakse uues aknas (vt: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features). Default: `none`.
* __openWindow__ | `boolean`: undefined. Default: `false`.
* __className__ | `string`: klassi nimi. Default: `''`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.


## Näited

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
