---
id: link
title: Link
sidebar_label: Link
---

En komponent för att visa en länk.

## Alternativ

* __href__ | `string (required)`: URL till den webbplats som du vill länka till. Default: `none`.
* __target__ | `string`: definierar var länken öppnas: inställd på `_blank` för nytt fönster, `_self` egen ram, `_parent` för överordnad, `_top` för hela fönstret, eller namnet på ramen.. Default: `'_blank'`.
* __className__ | `string`: klassens namn. Default: `''`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.


## Exempel

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
