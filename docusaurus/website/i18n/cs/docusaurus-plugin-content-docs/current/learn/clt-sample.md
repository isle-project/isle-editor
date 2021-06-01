---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

Učební komponenta ilustrující centrální limitní větu (CLT) při vzorkování z dodaného souboru dat.

## Možnosti

* __data__ | `object (required)`: datový objekt, jehož klíče odpovídají názvům proměnných a hodnoty hodnotám příslušných proměnných.. Default: `none`.
* __hidePopulationStdev__ | `boolean`: skrýt zobrazení směrodatné odchylky populace. Default: `false`.
* __samples__ | `(array<number>|number)`: pole čísel nebo jednotlivá čísla označující velikosti vzorků, které lze vybírat.. Default: `25`.
* __populationProbabilities__ | `boolean`: zda zobrazit rovnice pro výpočet populačních pravděpodobností.. Default: `false`.
* __quantiles__ | `boolean`: zda zobrazit nástroj pro výpočet kvantilů.. Default: `false`.
* __variables__ | `array (required)`: názvy proměnných, z nichž lze odebírat vzorky.. Default: `none`.


## Příklady

```jsx live
<LearnSampleCLT 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

