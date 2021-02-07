---
id: link
title: Link
sidebar_label: Link
---

Un componente per la visualizzazione di un link.

## Options

* __href__ | `string (required)`: URL del sito web da collegare a. Default: `none`.
* __target__ | `string`: definisce dove il link viene aperto: impostato a `_blank` per la nuova finestra, `_self` proprio frame, `_parent` per il genitore, `_top` per l'intero corpo della finestra, o il nome del frame. Default: `'_blank'`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Examples

```jsx live
<Link href="https://wikipedia.org">Wikipedia</Link>
```

