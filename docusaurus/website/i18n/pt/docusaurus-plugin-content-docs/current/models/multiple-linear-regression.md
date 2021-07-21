---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Regressão linear múltipla.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __y__ | `string (required)`: variável de resultado. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: uma ou mais variáveis preditoras. Default: `none`.
* __quantitative__ | `array<string> (required)`: conjunto de variáveis em "dados" que são "quantitativas". Default: `none`.
* __omitMissing__ | `boolean`: controla se devem ser omitidos os valores em falta. Default: `false`.
* __intercept__ | `boolean`: controla se um modelo deve ser adaptado com um termo de interceptação. Default: `true`.
* __onDiagnostics__ | `function`: chamada de retorno invocada com parcelas de diagnóstico. Default: `none`.
* __onPredict__ | `function`: chamada de retorno invocada com uma função de previsão para fazer previsões de novos dados. Default: `none`.


## Exemplos

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

