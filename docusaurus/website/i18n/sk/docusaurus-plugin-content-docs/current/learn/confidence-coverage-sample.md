---
id: confidence-coverage-sample
title: Confidence Interval Coverage Sample
sidebar_label: Confidence Interval Coverage Sample
---

Učebná zložka ilustrujúca centrálnu limitnú vetu (CLT) pri vzorkovaní z dodaného súboru údajov.

## Možnosti

* __data__ | `object (required)`: dátový objekt, ktorého kľúče zodpovedajú menám premenných a hodnoty obsahujú hodnoty príslušných premenných. Default: `none`.
* __samples__ | `(array<number>|number)`: pole čísel alebo jedno číslo označujúce veľkosti vzoriek, ktoré je možné vybrať. Default: `25`.
* __variables__ | `array (required)`: názvy premenných, z ktorých možno vyberať vzorky. Default: `none`.


## Príklady

```jsx live
<LearnConfidenceCoverageSample 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

