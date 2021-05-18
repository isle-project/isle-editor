---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Correlatietest.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __var1__ | `string (required)`: naam van eerste variabele. Default: `none`.
* __var2__ | `string (required)`: naam van tweede variabele. Default: `none`.
* __rho0__ | `number`: correlatiewaarde onder de nulhypothese. Default: `0`.
* __alpha__ | `number`: significantieniveau. Default: `0.05`.
* __direction__ | `string`: testrichting (ofwel `minder`, `groter`, of `tweezijdig`). Default: `'two-sided'`.
* __showDecision__ | `boolean`: controleert of de nulhypothese wordt weergegeven als deze op het gespecificeerde significantieniveau wordt verworpen. Default: `false`.


## Voorbeelden

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
