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


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'From Library', value: 'otherLibrary' },
        { label: 'Visible on Startup', value: 'visible' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<span><RHelp>sum</RHelp> is used to sum the elements of a vector.</span>
```

</TabItem>

<TabItem value="otherLibrary" >

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

</TabItem>

<TabItem value="visible" >

```jsx live
<span><RHelp visible={true} >sum</RHelp> is used to sum the elements of a vector.</span>
```

</TabItem>

</Tabs>
