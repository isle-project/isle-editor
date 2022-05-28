---
id: link
title: Link
sidebar_label: Link
---

Een component voor het weergeven van een link.

## Opties

* __href__ | `string (required)`: URL van de website om naar te linken. Default: `none`.
* __download__ | `(string|boolean)`: geeft aan of de link gedownload moet worden: zet `true` om downloaden te forceren, of een string om de bestandsnaam te specificeren; indien `false`, wordt downloaden niet geforceerd. Default: `false`.
* __target__ | `string`: definieert waar de link wordt geopend: ingesteld op `_blank` voor een nieuw venster, `_zelf` eigen frame, `_ouder` voor de ouder, `_top` voor het volledige venster, of de naam van het frame. Default: `none`.
* __windowFeatures__ | `string`: door komma's gescheiden lijst van vensterkenmerken voor wanneer de link in een nieuw venster wordt geopend (zie: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features). Default: `none`.
* __openWindow__ | `boolean`: undefined. Default: `false`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Voorbeelden

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
