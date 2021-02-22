---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Naive Bayes assumindo que os prognosticadores dados aos membros da classe seguem uma distribuição normal.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __y__ | `string (required)`: variável de resultado. Default: `none`.
* __x__ | `(array<string>|string) (required)`: uma ou mais variáveis preditoras. Default: `none`.
* __quantitative__ | `array<string> (required)`: conjunto de variáveis em "dados" que são "quantitativas".. Default: `none`.
* __omitMissing__ | `boolean`: controla se devem ser omitidos os valores em falta. Default: `false`.
* __onPredict__ | `function`: chamada de retorno invocada com previsões e resíduos após a montagem do modelo. Default: `none`.


## Exemplos

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

