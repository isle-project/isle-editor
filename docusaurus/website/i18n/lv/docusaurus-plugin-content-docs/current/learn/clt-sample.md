---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

Mācību komponents, kas ilustrē Centrālo robežu teorēmu (CLT), ja paraugi tiek ņemti no iesniegtā datu kopuma.

## Iespējas

* __data__ | `object (required)`: datu objekts, kura atslēgas atbilst mainīgo nosaukumiem un vērtības - attiecīgo mainīgo vērtībām.. Default: `none`.
* __hidePopulationStdev__ | `boolean`: paslēpt populācijas standarta novirzes rādīšanu. Default: `false`.
* __samples__ | `(array<number>|number)`: skaitļu masīvs vai viens skaitlis, kas apzīmē izlases lielumu, ko var iegūt.. Default: `25`.
* __populationProbabilities__ | `boolean`: vai attēlot vienādojumus populācijas varbūtību aprēķināšanai.. Default: `false`.
* __quantiles__ | `boolean`: vai parādīt rīku jebkuru kvantiļu aprēķināšanai.. Default: `false`.
* __variables__ | `array (required)`: to mainīgo nosaukumi, no kuriem var ņemt paraugus.. Default: `none`.


## Piemēri

```jsx live
<LearnSampleCLT 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

