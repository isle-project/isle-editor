---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

Une trame de réseau basée sur d3.

## Options

* __data__ | `{nodes,links} (required)`: objet avec des "noeuds" et des "liens" ; "noeuds" doit être un tableau d'éléments avec une propriété "id", "liens" un tableau d'éléments avec un id "source" et "cible. Default: `none`.
* __width__ | `number`: largeur de la parcelle (en px). Default: `900`.
* __height__ | `number`: hauteur de la parcelle (en px). Default: `600`.


## Exemples

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

