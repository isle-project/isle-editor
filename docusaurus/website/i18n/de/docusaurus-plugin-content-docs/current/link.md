---
id: link
title: Link
sidebar_label: Link
---

Eine Komponente zur Anzeige eines Links.

## Optionen

* __href__ | `string (required)`: URL der Website, auf die verlinkt werden soll. Default: `none`.
* __download__ | `(string|boolean)`: gibt an, ob der Link heruntergeladen werden soll: auf `true` gesetzt, um den Download zu erzwingen, oder eine Zeichenkette, um den Dateinamen anzugeben; bei `false` wird kein Download erzwungen. Default: `false`.
* __target__ | `string`: legt fest, wo der Link geöffnet wird: gesetzt auf `_blank` für neues Fenster, `_self` eigener Frame, `_parent` für übergeordnetes Fenster, `_top` für den gesamten Body des Fensters, oder der Name des Frames. Default: `none`.
* __windowFeatures__ | `string`: kommagetrennte Liste von Fenstereigenschaften, wenn der Link in einem neuen Fenster geöffnet wird (siehe: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features). Default: `none`.
* __openWindow__ | `boolean`: boolescher Wert, der bestimmt, ob die URL in einem neuen Fenster geöffnet werden soll. Default: `false`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Beispiele

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
