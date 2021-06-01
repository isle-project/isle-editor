---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

Mrežni diagram na podlagi d3.

## Možnosti

* __data__ | `{nodes,links} (required)`: objekt z `nodes` in `links`; `nodes` mora biti objektno polje elementov z lastnostjo `id`, `links` pa objektno polje elementov z identoma `source` in `target`.. Default: `none`.
* __width__ | `number`: širina ploskve (v px). Default: `900`.
* __height__ | `number`: višina ploskve (v px). Default: `600`.


## Primeri

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

