---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

Компонент за обучение, илюстриращ Централната гранична теорема (ЦГТ) при вземане на извадка от предоставен набор от данни.

## Опции

* __data__ | `object (required)`: обект за данни, чиито ключове съответстват на имената на променливите, а стойностите съдържат стойностите на съответните променливи.. Default: `none`.
* __hidePopulationStdev__ | `boolean`: скриване на показването на стандартното отклонение на популацията. Default: `false`.
* __samples__ | `(array<number>|number)`: масив от числа или единично число, обозначаващо размерите на извадките, които могат да бъдат направени. Default: `25`.
* __populationProbabilities__ | `boolean`: дали да се показват уравнения за изчисляване на вероятностите на населението. Default: `false`.
* __quantiles__ | `boolean`: дали да се покаже инструмент за изчисляване на всички квантили. Default: `false`.
* __variables__ | `array (required)`: имена на променливи, от които могат да се правят извадки. Default: `none`.


## Примери

```jsx live
<LearnSampleCLT 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

