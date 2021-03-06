---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

Działka sieciowa oparta na d3.

## Opcje

* __data__ | `{nodes,links} (required)`: obiekt z `nodes` i `linkami`; `nodes` powinny być tablicą obiektów z właściwością `id`, `linki` tablicą obiektów z elementami posiadającymi `źródło` i `cel` id. Default: `none`.
* __width__ | `number`: szerokość działki (w px). Default: `900`.
* __height__ | `number`: wysokość działki (w px). Default: `600`.


## Przykłady

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

