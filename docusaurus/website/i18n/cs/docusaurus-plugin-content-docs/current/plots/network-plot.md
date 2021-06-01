---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

Síťový graf založený na d3.

## Možnosti

* __data__ | `{nodes,links} (required)`: objekt s `nodes` a `links`; `nodes` by mělo být pole objektů s prvky s vlastností `id`, `links` pole objektů s prvky s id `source` a `target`.. Default: `none`.
* __width__ | `number`: šířka grafu (v px). Default: `900`.
* __height__ | `number`: výška grafu (v px). Default: `600`.


## Příklady

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

