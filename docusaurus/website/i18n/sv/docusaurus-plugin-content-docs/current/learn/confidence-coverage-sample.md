---
id: confidence-coverage-sample
title: Confidence Interval Coverage Sample
sidebar_label: Confidence Interval Coverage Sample
---

En inlärningskomponent som illustrerar teoremet om den centrala gränsen (CLT) vid provtagning från en medföljande datamängd.

## Alternativ

* __data__ | `object (required)`: dataobjekt med nycklar som motsvarar variabelnamnen och värden som innehåller värdena för respektive variabler.. Default: `none`.
* __samples__ | `(array<number>|number)`: en rad siffror eller en enda siffra som anger de urvalsstorlekar som kan dras.. Default: `25`.
* __variables__ | `array (required)`: namn på variabler som kan tas ut som prov från. Default: `none`.


## Exempel

```jsx live
<LearnConfidenceCoverageSample 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

