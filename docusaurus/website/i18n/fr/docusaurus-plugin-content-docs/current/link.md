---
id: link
title: Link
sidebar_label: Link
---

Un composant permettant d'afficher un lien.

## Options

* __href__ | `string (required)`: URL du site web à lier. Default: `none`.
* __target__ | `string`: définit l'endroit où le lien est ouvert : mis à `_blank` pour une nouvelle fenêtre, `_self` own frame, `_parent` pour le parent, `_top` pour le corps complet de la fenêtre, ou le nom du cadre. Default: `'_blank'`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Examples

```jsx live
<Link href="https://wikipedia.org">Wikipedia</Link>
```

