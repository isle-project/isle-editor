---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Analýza hlavních komponent.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __variables__ | `array<string> (required)`: názvy proměnných použitých pro shlukování. Default: `none`.
* __center__ | `boolean`: středové hodnoty odečtením průměrné hodnoty. Default: `true`.
* __scale__ | `boolean`: dělením směrodatnou odchylkou.. Default: `false`.
* __noComponents__ | `number`: počet komponent dodaných zpětnému volání `onResult`. Default: `0`.
* __onResult__ | `function`: zpětné volání vyvolané s objektem modelu a komponentami. Default: `onResult() {}`.


## Příklady

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

