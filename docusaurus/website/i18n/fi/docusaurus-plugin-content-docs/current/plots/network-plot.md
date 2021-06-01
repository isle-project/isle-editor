---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

d3-pohjainen verkkokuvio.

## Vaihtoehdot

* __data__ | `{nodes,links} (required)`: objekti, jossa on "solmut" ja "linkit"; "solmujen" pitäisi olla objektijoukko elementtejä, joilla on "id"-ominaisuus, "linkkien" objektijoukko elementtejä, joilla on "lähde"- ja "kohde"-tunnukset.. Default: `none`.
* __width__ | `number`: kuvaajan leveys (px). Default: `900`.
* __height__ | `number`: kuvaajan korkeus (px). Default: `600`.


## Esimerkkejä

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

