---
id: confidence-coverage-sample
title: Confidence Interval Coverage Sample
sidebar_label: Confidence Interval Coverage Sample
---

Mokymosi komponentas, iliustruojantis centrinę ribinę teoremą (CLT), kai imtys imamos iš pateikto duomenų rinkinio.

## Parinktys

* __data__ | `object (required)`: duomenų objektas, kurio raktai atitinka kintamųjų pavadinimus, o reikšmės - atitinkamų kintamųjų reikšmes.. Default: `none`.
* __samples__ | `(array<number>|number)`: skaičių masyvą arba vieną skaičių, žymintį imties dydžius, kuriuos galima sudaryti.. Default: `25`.
* __variables__ | `array (required)`: kintamųjų, iš kurių galima imti imtį, pavadinimai. Default: `none`.


## Pavyzdžiai

```jsx live
<LearnConfidenceCoverageSample 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

