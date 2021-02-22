---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Compromete o valor mínimo e máximo de uma matriz.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor para cada variável. Default: `none`.
* __xval__ | `string (required)`: variável a ser exibida no eixo x. Default: `none`.
* __yval__ | `string (required)`: variável a exibir no eixo y. Default: `none`.
* __text__ | `string`: textos a serem exibidos ao lado de cada ponto. Default: `none`.
* __color__ | `string`: variável categórica para mapear a cor dos pontos. Default: `none`.
* __type__ | `string`: variável categórica a ser mapeada para os símbolos exibidos. Default: `none`.
* __size__ | `string`: variável quantitativa a ser mapeada para o tamanho dos pontos. Default: `none`.
* __regressionLine__ | `boolean`: controla se deve sobrepor linha(s) de regressão. Default: `false`.
* __regressionMethod__ | `array<string>`: "linear" e/ou "suave" para exibir a regressão linear e a linha de regressão "BAIXA" suavizada. Default: `[
  'linear'
]`.
* __lineBy__ | `string`: exibir linha de regressão separada para cada categoria de variável categórica especificada. Default: `none`.
* __smoothSpan__ | `number`: parâmetro de suavização do vão para a linha de regressão "lisa. Default: `0.66`.


## Exemplos

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Cost"
/>
```

