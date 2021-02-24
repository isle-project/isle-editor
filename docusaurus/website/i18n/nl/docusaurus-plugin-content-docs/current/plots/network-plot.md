---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

Een d3-gebaseerde netwerkplot.

## Opties

* __data__ | `{nodes,links} (required)`: object met `nodes` en `links`; `nodes` moet een object array zijn van elementen met een `id` eigenschap, `links` een object array met elementen met een `source` en `target` id. Default: `none`.
* __width__ | `number`: breedte van het perceel (in px). Default: `900`.
* __height__ | `number`: hoogte van het perceel (in px). Default: `600`.


## Voorbeelden

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

