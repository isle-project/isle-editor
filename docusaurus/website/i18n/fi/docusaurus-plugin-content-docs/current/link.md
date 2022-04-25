---
id: link
title: Link
sidebar_label: Link
---

Komponentti linkin näyttämiseen.

## Vaihtoehdot

* __href__ | `string (required)`: Linkitettävän verkkosivuston URL-osoite. Default: `none`.
* __download__ | `(string|boolean)`: määrittelee, onko linkki ladattava: asetetaan arvoksi `true` pakottaaksesi lataamisen, tai merkkijono tiedostonimen määrittämiseksi; jos `false`, lataamista ei pakoteta.. Default: `false`.
* __target__ | `string`: määrittelee, mistä linkki avataan: asetetaan arvoksi `_blank`, jos kyseessä on uusi ikkuna, `_self`, jos kyseessä on oma kehys, `_parent`, jos kyseessä on vanhempi, `_top`, jos kyseessä on koko ikkunan runko, tai kehyksen nimi.. Default: `'_blank'`.
* __windowFeatures__ | `string`: pilkulla erotettu luettelo ikkunan ominaisuuksista, kun linkki avataan uudessa ikkunassa (katso: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features).. Default: `none`.
* __openWindow__ | `boolean`: undefined. Default: `false`.
* __className__ | `string`: luokan nimi. Default: `''`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.


## Esimerkkejä

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
