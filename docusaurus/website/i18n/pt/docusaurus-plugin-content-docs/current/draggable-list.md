---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

Uma lista de elementos arrastáveis que podem ser reordenados pelos estudantes.

## Opções

* __data__ | `array (required)`: conjunto de objetos com teclas "id" e "text".. Default: `none`.
* __onChange__ | `function`: chamada de retorno invocada com dados recém requisitados em cada mudança. Default: `onChange(){}`.
* __onInit__ | `function`: função de chamada de retorno invocada após a montagem do componente. Default: `onInit(){}`.
* __shuffle__ | `boolean`: controla se os elementos de dados devem ser embaralhados na exibição inicial. Default: `false`.
* __disabled__ | `boolean`: controla se os elementos podem ser arrastados ou não. Default: `false`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Exemplos

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

