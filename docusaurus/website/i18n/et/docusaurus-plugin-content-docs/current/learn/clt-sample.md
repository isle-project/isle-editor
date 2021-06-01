---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

Õppekomponent, mis illustreerib keskse piirväärtuse teoreemi (CLT), kui proovivõtmine toimub esitatud andmestikust.

## Valikud

* __data__ | `object (required)`: andmeobjekt, mille võtmed vastavad muutujate nimedele ja väärtused hoiavad vastavate muutujate väärtusi. Default: `none`.
* __hidePopulationStdev__ | `boolean`: varjata populatsiooni standardhälbe kuvamine. Default: `false`.
* __samples__ | `(array<number>|number)`: numbrite massiivi või üksikuid numbreid, mis tähistavad valimi suurust, mida saab võtta.. Default: `25`.
* __populationProbabilities__ | `boolean`: kas kuvada võrrandid populatsiooni tõenäosuse arvutamiseks. Default: `false`.
* __quantiles__ | `boolean`: kas näidata mis tahes kvantiteedi arvutamise vahendit. Default: `false`.
* __variables__ | `array (required)`: nende muutujate nimed, millest võib võtta proove.. Default: `none`.


## Näited

```jsx live
<LearnSampleCLT 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

