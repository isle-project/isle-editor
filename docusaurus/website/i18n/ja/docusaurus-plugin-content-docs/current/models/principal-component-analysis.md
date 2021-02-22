---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

主成分分析。

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variables__ | `array<string> (required)`: クラスタリングに使用される変数名. Default: `none`.
* __center__ | `boolean`: の平均値を差し引いた値が中心値となります。. Default: `true`.
* __scale__ | `boolean`: 標準偏差で割ったスケール値. Default: `false`.
* __noComponents__ | `number`: onResult` コールバックに供給されるコンポーネントの数. Default: `0`.
* __onResult__ | `function`: モデルオブジェクトとコンポーネントで呼び出されるコールバック. Default: `onResult() {}`.


## 例としては、以下のようなものがあります。

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

