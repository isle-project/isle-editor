---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

基于d3的网络图。

## 选项

* __data__ | `{nodes,links} (required)`: 具有`节点`和`链接`的对象；`节点`应该是一个具有`id`属性的元素的对象数组，`链接`是一个具有`source`和`target`id的元素的对象数组。. Default: `none`.
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

