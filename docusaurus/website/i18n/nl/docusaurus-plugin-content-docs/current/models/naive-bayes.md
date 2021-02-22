---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Naive Bayes gaat ervan uit dat de voorspellers gezien het klassenlidmaatschap een normale verdeling volgen.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __y__ | `string (required)`: resultaatvariabele. Default: `none`.
* __x__ | `(array<string>|string) (required)`: een of meer voorspellende variabelen. Default: `none`.
* __quantitative__ | `array<string> (required)`: array van variabelen in `data` die `kwantitatief` zijn. Default: `none`.
* __omitMissing__ | `boolean`: controleert of ontbrekende waarden moeten worden weggelaten. Default: `false`.
* __onPredict__ | `function`: callback ingeroepen met voorspellingen en restmateriaal na modelaanpassing. Default: `none`.


## Voorbeelden

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

