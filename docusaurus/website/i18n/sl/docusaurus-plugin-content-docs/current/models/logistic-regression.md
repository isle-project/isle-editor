---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Logistična regresija.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __y__ | `(string|Factor) (required)`: spremenljivka rezultata. Default: `none`.
* __success__ | `any (required)`: kategorija uspeha `y`. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: ena ali več napovednih spremenljivk.. Default: `none`.
* __quantitative__ | `array<string> (required)`: polje spremenljivk v `data`, ki so `kvantitativne`. Default: `none`.
* __omitMissing__ | `boolean`: nadzoruje, ali se manjkajoče vrednosti izpustijo.. Default: `false`.
* __intercept__ | `boolean`: določa, ali naj se model prilagodi z izrazom intercept.. Default: `true`.
* __onPredict__ | `function`: povratni klic, ki se sproži z napovedmi in ostanki po prilagajanju modela. Default: `none`.


## Primeri

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

