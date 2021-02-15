---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Árvores de regressão e classificação.

## Options

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __y__ | `string (required)`: variável de resultado. Default: `none`.
* __x__ | `(array<string>|string) (required)`: uma ou mais variáveis preditoras. Default: `none`.
* __type__ | `string (required)`: "Classificação" para resultados categóricos ou "Regressão" para resultados quantitativos. Default: `none`.
* __quantitative__ | `array<string> (required)`: conjunto de variáveis em "dados" que são "quantitativas".. Default: `none`.
* __impurityMeasure__ | `string`: medida de impureza (`gini` ou `entropy`). Default: `'gini'`.
* __scoreThreshold__ | `number`: limiar de pontuação para a divisão. Default: `0.0075`.
* __maxTreeDepth__ | `number`: profundidade máxima das árvores. Default: `5`.
* __minItemsCount__ | `number`: mínimo # de observações em nós de folhas. Default: `50`.
* __onPredict__ | `function`: chamada de retorno invocada com o objeto modelo ao clicar no botão de previsão. Default: `none`.


## Examples

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

