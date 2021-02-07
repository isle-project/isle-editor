---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

Una lista de elementos arrastrables que pueden ser reordenados por los estudiantes.

## Options

* __data__ | `array (required)`: una serie de objetos con claves de identificación y de texto.. Default: `none`.
* __onChange__ | `function`: llamada de retorno invocada con un conjunto de datos recién ordenados en cada cambio. Default: `onChange(){}`.
* __onInit__ | `function`: función de llamada de retorno invocada después del montaje del componente. Default: `onInit(){}`.
* __shuffle__ | `boolean`: controla si los elementos de datos deben mezclarse en la presentación inicial. Default: `false`.
* __disabled__ | `boolean`: controla si los elementos pueden ser arrastrados o no. Default: `false`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Examples

```jsx live
<DraggableList
    data={[
        { id: 0, text: "Compact" },
        { id: 1, text: "Large" },
        { id: 2, text: "Midsize" },
        { id: 3, text: "Small" }
    ]}
/>
```

