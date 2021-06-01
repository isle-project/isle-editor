---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

En inlärningskomponent som illustrerar teoremet om den centrala gränsen (CLT) vid provtagning från en medföljande datamängd.

## Alternativ

* __data__ | `object (required)`: dataobjekt med nycklar som motsvarar variabelnamnen och värden som innehåller värdena för respektive variabler.. Default: `none`.
* __hidePopulationStdev__ | `boolean`: dölja visning av populationens standardavvikelse. Default: `false`.
* __samples__ | `(array<number>|number)`: en rad siffror eller en enda siffra som anger de urvalsstorlekar som kan dras.. Default: `25`.
* __populationProbabilities__ | `boolean`: Om ekvationer för beräkning av sannolikheter för populationen ska visas.. Default: `false`.
* __quantiles__ | `boolean`: om det ska visas ett verktyg för beräkning av kvantilar.. Default: `false`.
* __variables__ | `array (required)`: namn på variabler som kan tas ut som prov från. Default: `none`.


## Exempel

```jsx live
<LearnSampleCLT 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

