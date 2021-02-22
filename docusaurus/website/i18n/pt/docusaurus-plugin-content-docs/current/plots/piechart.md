---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Um componente de gráfico de torta que, por padrão, exibe as contagens de todas as categorias de uma variável escolhida.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __variable__ | `string (required)`: variável a exibir. Default: `none`.
* __group__ | `string`: variável de agrupamento. Default: `none`.
* __summaryVariable__ | `string`: variável opcional cuja soma a exibir para cada categoria "variável. Default: `none`.


## Exemplos

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

