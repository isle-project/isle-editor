---
id: pages 
title: Pages
sidebar_label: Pages
---

Un componente de paginación ISLE que permite al usuario pasar por una secuencia de páginas.

## Options

* __activePage__ | `number`: página activa. Default: `1`.
* __disabled__ | `boolean`: controla si la barra de navegación está activa o no. Default: `false`.
* __title__ | `string`: título mostrado de las páginas contenedor. Default: `''`.
* __pagination__ | `string`: si mostrar la paginación en la "parte superior", "parte inferior", o "ambas".. Default: `'top'`.
* __size__ | `string`: el tamaño de los botones de paginación (ya sea "por defecto", "grande", "pequeño", "xs", o "pequeño"). Default: `'default'`.
* __height__ | `(number|string)`: la altura máxima del contenedor. Si una página incrustada es más alta, se añade una barra de desplazamiento vertical. Default: `none`.
* __voiceID__ | `string`: identificador de control de voz. Default: `none`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onSelect__ | `function`: Función invocada cuando se cambia el cambio activo. Recibe el nuevo índice de páginas activas como único parámetro. Default: `onSelect() {}`.


## Examples

```jsx live
<Pages title="Pages">
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
        <RShell />
    </div>
</Pages>
``` 



