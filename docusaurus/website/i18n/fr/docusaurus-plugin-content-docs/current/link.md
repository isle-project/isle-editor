---
id: link
title: Link
sidebar_label: Link
---

Un composant permettant d'afficher un lien.

## Options

* __href__ | `string (required)`: URL du site web à lier. Default: `none`.
* __target__ | `string`: définit l'endroit où le lien est ouvert : mis à `_blank` pour une nouvelle fenêtre, `_self` own frame, `_parent` pour le parent, `_top` pour le corps complet de la fenêtre, ou le nom du cadre. Default: `'_blank'`.
* __windowFeatures__ | `string`: undefined. Default: `none`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Exemples

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
