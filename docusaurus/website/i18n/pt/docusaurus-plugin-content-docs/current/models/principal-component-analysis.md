---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Análise dos principais componentes.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __variables__ | `array<string> (required)`: nomes de variáveis utilizadas para agrupamento. Default: `none`.
* __center__ | `boolean`: valores centrais, subtraindo a média. Default: `true`.
* __scale__ | `boolean`: valores de escala por divisão com o desvio padrão. Default: `false`.
* __noComponents__ | `number`: número de componentes fornecidos para a chamada de retorno do "resultado". Default: `0`.
* __onResult__ | `function`: chamada de retorno invocada com o objeto modelo e componentes. Default: `onResult() {}`.


## Exemplos

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

