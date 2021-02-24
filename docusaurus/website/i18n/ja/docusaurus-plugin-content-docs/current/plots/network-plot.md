---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

d3ベースのネットワークプロット。

## オプション

* __data__ | `{nodes,links} (required)`: オブジェクトは `nodes` と `links` を持ち、`nodes` は `id` プロパティを持つ要素のオブジェクト配列、`links` は `source` と `target` の ID を持つ要素のオブジェクト配列でなければなりません。. Default: `none`.
* __width__ | `number`: プロットの幅. Default: `900`.
* __height__ | `number`: 区画の高さ. Default: `600`.


## 例としては、以下のようなものがあります。

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

