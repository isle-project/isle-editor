---
id: link
title: Link
sidebar_label: Link
---

Komponenta za prikaz povezave.

## Možnosti

* __href__ | `string (required)`: URL spletnega mesta, do katerega želite vzpostaviti povezavo. Default: `none`.
* __download__ | `(string|boolean)`: določa, ali naj se povezava prenese: nastavi na `true`, da se prenese, ali na niz, da se določi ime datoteke; če je `false`, se ne prenese.. Default: `false`.
* __target__ | `string`: določa, kje se odpre povezava: nastavi se na `_blank` za novo okno, `_self` za lastni okvir, `_parent` za starševski okvir, `_top` za celotno telo okna ali ime okvirja.. Default: `none`.
* __windowFeatures__ | `string`: z vejico ločen seznam okenskih funkcij, ki se uporabijo, ko se povezava odpre v novem oknu (glej: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features). Default: `none`.
* __openWindow__ | `boolean`: boolean, ki določa, ali se URL odpre v novem oknu. Default: `false`.
* __className__ | `string`: ime razreda. Default: `''`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.


## Primeri

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
