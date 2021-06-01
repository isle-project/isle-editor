---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

Mokymosi komponentas, iliustruojantis centrinę ribinę teoremą (CLT), kai imtys imamos iš pateikto duomenų rinkinio.

## Parinktys

* __data__ | `object (required)`: duomenų objektas, kurio raktai atitinka kintamųjų pavadinimus, o reikšmės - atitinkamų kintamųjų reikšmes.. Default: `none`.
* __hidePopulationStdev__ | `boolean`: paslėpti populiacijos standartinio nuokrypio rodymą. Default: `false`.
* __samples__ | `(array<number>|number)`: skaičių masyvą arba vieną skaičių, žymintį imties dydžius, kuriuos galima sudaryti.. Default: `25`.
* __populationProbabilities__ | `boolean`: ar rodyti populiacijos tikimybių skaičiavimo lygtis.. Default: `false`.
* __quantiles__ | `boolean`: ar rodyti bet kokių kvantilių skaičiavimo įrankį. Default: `false`.
* __variables__ | `array (required)`: kintamųjų, iš kurių galima imti imtį, pavadinimai. Default: `none`.


## Pavyzdžiai

```jsx live
<LearnSampleCLT 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

