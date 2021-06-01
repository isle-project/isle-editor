---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

Učebná zložka ilustrujúca centrálnu limitnú vetu (CLT) pri vzorkovaní z dodaného súboru údajov.

## Možnosti

* __data__ | `object (required)`: dátový objekt, ktorého kľúče zodpovedajú menám premenných a hodnoty obsahujú hodnoty príslušných premenných. Default: `none`.
* __hidePopulationStdev__ | `boolean`: skryť zobrazenie štandardnej odchýlky populácie. Default: `false`.
* __samples__ | `(array<number>|number)`: pole čísel alebo jedno číslo označujúce veľkosti vzoriek, ktoré je možné vybrať. Default: `25`.
* __populationProbabilities__ | `boolean`: či sa majú zobrazovať rovnice na výpočet pravdepodobnosti populácie. Default: `false`.
* __quantiles__ | `boolean`: či sa má zobraziť nástroj na výpočet akýchkoľvek kvantilov. Default: `false`.
* __variables__ | `array (required)`: názvy premenných, z ktorých možno vyberať vzorky. Default: `none`.


## Príklady

```jsx live
<LearnSampleCLT 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

