---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Árvores de regressão e classificação.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __y__ | `(string|Factor) (required)`: variável de resultado. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: uma ou mais variáveis preditoras. Default: `none`.
* __type__ | `string`: atualmente somente a "Classificação" para respostas categóricas é suportada. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: conjunto de variáveis em "dados" que são "quantitativas". Default: `none`.
* __nTrees__ | `number`: número de árvores. Default: `50`.
* __nTry__ | `number`: número de preditores a verificar em cada divisão. Default: `1`.
* __impurityMeasure__ | `string`: medida de impureza (`gini` ou `entropy`). Default: `'gini'`.
* __scoreThreshold__ | `number`: limiar de pontuação para a divisão. Default: `0.01`.
* __maxTreeDepth__ | `number`: profundidade máxima das árvores. Default: `20`.
* __minItemsCount__ | `number`: mínimo # de observações em nós de folhas. Default: `50`.
* __onPredict__ | `function`: chamada de retorno invocada com o objeto modelo ao clicar no botão de previsão. Default: `none`.


## Exemplos

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

