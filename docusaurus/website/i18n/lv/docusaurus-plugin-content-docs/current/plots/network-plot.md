---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

Uz d3 balstīts tīkla rasējums.

## Iespējas

* __data__ | `{nodes,links} (required)`: objekts ar `mezgliem` un `saitēm`; `mezgliem` jābūt elementu masīvam ar `id` īpašību, `saitēm` - objektu masīvam ar elementiem, kam ir `avota` un `mērķa` identifikators.. Default: `none`.
* __width__ | `number`: laukuma platums (px). Default: `900`.
* __height__ | `number`: laukuma augstums (px). Default: `600`.


## Piemēri

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

