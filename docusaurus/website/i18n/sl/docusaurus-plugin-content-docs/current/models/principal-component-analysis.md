---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Analiza glavnih komponent.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __variables__ | `array<string> (required)`: imena spremenljivk, uporabljenih za grozdenje. Default: `none`.
* __center__ | `boolean`: središčne vrednosti z odštevanjem povprečne vrednosti. Default: `true`.
* __scale__ | `boolean`: vrednosti na lestvici delite s standardnim odklonom.. Default: `false`.
* __noComponents__ | `number`: število komponent, ki se posredujejo povratnemu klicu `onResult`. Default: `0`.
* __onResult__ | `function`: povratni klic, sprožen z objektom modela in komponentami. Default: `onResult() {}`.


## Primeri

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

