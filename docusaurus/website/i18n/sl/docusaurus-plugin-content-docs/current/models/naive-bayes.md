---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Naivni Bayes predpostavlja, da napovedniki glede na pripadnost razredu sledijo normalni porazdelitvi.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __y__ | `(string|Factor) (required)`: spremenljivka rezultata. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: ena ali več napovednih spremenljivk.. Default: `none`.
* __quantitative__ | `array<string> (required)`: polje spremenljivk v `data`, ki so `kvantitativne`. Default: `none`.
* __omitMissing__ | `boolean`: nadzoruje, ali se manjkajoče vrednosti izpustijo.. Default: `false`.
* __onPredict__ | `function`: povratni klic, ki se sproži z napovedmi in ostanki po prilagajanju modela. Default: `none`.


## Primeri

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

