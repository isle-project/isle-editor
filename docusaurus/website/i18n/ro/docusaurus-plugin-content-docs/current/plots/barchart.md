---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Diagramă cu bare.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __variable__ | `(string|Factor) (required)`: variabilă pentru a afișa. Default: `none`.
* __group__ | `(string|Factor)`: variabilă de grupare. Default: `none`.
* __yvar__ | `string`: variabilă opțională utilizată pentru înălțimile coloanelor (în combinație cu `summary`). Default: `none`.
* __summary__ | `string`: numele statisticii care trebuie calculată pentru `yvar` și care trebuie afișată ca înălțime a barei pentru fiecare categorie (fie `Min`, `Max`, `Mean`, `Median`, `Sum`, ...). Default: `none`.
* __horizontal__ | `boolean`: dacă se afișează barele pe orizontală. Default: `false`.
* __stackBars__ | `boolean`: atunci când se grupează, controlează dacă se stivuiesc barele unele peste altele. Default: `false`.
* __relative__ | `boolean`: dacă se calculează frecvențele relative în interiorul fiecărui grup. Default: `false`.
* __totalPercent__ | `boolean`: dacă se afișează barele globale ca frecvențe relative. Default: `false`.
* __xOrder__ | `string`: fie `total`, `category`, `min`, `max`, `mean` sau `mediana`.. Default: `none`.
* __direction__ | `string`: cum se ordonează barele pe axa x (`ascending` sau `descending`). Default: `'ascending'`.


## Exemple

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
