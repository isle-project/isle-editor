---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Regressão linear múltipla.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __y__ | `string (required)`: variável de resultado. Default: `none`.
* __success__ | `any (required)`: categoria de sucesso do `y`. Default: `none`.
* __x__ | `(array<string>|string) (required)`: uma ou mais variáveis preditoras. Default: `none`.
* __quantitative__ | `array<string> (required)`: conjunto de variáveis em "dados" que são "quantitativas".. Default: `none`.
* __omitMissing__ | `boolean`: controla se devem ser omitidos os valores em falta. Default: `false`.
* __intercept__ | `boolean`: controla se um modelo deve ser adaptado com um termo de interceptação. Default: `true`.
* __onPredict__ | `function`: chamada de retorno invocada com previsões e resíduos após a montagem do modelo. Default: `none`.


## Exemplos

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

