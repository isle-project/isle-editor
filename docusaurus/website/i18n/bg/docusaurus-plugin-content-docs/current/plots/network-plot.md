---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

Мрежови плот, базиран на d3.

## Опции

* __data__ | `{nodes,links} (required)`: обект с `нодове` и `връзки`; `нодове` трябва да бъде обективен масив от елементи със свойство `id`, а `връзки` - обективен масив от елементи с идентификатори `източник` и `цел`.. Default: `none`.
* __width__ | `number`: ширина на графиката (в px). Default: `900`.
* __height__ | `number`: височина на графиката (в px). Default: `600`.


## Примери

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

