---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Regressão linear simples.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __x__ | `string (required)`: variável explicativa. Default: `none`.
* __y__ | `string (required)`: variável de resposta. Default: `none`.
* __group__ | `(string|Factor)`: variável de agrupamento. Default: `none`.
* __omitMissing__ | `boolean`: controla se devem ser omitidos os valores em falta na montagem do modelo. Default: `false`.
* __onDiagnostics__ | `function`: chamada de retorno invocada com parcelas de diagnóstico. Default: `none`.
* __onPredict__ | `function`: chamada de retorno invocada com valores ajustados e resíduos. Default: `none`.


## Exemplos

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

