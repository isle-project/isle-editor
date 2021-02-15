---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Naive Bayes unter der Annahme, dass die Prädiktoren angesichts der Klassenzugehörigkeit einer Normalverteilung folgen.

## Options

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __y__ | `string (required)`: Ergebnisvariable. Default: `none`.
* __x__ | `(array<string>|string) (required)`: eine oder mehrere Prädiktorvariablen. Default: `none`.
* __quantitative__ | `array<string> (required)`: Array von Variablen in `Daten`, die `quantitativ` sind. Default: `none`.
* __omitMissing__ | `boolean`: steuert, ob fehlende Werte ausgelassen werden sollen. Default: `false`.
* __onPredict__ | `function`: Callback, der mit Vorhersagen und Residuen nach der Modellanpassung aufgerufen wird. Default: `none`.


## Examples

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

