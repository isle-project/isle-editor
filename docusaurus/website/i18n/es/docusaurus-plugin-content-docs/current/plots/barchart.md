---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Gráfico de barras.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __variable__ | `(string|Factor) (required)`: variable a mostrar. Default: `none`.
* __group__ | `(string|Factor)`: variable de agrupación. Default: `none`.
* __yvar__ | `string`: variable opcional utilizada para las alturas de las columnas (junto con `summary`). Default: `none`.
* __summary__ | `string`: nombre de la estadística a calcular para `yvar` y a mostrar como altura de barra para cada categoría (ya sea `Min`, `Max`, `Mean`, `Median`, `Sum`, ...). Default: `none`.
* __horizontal__ | `boolean`: si mostrar las barras horizontalmente. Default: `false`.
* __stackBars__ | `boolean`: cuando se agrupan, controla si se apilan las barras una encima de la otra. Default: `false`.
* __relative__ | `boolean`: si calcular las frecuencias relativas dentro de cada grupo. Default: `false`.
* __totalPercent__ | `boolean`: si mostrar las barras generales como frecuencias relativas. Default: `false`.
* __xOrder__ | `string`: ya sea "total", "categoría", "min", "máximo", "medio", o "medio". Default: `none`.
* __direction__ | `string`: cómo ordenar las barras a lo largo del eje x (`ascending` o `descending`). Default: `'ascending'`.


## Ejemplos

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
