---
id: link
title: Link
sidebar_label: Link
---

Un componente para mostrar un enlace.

## Options

* __href__ | `string (required)`: URL de la página web a la que enlazar. Default: `none`.
* __target__ | `string`: define donde se abre el enlace: poner en "blanco" para la nueva ventana, "su propio marco", "padre" para el padre, "arriba" para el cuerpo completo de la ventana, o el nombre del marco.. Default: `'_blank'`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Examples

```jsx live
<Link href="https://wikipedia.org">Wikipedia</Link>
```

