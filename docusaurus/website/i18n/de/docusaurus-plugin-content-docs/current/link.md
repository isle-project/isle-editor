---
id: link
title: Link
sidebar_label: Link
---

Eine Komponente zur Anzeige eines Links.

## Options

* __href__ | `string (required)`: URL der Website, auf die verlinkt werden soll. Default: `none`.
* __target__ | `string`: legt fest, wo der Link geöffnet wird: gesetzt auf `_blank` für neues Fenster, `_self` eigener Frame, `_parent` für übergeordnetes Fenster, `_top` für den gesamten Body des Fensters, oder der Name des Frames. Default: `'_blank'`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Examples

```jsx live
<Link href="https://wikipedia.org">Wikipedia</Link>
```

