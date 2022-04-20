---
id: link
title: Link
sidebar_label: Link
---

O componentă pentru afișarea unui link.

## Opțiuni

* __href__ | `string (required)`: URL-ul site-ului web către care se face legătura. Default: `none`.
* __download__ | `(string|boolean)`: undefined. Default: `false`.
* __target__ | `string`: definește unde se deschide link-ul: setează `_blank` pentru fereastră nouă, `_self` pentru propriul cadru, `_parent` pentru părinte, `_top` pentru întregul corp al ferestrei, sau numele cadrului.. Default: `'_blank'`.
* __windowFeatures__ | `string`: listă de caracteristici ale ferestrei, separate prin virgulă, pentru momentul în care link-ul este deschis într-o fereastră nouă (a se vedea: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features). Default: `none`.
* __openWindow__ | `boolean`: undefined. Default: `false`.
* __className__ | `string`: numele clasei. Default: `''`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.


## Exemple

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
