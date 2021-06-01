---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

Egy tanulási komponens, amely a központi határértéktételt (CLT) szemlélteti egy megadott adathalmazból történő mintavételezéskor.

## Opciók

* __data__ | `object (required)`: adatobjektum, amelynek kulcsai megfelelnek a változók nevének, az értékek pedig a megfelelő változók értékeit tartalmazzák.. Default: `none`.
* __hidePopulationStdev__ | `boolean`: a populáció szórásának elrejtése. Default: `false`.
* __samples__ | `(array<number>|number)`: számok tömbje vagy egyetlen szám, amely a kisorsolható mintanagyságokat jelöli.. Default: `25`.
* __populationProbabilities__ | `boolean`: a népesség valószínűségeinek kiszámításához szükséges egyenletek megjelenítése. Default: `false`.
* __quantiles__ | `boolean`: hogy megjelenjen-e a kvantilisek kiszámításához szükséges eszköz. Default: `false`.
* __variables__ | `array (required)`: olyan változók nevei, amelyekből mintát lehet venni. Default: `none`.


## Példák

```jsx live
<LearnSampleCLT 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

