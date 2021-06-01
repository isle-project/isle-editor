---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

Un grafic de rețea bazat pe d3.

## Opțiuni

* __data__ | `{nodes,links} (required)`: obiect cu `nodes` și `links`; `nodes` ar trebui să fie o matrice de obiecte cu elemente cu o proprietate `id`, `links` o matrice de obiecte cu elemente având un id `source` și `target`.. Default: `none`.
* __width__ | `number`: lățimea graficului (în px). Default: `900`.
* __height__ | `number`: înălțimea graficului (în px). Default: `600`.


## Exemple

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

