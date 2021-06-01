---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

Oppimiskomponentti, joka havainnollistaa CLT-teorian (Central Limit Theorem), kun näytteitä otetaan annetusta datajoukosta.

## Vaihtoehdot

* __data__ | `object (required)`: datakohde, jonka avaimet vastaavat muuttujien nimiä ja arvot vastaavat muuttujien arvoja.. Default: `none`.
* __hidePopulationStdev__ | `boolean`: piilottaa populaation keskihajonnan näytön. Default: `false`.
* __samples__ | `(array<number>|number)`: numerosarja tai yksittäinen numero, joka ilmaisee otoskokoja, jotka voidaan ottaa.. Default: `25`.
* __populationProbabilities__ | `boolean`: näytetäänkö yhtälöt väestötodennäköisyyksien laskemista varten.. Default: `false`.
* __quantiles__ | `boolean`: näytetäänkö kvantiilien laskentatyökalu?. Default: `false`.
* __variables__ | `array (required)`: niiden muuttujien nimet, joista voidaan ottaa näytteitä.. Default: `none`.


## Esimerkkejä

```jsx live
<LearnSampleCLT 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

