---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

En d3-baserad nätverksritning.

## Alternativ

* __data__ | `{nodes,links} (required)`: objekt med `nodes` och `links`; `nodes` bör vara en objektmatris med element med egenskapen `id`, `links` en objektmatris med element med `source` och `target` id.. Default: `none`.
* __width__ | `number`: Plottets bredd (i px). Default: `900`.
* __height__ | `number`: Plottets höjd (i px). Default: `600`.


## Exempel

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

