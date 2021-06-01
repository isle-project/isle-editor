---
id: confidence-coverage-sample
title: Confidence Interval Coverage Sample
sidebar_label: Confidence Interval Coverage Sample
---

Učební komponenta ilustrující centrální limitní větu (CLT) při vzorkování z dodaného souboru dat.

## Možnosti

* __data__ | `object (required)`: datový objekt, jehož klíče odpovídají názvům proměnných a hodnoty hodnotám příslušných proměnných.. Default: `none`.
* __samples__ | `(array<number>|number)`: pole čísel nebo jednotlivá čísla označující velikosti vzorků, které lze vybírat.. Default: `25`.
* __variables__ | `array (required)`: názvy proměnných, z nichž lze odebírat vzorky.. Default: `none`.


## Příklady

```jsx live
<LearnConfidenceCoverageSample 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

