---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Eén-steekproef voor de verhoudingen.

## Options

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __variable__ | `string (required)`: naam van variabele. Default: `none`.
* __success__ | `string (required)`: succescategorie van `variabele`. Default: `none`.
* __alpha__ | `number`: significantieniveau. Default: `0.05`.
* __direction__ | `string`: testrichting (ofwel `minder`, `groter`, of `tweezijdig`). Default: `'two-sided'`.
* __p0__ | `number`: proportie onder de nulhypothese. Default: `0.5`.
* __showDecision__ | `boolean`: controleert of de nulhypothese wordt weergegeven als deze op het gespecificeerde significantieniveau wordt verworpen.. Default: `false`.


## Examples

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
