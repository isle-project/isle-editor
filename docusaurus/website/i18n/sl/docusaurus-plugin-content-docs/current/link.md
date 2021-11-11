---
id: link
title: Link
sidebar_label: Link
---

Komponenta za prikaz povezave.

## Možnosti

* __href__ | `string (required)`: URL spletnega mesta, do katerega želite vzpostaviti povezavo. Default: `none`.
* __target__ | `string`: določa, kje se odpre povezava: nastavi se na `_blank` za novo okno, `_self` za lastni okvir, `_parent` za starševski okvir, `_top` za celotno telo okna ali ime okvirja.. Default: `'_blank'`.
* __windowFeatures__ | `string`: undefined. Default: `none`.
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
