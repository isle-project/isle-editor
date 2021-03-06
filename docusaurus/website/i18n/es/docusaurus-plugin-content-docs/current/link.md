---
id: link
title: Link
sidebar_label: Link
---

Un componente para mostrar un enlace.

## Opciones

* __href__ | `string (required)`: URL de la página web a la que enlazar. Default: `none`.
* __target__ | `string`: define donde se abre el enlace: poner en "blanco" para la nueva ventana, "su propio marco", "padre" para el padre, `top` para el cuerpo completo de la ventana, o el nombre del marco. Default: `'_blank'`.
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
