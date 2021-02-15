---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Uma tabela de contingência.

## Options

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __rowVar__ | `string (required)`: nome da variável de linha. Default: `none`.
* __colVar__ | `string (required)`: nome da variável de coluna. Default: `none`.
* __relativeFreqs__ | `boolean`: controla se deve exibir freqüências relativas. Default: `false`.
* __group__ | `string`: nome da variável de agrupamento. Default: `none`.
* __display__ | `array<string>`: se deve exibir "Porcentagem de linha" e/ou "Porcentagem de coluna".. Default: `[]`.
* __nDecimalPlaces__ | `number`: número de casas decimais para as freqüências relativas exibidas na tabela. Default: `3`.


## Examples

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Gender"
    colVar="Drugs"
/>
```
