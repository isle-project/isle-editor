---
id: confidence-coverage-sample
title: Confidence Interval Coverage Sample
sidebar_label: Confidence Interval Coverage Sample
---

Õppekomponent, mis illustreerib keskse piirväärtuse teoreemi (CLT), kui proovivõtmine toimub esitatud andmestikust.

## Valikud

* __data__ | `object (required)`: andmeobjekt, mille võtmed vastavad muutujate nimedele ja väärtused hoiavad vastavate muutujate väärtusi. Default: `none`.
* __samples__ | `(array<number>|number)`: numbrite massiivi või üksikuid numbreid, mis tähistavad valimi suurust, mida saab võtta.. Default: `25`.
* __variables__ | `array (required)`: nende muutujate nimed, millest võib võtta proove.. Default: `none`.


## Näited

```jsx live
<LearnConfidenceCoverageSample 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

