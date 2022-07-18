---
id: link
title: Link
sidebar_label: Link
---

Saiknes rādīšanas komponents.

## Iespējas

* __href__ | `string (required)`: Tīmekļa vietnes URL, uz kuru vēlaties izveidot saiti. Default: `none`.
* __download__ | `(string|boolean)`: norāda, vai saite ir jālejupielādē: iestatīts uz `true`, lai piespiestu lejupielādi, vai virkne, lai norādītu faila nosaukumu; ja `false`, lejupielāde netiek piespiedu kārtā veikta.. Default: `false`.
* __target__ | `string`: nosaka, kur tiek atvērta saite: iestatīts uz `_blank` jaunam logam, `_self` savam rāmim, `_parent` mātes logam, `_top` loga pilnam korpusam vai rāmja nosaukumam.. Default: `none`.
* __windowFeatures__ | `string`: ar komatiem atdalīts loga funkciju saraksts, kad saite tiek atvērta jaunā logā (skatīt: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features).. Default: `none`.
* __openWindow__ | `boolean`: boolean, kas nosaka, vai URL atvērt jaunā logā.. Default: `false`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.


## Piemēri

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
