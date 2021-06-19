---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Grafico a barre.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __variable__ | `(string|Factor) (required)`: variabile da visualizzare. Default: `none`.
* __group__ | `(string|Factor)`: variabile di raggruppamento. Default: `none`.
* __yvar__ | `string`: variabile opzionale usata per le altezze delle colonne (insieme a `summary`). Default: `none`.
* __summary__ | `string`: nome della statistica da calcolare per `yvar` e da visualizzare come altezza della barra per ogni categoria (sia `Min`, `Max`, `Mean`, `Median`, `Sum`, ...). Default: `none`.
* __horizontal__ | `boolean`: se visualizzare le barre in orizzontale. Default: `false`.
* __stackBars__ | `boolean`: quando si raggruppano, controlla se impilare le barre una sopra l'altra. Default: `false`.
* __relative__ | `boolean`: se calcolare le frequenze relative all'interno di ciascun gruppo. Default: `false`.
* __totalPercent__ | `boolean`: se visualizzare le barre complessive come frequenze relative. Default: `false`.
* __xOrder__ | `string`: sia `totale`, `categoria`, `min`, `max`, `mean`, o `mediana`. Default: `none`.
* __direction__ | `string`: come ordinare le barre accanto all'asse delle x (in `ascending` o in `descending`). Default: `'ascending'`.


## Esempi

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
