---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

Regressão LASSO.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __y__ | `string (required)`: variável de resultado. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: uma ou mais variáveis preditoras. Default: `none`.
* __quantitative__ | `array<string> (required)`: conjunto de variáveis em "dados" que são "quantitativas".. Default: `none`.
* __lambda__ | `number`: parâmetro de regularização. Default: `0.001`.
* __intercept__ | `boolean`: controla se um modelo deve ser adaptado com um termo de interceptação. Default: `true`.
* __onPredict__ | `function`: chamada de retorno invocada com previsões e resíduos após a montagem do modelo. Default: `onPredict() {}`.


## Exemplos

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

