---
id: confidence-coverage-sample
title: Confidence Interval Coverage Sample
sidebar_label: Confidence Interval Coverage Sample
---

Učna komponenta, ki ponazarja centralni limitni teorem (CLT) pri vzorčenju iz predloženega nabora podatkov.

## Možnosti

* __data__ | `object (required)`: podatkovni objekt s ključi, ki ustrezajo imenom spremenljivk, in vrednostmi, ki vsebujejo vrednosti ustreznih spremenljivk.. Default: `none`.
* __samples__ | `(array<number>|number)`: polje številk ali ena sama številka, ki označuje velikost vzorca, ki ga je mogoče sestaviti.. Default: `25`.
* __variables__ | `array (required)`: imena spremenljivk, ki jih je mogoče vzorčiti iz. Default: `none`.


## Primeri

```jsx live
<LearnConfidenceCoverageSample 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

