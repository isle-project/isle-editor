---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Analiza componentelor principale.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __variables__ | `array<string> (required)`: numele variabilelor utilizate pentru grupare. Default: `none`.
* __center__ | `boolean`: valorile centrale prin scăderea mediei. Default: `true`.
* __scale__ | `boolean`: se scad valorile prin împărțirea cu abaterea standard. Default: `false`.
* __noComponents__ | `number`: numărul de componente furnizate la callback-ul `onResult`.. Default: `0`.
* __onResult__ | `function`: callback invocat cu obiectul model și componentele. Default: `onResult() {}`.


## Exemple

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

