---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Naive Bayes olettaa, että luokan jäsenyyden perusteella annetut ennustajat noudattavat normaalijakaumaa.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __y__ | `(string|Factor) (required)`: tulosmuuttuja. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: yksi tai useampi ennustemuuttuja. Default: `none`.
* __quantitative__ | `array<string> (required)`: joukko `data`:n muuttujia, jotka ovat `kvantitatiivisia`.. Default: `none`.
* __omitMissing__ | `boolean`: valvoo, jätetäänkö puuttuvat arvot pois. Default: `false`.
* __onPredict__ | `function`: callback, jota kutsutaan ennusteiden ja jäännösten kanssa mallin sovittamisen jälkeen.. Default: `none`.


## Esimerkkejä

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

