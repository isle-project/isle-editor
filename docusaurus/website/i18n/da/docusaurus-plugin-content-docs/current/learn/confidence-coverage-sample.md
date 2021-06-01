---
id: confidence-coverage-sample
title: Confidence Interval Coverage Sample
sidebar_label: Confidence Interval Coverage Sample
---

En læringskomponent, der illustrerer den centrale grænsesætning (CLT) ved stikprøveudtagning fra et leveret datasæt.

## Indstillinger

* __data__ | `object (required)`: dataobjekt med nøgler, der svarer til variabelnavne, og værdier, der indeholder værdierne for de respektive variabler. Default: `none`.
* __samples__ | `(array<number>|number)`: en række tal eller et enkelt tal, der angiver de stikprøvestørrelser, der kan udtages. Default: `25`.
* __variables__ | `array (required)`: navne på variabler, der kan udtages som prøve fra. Default: `none`.


## Eksempler

```jsx live
<LearnConfidenceCoverageSample 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

