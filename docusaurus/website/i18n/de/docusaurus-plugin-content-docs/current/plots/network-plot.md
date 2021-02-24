---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

Eine d3-basierte Netzwerkdarstellung.

## Optionen

* __data__ | `{nodes,links} (required)`: Objekt mit `Knoten` und `Verknüpfungen`; `Knoten` sollte ein Objekt-Array von Elementen mit einer `id`-Eigenschaft sein, `Verknüpfungen` ein Objekt-Array mit Elementen mit einer `Quelle` und `Ziel`-Id. Default: `none`.
* __width__ | `number`: Breite des Plots (in px). Default: `900`.
* __height__ | `number`: Höhe des Plots (in px). Default: `600`.


## Beispiele

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

