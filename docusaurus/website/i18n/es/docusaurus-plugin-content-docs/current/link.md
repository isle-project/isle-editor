---
id: link
title: Link
sidebar_label: Link
---

Un componente para mostrar un enlace.

## Opciones

* __href__ | `string (required)`: URL de la página web a la que enlazar. Default: `none`.
* __download__ | `(string|boolean)`: especifica si el enlace debe descargarse: se establece como `true` para forzar la descarga, o una cadena para especificar el nombre del archivo; si `false`, no se fuerza la descarga. Default: `false`.
* __target__ | `string`: define donde se abre el enlace: poner en "blanco" para la nueva ventana, "su propio marco", "padre" para el padre, `top` para el cuerpo completo de la ventana, o el nombre del marco. Default: `none`.
* __windowFeatures__ | `string`: lista separada por comas de las características de la ventana para cuando el enlace se abre en una nueva ventana (véase: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features). Default: `none`.
* __openWindow__ | `boolean`: booleano que controla si se abre la URL en una nueva ventana. Default: `false`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Ejemplos

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
