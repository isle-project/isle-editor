---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

主成分分析。

## Options

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __variables__ | `array<string> (required)`: 聚类变量的名称. Default: `none`.
* __center__ | `boolean`: 中心值减去平均值. Default: `true`.
* __scale__ | `boolean`: 标尺值除以标准差。. Default: `false`.
* __noComponents__ | `number`: 提供给 "onResult "回调的组件数量。. Default: `0`.
* __onResult__ | `function`: 用模型对象和组件调用回调. Default: `onResult() {}`.


## Examples

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

