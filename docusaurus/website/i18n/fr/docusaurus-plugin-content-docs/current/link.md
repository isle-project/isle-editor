---
id: link
title: Link
sidebar_label: Link
---

Un composant permettant d'afficher un lien.

## Options

* __href__ | `string (required)`: URL du site web à lier. Default: `none`.
* __download__ | `(string|boolean)`: spécifie si le lien doit être téléchargé : défini à `true` pour forcer le téléchargement, ou une chaîne pour spécifier le nom du fichier ; si `false`, aucun téléchargement n'est forcé.. Default: `false`.
* __target__ | `string`: définit l'endroit où le lien est ouvert : mis à `_blank` pour une nouvelle fenêtre, `_self` own frame, `_parent` pour le parent, `_top` pour le corps complet de la fenêtre, ou le nom du cadre. Default: `none`.
* __windowFeatures__ | `string`: liste de caractéristiques de fenêtres séparées par des virgules pour l'ouverture du lien dans une nouvelle fenêtre (voir : https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features). Default: `none`.
* __openWindow__ | `boolean`: undefined. Default: `false`.
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
