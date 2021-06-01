---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Naive Bayes antager, at de forudsigere, der er givet klassetilhørsforholdet, følger en normalfordeling.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __y__ | `(string|Factor) (required)`: udfaldsvariabel. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: en eller flere prædiktorvariable. Default: `none`.
* __quantitative__ | `array<string> (required)`: array af variabler i `data`, der er `kvantitative`.. Default: `none`.
* __omitMissing__ | `boolean`: kontrollerer, om manglende værdier skal udelades. Default: `false`.
* __onPredict__ | `function`: callback påkaldt med forudsigelser og residualer efter tilpasning af modellen. Default: `none`.


## Eksempler

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

