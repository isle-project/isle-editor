---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

Uma trama de rede baseada em d3.

## Opções

* __data__ | `{nodes,links} (required)`: Os "nós" e os "links"; os "nós" devem ser um conjunto de elementos com uma propriedade "id", "links" um conjunto de elementos com uma id "fonte" e "alvo".. Default: `none`.
* __width__ | `number`: largura da parcela (em px). Default: `900`.
* __height__ | `number`: altura da parcela (em px). Default: `600`.


## Exemplos

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

