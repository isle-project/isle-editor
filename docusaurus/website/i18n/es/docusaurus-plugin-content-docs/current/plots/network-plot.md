---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

Una trama de red basada en d3.

## Opciones

* __data__ | `{nodes,links} (required)`: con "nodos" y "enlaces"; los "nodos" deben ser un conjunto de elementos con una propiedad "id", "enlaces" un conjunto de objetos con elementos que tienen una "fuente" y un "objetivo" id.. Default: `none`.
* __width__ | `number`: ancho de la trama (en px). Default: `900`.
* __height__ | `number`: altura de la trama (en px). Default: `600`.


## Ejemplos

```jsx live
<NetworkPlot
    width={400}
    height={400}
    data={{
        nodes: [
            { 'id': 0 },
            { 'id': 1 },
            { 'id': 2 },
            { 'id': 3 },
        ],
        links: [
            { 'source': 0, 'target': 1 },
            { 'source': 0, 'target': 2 },
            { 'source': 2, 'target': 3 }
        ]
    }}
/>
``` 

