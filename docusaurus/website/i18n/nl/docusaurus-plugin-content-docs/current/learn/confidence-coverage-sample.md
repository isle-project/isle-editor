---
id: confidence-coverage-sample
title: Confidence Interval Coverage Sample
sidebar_label: Confidence Interval Coverage Sample
---

Een leercomponent die de Centrale Limietstheorie (CLT) illustreert bij het bemonsteren van een aangeleverde dataset.

## Opties

* __data__ | `object (required)`: gegevensobject met toetsen komen overeen met namen van variabelen en waarden die de waarden van de respectieve variabelen bevatten. Default: `none`.
* __samples__ | `(array<number>|number)`: array van getallen of een enkel getal dat de te trekken steekproefgroottes aanduidt. Default: `25`.
* __variables__ | `array (required)`: namen van variabelen die kunnen worden bemonsterd uit. Default: `none`.


## Voorbeelden

```jsx live
<LearnConfidenceCoverageSample 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

