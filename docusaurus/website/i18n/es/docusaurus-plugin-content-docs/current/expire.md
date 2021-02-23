---
id: expire 
title: Expire
sidebar_label: Expire
---

El componente de caducidad hará que todos sus hijos se vuelvan invisibles después de un tiempo determinado.

## Opciones

* __active__ | `boolean`: controla si el contador debe estar activo. Default: `false`.
* __delay__ | `number`: número de milisegundos antes de que el componente desaparezca. Default: `1000`.


## Ejemplos

```jsx live
<Expire>
    <span>When active, I will disappear after one second</span>
</Expire>
```



