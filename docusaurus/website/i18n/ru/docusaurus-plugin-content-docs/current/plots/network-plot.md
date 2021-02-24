---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

Сетевой участок на основе d3.

## Варианты

* __data__ | `{nodes,links} (required)`: объект с `узлами` и `ссылками`; `узлы` должны представлять собой массив элементов со свойством `id`, `ссылками` - массив объектов с элементами, имеющими `источник` и `target` id.. Default: `none`.
* __width__ | `number`: ширина участка (в px). Default: `900`.
* __height__ | `number`: высота участка (в px). Default: `600`.


## Примеры

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

