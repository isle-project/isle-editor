---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Een enkele gemiddelde test.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __variable__ | `string (required)`: naam van variabele. Default: `none`.
* __type__ | `string`: type test (`Z Test` of `T Test`). Default: `'T Test'`.
* __stdev__ | `number`: standaardafwijking (voor `Z-test`). Default: `none`.
* __alpha__ | `number`: significantieniveau. Default: `0.05`.
* __direction__ | `string`: testrichting (ofwel `less`, `greater`, of `two-sided`). Default: `'two-sided'`.
* __mu0__ | `number`: betekenen onder de nulhypothese. Default: `0`.
* __showDecision__ | `boolean`: controleert of de nulhypothese wordt weergegeven als deze op het gespecificeerde significantieniveau wordt verworpen. Default: `false`.


## Voorbeelden

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
