---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

Et d3-baseret netværksplot.

## Indstillinger

* __data__ | `{nodes,links} (required)`: objekt med `nodes` og `links`; `nodes` skal være et objekt array af elementer med en `id` egenskab, `links` et objekt array med elementer med et `source` og `target` id. Default: `none`.
* __width__ | `number`: plotets bredde (i px). Default: `900`.
* __height__ | `number`: plotets højde (i px). Default: `600`.


## Eksempler

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

