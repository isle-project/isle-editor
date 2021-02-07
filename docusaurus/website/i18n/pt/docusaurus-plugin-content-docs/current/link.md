---
id: link
title: Link
sidebar_label: Link
---

Um componente para a exibição de um link.

## Options

* __href__ | `string (required)`: URL do site para o link. Default: `none`.
* __target__ | `string`: define onde o link é aberto: definido como `_blank` para nova janela, `_self` frame próprio, `_parent` para pai, `_top` para o corpo inteiro da janela, ou o nome do frame. Default: `'_blank'`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Examples

```jsx live
<Link href="https://wikipedia.org">Wikipedia</Link>
```

