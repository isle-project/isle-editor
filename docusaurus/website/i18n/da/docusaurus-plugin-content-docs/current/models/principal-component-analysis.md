---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Hovedkomponentanalyse.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __variables__ | `array<string> (required)`: navne på variabler, der anvendes til klyngeopdeling. Default: `none`.
* __center__ | `boolean`: centerværdier ved at trække gennemsnittet fra. Default: `true`.
* __scale__ | `boolean`: skalere værdier ved at dividere med standardafvigelsen. Default: `false`.
* __noComponents__ | `number`: antallet af komponenter, der leveres til callback'en `onResult`.. Default: `0`.
* __onResult__ | `function`: callback påkaldt med modelobjekt og komponenter. Default: `onResult() {}`.


## Eksempler

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

