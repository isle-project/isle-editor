---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

d3 pagrįstas tinklo sklypas.

## Parinktys

* __data__ | `{nodes,links} (required)`: objektas su `mazgais` ir `atšakomis`; `mazgai` turėtų būti elementų masyvas su savybe `id`, `atšakos` - objektų masyvas su elementais, turinčiais `šaltinio` ir `tikslo` ID. Default: `none`.
* __width__ | `number`: sklypo plotis (px). Default: `900`.
* __height__ | `number`: sklypo aukštis (px). Default: `600`.


## Pavyzdžiai

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

