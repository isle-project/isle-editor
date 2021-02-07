---
id: link
title: Link
sidebar_label: Link
---

Komponent do wyświetlania łącza.

## Options

* __href__ | `string (required)`: URL strony internetowej, na której znajduje się link do. Default: `none`.
* __target__ | `string`: definiuje miejsce otwarcia linku: ustawia się na `_blank` dla nowego okna, `_self` own frame, `_parent` dla rodzica, `_top` dla pełnej treści okna, lub nazwę ramki. Default: `'_blank'`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Examples

```jsx live
<Link href="https://wikipedia.org">Wikipedia</Link>
```

