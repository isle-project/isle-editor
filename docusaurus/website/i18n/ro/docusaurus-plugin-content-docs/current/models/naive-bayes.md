---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Naive Bayes presupune că predictorii, având în vedere apartenența la clasă, urmează o distribuție normală.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __y__ | `(string|Factor) (required)`: variabilă de rezultat. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: una sau mai multe variabile predictive. Default: `none`.
* __quantitative__ | `array<string> (required)`: matrice de variabile din `data` care sunt `cuantitative`.. Default: `none`.
* __omitMissing__ | `boolean`: controlează dacă se omit valorile lipsă. Default: `false`.
* __onPredict__ | `function`: callback invocat cu predicțiile și reziduurile după ajustarea modelului. Default: `none`.


## Exemple

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

