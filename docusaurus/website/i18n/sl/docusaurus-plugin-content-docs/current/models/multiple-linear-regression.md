---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Večkratna linearna regresija.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __y__ | `string (required)`: spremenljivka rezultata. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: ena ali več napovednih spremenljivk.. Default: `none`.
* __quantitative__ | `array<string> (required)`: polje spremenljivk v `data`, ki so `kvantitativne`. Default: `none`.
* __omitMissing__ | `boolean`: nadzoruje, ali se manjkajoče vrednosti izpustijo.. Default: `false`.
* __intercept__ | `boolean`: določa, ali naj se model prilagodi z izrazom intercept.. Default: `true`.
* __onDiagnostics__ | `function`: povratni klic, sprožen z diagnostičnimi parcelami. Default: `none`.
* __onPredict__ | `function`: undefined. Default: `none`.


## Primeri

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

