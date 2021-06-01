---
id: confidence-coverage-sample
title: Confidence Interval Coverage Sample
sidebar_label: Confidence Interval Coverage Sample
---

Компонент за обучение, илюстриращ Централната гранична теорема (ЦГТ) при вземане на извадка от предоставен набор от данни.

## Опции

* __data__ | `object (required)`: обект за данни, чиито ключове съответстват на имената на променливите, а стойностите съдържат стойностите на съответните променливи.. Default: `none`.
* __samples__ | `(array<number>|number)`: масив от числа или единично число, обозначаващо размерите на извадките, които могат да бъдат направени. Default: `25`.
* __variables__ | `array (required)`: имена на променливи, от които могат да се правят извадки. Default: `none`.


## Примери

```jsx live
<LearnConfidenceCoverageSample 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

