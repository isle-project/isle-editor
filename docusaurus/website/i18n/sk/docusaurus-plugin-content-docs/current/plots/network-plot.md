---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

Sieťový graf založený na d3.

## Možnosti

* __data__ | `{nodes,links} (required)`: objekt s `uzlami` a `odkazmi`; `uzly` by malo byť objektové pole prvkov s vlastnosťou `id`, `odkazy` objektové pole s prvkami s id `zdroja` a `cieľa`. Default: `none`.
* __width__ | `number`: šírka grafu (v px). Default: `900`.
* __height__ | `number`: výška grafu (v px). Default: `600`.


## Príklady

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

