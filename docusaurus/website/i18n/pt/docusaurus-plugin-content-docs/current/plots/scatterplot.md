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
* __text__ | `(string|Factor)`: textos a serem exibidos ao lado de cada ponto. Default: `none`.
* __color__ | `(string|Factor)`: variável categórica para mapear a cor dos pontos. Default: `none`.
* __type__ | `(string|Factor)`: variável categórica a ser mapeada para os símbolos exibidos. Default: `none`.
* __size__ | `string`: variável quantitativa a ser mapeada para o tamanho dos pontos. Default: `none`.
* __regressionLine__ | `boolean`: controla se deve sobrepor linha(s) de regressão. Default: `false`.
* __regressionMethod__ | `array<string>`: "linear" e/ou "suave" para exibir a regressão linear e a linha de regressão "BAIXA" suavizada. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: exibir linha de regressão separada para cada categoria de variável categórica especificada. Default: `none`.
* __smoothSpan__ | `number`: parâmetro de suavização do vão para a linha de regressão "lisa. Default: `0.66`.
* __jitterX__ | `boolean`: controla se a agitação aponta para o eixo x. Default: `false`.
* __jitterY__ | `boolean`: controla se a agitação aponta para o eixo y. Default: `false`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Colored', value: 'colored' },
        { label: 'Type', value: 'type' },
        { label: 'Regression Line', value: 'regressionLine' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Cost"
/>
```

</TabItem>


<TabItem value="grouped">

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
    group="Gender"
/>
```

</TabItem>

<TabItem value="colored">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Cost"
    color="Gender"
/>
```
</TabItem>

<TabItem value="type">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Interventions"
    color="Gender"
    type="Gender"
/>
```

</TabItem>

<TabItem value="regressionLine">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Interventions"
    regressionLine
    regressionMethod={['smooth']}
/>
```
</TabItem>

</Tabs>
