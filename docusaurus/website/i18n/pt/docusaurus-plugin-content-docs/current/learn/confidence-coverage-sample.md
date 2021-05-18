---
id: confidence-coverage-sample
title: Confidence Interval Coverage Sample
sidebar_label: Confidence Interval Coverage Sample
---

Um componente de aprendizagem que ilustra o Teorema do Limite Central (CLT) quando da amostragem a partir de um conjunto de dados fornecido.

## Opções

* __data__ | `object (required)`: objeto de dados com chaves correspondem a nomes e valores de variáveis que contêm os valores das respectivas variáveis. Default: `none`.
* __samples__ | `(array<number>|number)`: matriz de números ou um único número indicando os tamanhos de amostra que podem ser sorteados. Default: `25`.
* __variables__ | `array (required)`: nomes de variáveis que podem ser amostradas a partir de. Default: `none`.


## Exemplos

```jsx live
<LearnConfidenceCoverageSample 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

