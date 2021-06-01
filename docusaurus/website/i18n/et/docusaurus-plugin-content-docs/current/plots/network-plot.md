---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

d3-põhine võrgujoonis.

## Valikud

* __data__ | `{nodes,links} (required)`: objekt koos "sõlmede" ja "linkidega"; "sõlmed" peaks olema objektimassiiv, millel on "id"-omadus, "lingid" objektimassiiv, millel on "allikas" ja "siht" id.. Default: `none`.
* __width__ | `number`: joonise laius (px). Default: `900`.
* __height__ | `number`: joonise kõrgus (px). Default: `600`.


## Näited

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

