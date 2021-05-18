---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

Um componente de aprendizagem que ilustra o Teorema do Limite Central (CLT) quando da amostragem a partir de um conjunto de dados fornecido.

## Opções

* __data__ | `object (required)`: objeto de dados com chaves correspondem a nomes de variáveis e valores que contêm os valores das respectivas variáveis. Default: `none`.
* __hidePopulationStdev__ | `boolean`: ocultar exibição do desvio padrão da população. Default: `false`.
* __samples__ | `(array<number>|number)`: matriz de números ou um único número indicando os tamanhos de amostra que podem ser sorteados. Default: `25`.
* __populationProbabilities__ | `boolean`: se exibir equações para o cálculo das probabilidades da população. Default: `false`.
* __quantiles__ | `boolean`: se mostrar ferramenta para cálculo de qualquer quantil. Default: `false`.
* __variables__ | `array (required)`: nomes de variáveis que podem ser amostradas a partir de. Default: `none`.


## Exemplos

```jsx live
<LearnSampleCLT 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

