---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

El componente de apariencia hará que todos sus hijos sean visibles después de un tiempo determinado.

## Opciones

* __active__ | `boolean`: controla si el contador debe estar activo. Default: `false`.
* __delay__ | `number`: número de milisegundos antes de que aparezca el componente. Default: `1000`.


## Ejemplos

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



