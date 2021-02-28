---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Una tabla de contingencia.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: nombre de la variable categórica que se mostrará en las filas. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  nombre de la variable categórica que se mostrará a lo largo de las columnas. Default: `none`.
* __relativeFreqs__ | `boolean`: controla si se muestran las frecuencias relativas. Default: `false`.
* __group__ | `(string|Factor)`: nombre de la variable de agrupación. Default: `none`.
* __display__ | `(array<string>|string)`: si mostrar "Porcentaje de fila" y/o "Porcentaje de columna. Default: `[]`.
* __nDecimalPlaces__ | `number`: número de decimales para las frecuencias relativas mostradas en la tabla. Default: `3`.


## Ejemplos


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Relative Frequencies', value: 'relativeFrequency' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Display Row Percentages', value: 'displayRowPercentage' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Gender"
    colVar="Drugs"
/>
```

</TabItem>

<TabItem value="relativeFrequency">

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Gender"
    colVar="Drugs"
    relativeFreqs 
    nDecimalPlaces={2}
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Drugs"
    colVar="Complications"
    group="Gender"
/>
```

</TabItem>

<TabItem value="displayRowPercentage">

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Drugs"
    colVar="Complications"
    display={['Row Percent']}
/>
```

</TabItem>

</Tabs>
