---
id: confidence-coverage-sample
title: Confidence Interval Coverage Sample
sidebar_label: Confidence Interval Coverage Sample
---

Oppimiskomponentti, joka havainnollistaa CLT-teorian (Central Limit Theorem), kun näytteitä otetaan annetusta datajoukosta.

## Vaihtoehdot

* __data__ | `object (required)`: datakohde, jonka avaimet vastaavat muuttujien nimiä ja arvot vastaavat muuttujien arvoja.. Default: `none`.
* __samples__ | `(array<number>|number)`: numerosarja tai yksittäinen numero, joka ilmaisee otoskokoja, jotka voidaan ottaa.. Default: `25`.
* __variables__ | `array (required)`: niiden muuttujien nimet, joista voidaan ottaa näytteitä.. Default: `none`.


## Esimerkkejä

```jsx live
<LearnConfidenceCoverageSample 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

