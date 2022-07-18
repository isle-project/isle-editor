---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Um histograma.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __variable__ | `string (required)`: variável a exibir. Default: `none`.
* __group__ | `(string|Factor)`: variável de agrupamento. Default: `none`.
* __title__ | `string`: título do histograma. Default: `none`.
* __groupMode__ | `string`: se devem sobrepor histogramas agrupados uns sobre os outros (`Overlay') ou em parcelas separadas umas ao lado das outras (`Facetas'). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: controla se deve exibir valores de densidade em vez de contar com o eixo y. Default: `false`.
* __densityType__ | `(string|array<string>)`: ao exibir densidades, pode-se sobrepor distribuição(ões) paramétrica(s) (`Normal', `Uniforme', `T', 'Chi-quadrado', ou `Exponencial') e/ou uma estimativa de densidade de núcleo não paramétrica (`Data-driven'). Default: `none`.
* __densityParams__ | `(array<number>|any)`: parâmetros de distribuição para a densidade quando uma distribuição paramétrica é utilizada ([mu, sigma] para uma distribuição normal, [a, b] para uma distribuição uniforme, [lambda] para uma distribuição exponencial) ou um objeto mapeando nomes de distribuição para parâmetros quando múltiplas densidades devem ser exibidas (por exemplo, `{'Normal': [mu, sigma], 'Uniforme': [a, b]}, 'Exponencial': [lambda]}`). Default: `[]`.
* __bandwidthAdjust__ | `number`: ajuste manual da largura de banda da densidade do núcleo (aplicável somente quando o "Tipo de densidade" estiver definido como "Acionado por dados"). Default: `1`.
* __binStrategy__ | `string`: estratégia de fiação (`Automático`, `Selecionar # de caixas`, ou `Configurar largura da caixa`). Default: `'Automatic'`.
* __nBins__ | `number`: número personalizado de silos. Default: `none`.
* __nCols__ | `number`: número de colunas ao exibir um histograma agrupado facetado. Default: `none`.
* __xBins__ | `{start,size,end}`: objeto com propriedades de "início", "tamanho" e "fim" que governam o comportamento de encinchamento. Default: `{}`.
* __sameXRange__ | `boolean`: se for verdade, o alcance do eixo x para cada faceta será o mesmo que o histograma geral. Default: `false`.
* __sameYRange__ | `boolean`: se for verdade, o alcance do eixo y para cada faceta será o mesmo que o histograma geral. Default: `false`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Facetted Plot', value: 'groupModeFactes' },
        { label: 'Display Density', value: 'displayDensity' },
        { label: 'No of Bins', value: 'noBins' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
/>
```

</TabItem>

<TabItem value="groupModeFactes">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    nCols={2}
    groupMode="Facets"
/>
```

</TabItem>

<TabItem value="displayDensity">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    displayDensity 
    densityType="Uniform"
/>
```

</TabItem>

<TabItem value="noBins">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    binStrategy="Select # of bins"
    nBins={90}
/>
```

</TabItem>

</Tabs>
