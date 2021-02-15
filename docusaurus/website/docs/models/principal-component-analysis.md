---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Principal component analysis.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __variables__ | `array<string> (required)`: names of variables used for clustering. Default: `none`.
* __center__ | `boolean`: center values by subtracting the mean. Default: `true`.
* __scale__ | `boolean`: scale values by dividing with the standard deviation. Default: `false`.
* __noComponents__ | `number`: number of components supplied to the `onResult` callback. Default: `0`.
* __onResult__ | `function`: callback invoked with model object and components. Default: `onResult() {}`.


## Examples

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

