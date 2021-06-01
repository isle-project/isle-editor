---
id: confidence-coverage-sample
title: Confidence Interval Coverage Sample
sidebar_label: Confidence Interval Coverage Sample
---

Egy tanulási komponens, amely a központi határértéktételt (CLT) szemlélteti egy megadott adathalmazból történő mintavételezéskor.

## Opciók

* __data__ | `object (required)`: adatobjektum, amelynek kulcsai megfelelnek a változók nevének, az értékek pedig a megfelelő változók értékeit tartalmazzák.. Default: `none`.
* __samples__ | `(array<number>|number)`: számok tömbje vagy egyetlen szám, amely a kisorsolható mintanagyságokat jelöli.. Default: `25`.
* __variables__ | `array (required)`: olyan változók nevei, amelyekből mintát lehet venni. Default: `none`.


## Példák

```jsx live
<LearnConfidenceCoverageSample 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

