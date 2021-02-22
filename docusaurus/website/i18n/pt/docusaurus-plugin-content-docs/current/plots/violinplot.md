---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

Uma trama de violino.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __variable__ | `string (required)`: variável a exibir. Default: `none`.
* __group__ | `string`: variável de agrupamento. Default: `none`.
* __showBox__ | `boolean`: controla se deve exibir um gráfico de caixa dentro. Default: `false`.


## Exemplos

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
/>
```

