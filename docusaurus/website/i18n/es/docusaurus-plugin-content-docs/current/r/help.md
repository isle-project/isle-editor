---
id: r-help
title: R Help
sidebar_label: R Help
---

Hacer que las palabras saquen la documentación R en una ventana modal cuando se haga clic.

## Opciones

* __func__ | `string`: nombre de la "función R" para la que se abre la documentación. Si no se suministra, se asume que el contenido de la etiqueta "RHelp" es igual al nombre de la función. Default: `''`.
* __library__ | `string`: nombre del paquete R en el que reside la función. Default: `'base'`.
* __visible__ | `boolean`: controla si la ventana modal de ayuda debe abrirse al inicio. Default: `false`.


## Ejemplos

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

