---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Gráfico de barras.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __variable__ | `(string|Factor) (required)`: variável a exibir. Default: `none`.
* __group__ | `(string|Factor)`: variável de agrupamento. Default: `none`.
* __yvar__ | `string`: variável opcional utilizada para as alturas das colunas (em conjunto com "sumário"). Default: `none`.
* __summary__ | `string`: nome da estatística a ser computada para `yvar` e a ser exibida como altura de barra para cada categoria (ou `Min`, `Max`, `Mean`, `Median`, `Sum`, ...). Default: `none`.
* __horizontal__ | `boolean`: se as barras devem ser exibidas horizontalmente. Default: `false`.
* __stackBars__ | `boolean`: ao agrupar, controla se as barras devem ser empilhadas umas sobre as outras. Default: `false`.
* __relative__ | `boolean`: se deve calcular as freqüências relativas dentro de cada grupo. Default: `false`.
* __totalPercent__ | `boolean`: se exibir as barras gerais como freqüências relativas. Default: `false`.
* __xOrder__ | `string`: seja "total", "categoria", "min", "max", "homem", ou "médico".. Default: `none`.
* __direction__ | `string`: como pedir barras ao lado do eixo x (`ascendente` ou `descendente`). Default: `'ascending'`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Descending Order', value: 'descending' },
        { label: 'Relative Stacked Bars', value: 'relativeStackedBars' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
/>
```
</TabItem>

<TabItem value="grouped">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
    group="Gender"
/>
```

</TabItem>

<TabItem value="descending">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
    xOrder="total"
    direction="descending"
/>
```
</TabItem>

<TabItem value="relativeStackedBars">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
    stackBars
    relative
    group="Gender"
/>
```
</TabItem>

</Tabs>
