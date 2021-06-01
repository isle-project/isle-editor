---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Analys av huvudkomponenten.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __variables__ | `array<string> (required)`: Namn på variabler som används för klusterbildning.. Default: `none`.
* __center__ | `boolean`: centrumvärden genom att subtrahera medelvärdet. Default: `true`.
* __scale__ | `boolean`: Skala värden genom att dividera med standardavvikelsen.. Default: `false`.
* __noComponents__ | `number`: antal komponenter som levereras till "onResult"-kallfunktionen. Default: `0`.
* __onResult__ | `function`: callback som anropas med modellobjekt och komponenter. Default: `onResult() {}`.


## Exempel

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

