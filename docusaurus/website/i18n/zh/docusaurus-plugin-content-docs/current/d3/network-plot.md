---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

基于d3的网络图。

## 选项

* __width__ | `number`: 绘图宽度(单位：px). Default: `900`.
* __height__ | `number`: 绘图高度(单位：px). Default: `600`.


## 例子

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

