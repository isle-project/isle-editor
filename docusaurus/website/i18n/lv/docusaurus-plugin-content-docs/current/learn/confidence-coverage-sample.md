---
id: confidence-coverage-sample
title: Confidence Interval Coverage Sample
sidebar_label: Confidence Interval Coverage Sample
---

Mācību komponents, kas ilustrē Centrālo robežu teorēmu (CLT), ja paraugi tiek ņemti no iesniegtā datu kopuma.

## Iespējas

* __data__ | `object (required)`: datu objekts, kura atslēgas atbilst mainīgo nosaukumiem un vērtības - attiecīgo mainīgo vērtībām.. Default: `none`.
* __samples__ | `(array<number>|number)`: skaitļu masīvs vai viens skaitlis, kas apzīmē izlases lielumu, ko var iegūt.. Default: `25`.
* __variables__ | `array (required)`: to mainīgo nosaukumi, no kuriem var ņemt paraugus.. Default: `none`.


## Piemēri

```jsx live
<LearnConfidenceCoverageSample 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

