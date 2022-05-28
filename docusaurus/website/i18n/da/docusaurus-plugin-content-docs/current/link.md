---
id: link
title: Link
sidebar_label: Link
---

En komponent til visning af et link.

## Indstillinger

* __href__ | `string (required)`: URL på det websted, der skal linkes til. Default: `none`.
* __download__ | `(string|boolean)`: angiver, om linket skal downloades: indstilles til `true` for at fremtvinge download, eller en streng for at angive filnavnet; hvis `false`, fremtvinges der ikke download.. Default: `false`.
* __target__ | `string`: definerer hvor linket åbnes: indstilles til `_blank` for nyt vindue, `_self` for egen ramme, `_parent` for overordnet vindue, `_top` for hele vinduet eller navnet på rammen. Default: `none`.
* __windowFeatures__ | `string`: kommasepareret liste over vinduesfunktioner for, hvornår linket åbnes i et nyt vindue (se: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features). Default: `none`.
* __openWindow__ | `boolean`: undefined. Default: `false`.
* __className__ | `string`: klassens navn. Default: `''`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.


## Eksempler

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
