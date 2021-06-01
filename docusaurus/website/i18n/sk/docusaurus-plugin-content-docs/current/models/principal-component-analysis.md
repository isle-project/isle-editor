---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Analýza hlavných komponentov.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __variables__ | `array<string> (required)`: názvy premenných použitých na zhlukovanie. Default: `none`.
* __center__ | `boolean`: stredových hodnôt odčítaním priemernej hodnoty. Default: `true`.
* __scale__ | `boolean`: stupnice hodnôt delením so štandardnou odchýlkou. Default: `false`.
* __noComponents__ | `number`: počet komponentov dodaných do spätného volania `onResult`. Default: `0`.
* __onResult__ | `function`: spätné volanie vyvolané pomocou objektu modelu a komponentov. Default: `onResult() {}`.


## Príklady

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

