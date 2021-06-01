---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

Egy d3-alapú hálózati ábrázolás.

## Opciók

* __data__ | `{nodes,links} (required)`: objektum "csomópontokkal" és "hivatkozásokkal"; a "csomópontok" egy "azonosító" tulajdonsággal rendelkező elemekből álló objektumtömb, a "hivatkozások" pedig egy "forrás" és "cél" azonosítóval rendelkező elemekből álló objektumtömb.. Default: `none`.
* __width__ | `number`: a plot szélessége (px-ben). Default: `900`.
* __height__ | `number`: a plot magassága (px-ben). Default: `600`.


## Példák

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

