---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Analiza głównych składników.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __variables__ | `array<string> (required)`: nazwy zmiennych wykorzystywanych do tworzenia klastrów. Default: `none`.
* __center__ | `boolean`: środkowe wartości poprzez odjęcie średniej. Default: `true`.
* __scale__ | `boolean`: wartości skali poprzez podzielenie ich odchyleniem standardowym. Default: `false`.
* __noComponents__ | `number`: liczba komponentów dostarczanych do wywołania zwrotnego "na wynik. Default: `0`.
* __onResult__ | `function`: wywołanie zwrotne z obiektem i komponentami modelu. Default: `onResult() {}`.


## Przykłady

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

