---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

A d3-based network plot.

## Options

* __data__ | `{nodes,links} (required)`: object with `nodes` and `links`; `nodes` should be an object array of elements with an `id` property, `links` an object array with elements having a `source` and `target` id. Default: `none`.
* __width__ | `number`: width of the plot (in px). Default: `900`.
* __height__ | `number`: height of the plot (in px). Default: `600`.


## Examples

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

