---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Twee-steekproef gemiddelde test.

## Options

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __x__ | `string (required)`: naam van eerste variabele. Default: `none`.
* __y__ | `string`: naam van de tweede variabele (`j` of `groep` moet worden verstrekt). Default: `none`.
* __group__ | `string`: naam van de groepsvariabele (`j` of `groep` moet worden verstrekt). Default: `none`.
* __type__ | `string`: type test (ofwel `Z Test` of `T Test`). Default: `'T Test'`.
* __xstdev__ | `number`: eerste standaardafwijking (voor `Z-test`). Default: `none`.
* __ystdev__ | `number`: tweede standaardafwijking (voor `Z-test`). Default: `none`.
* __alpha__ | `number`: significantieniveau. Default: `0.05`.
* __direction__ | `string`: testrichting (ofwel `minder`, `groter`, of `tweezijdig`). Default: `'two-sided'`.
* __diff__ | `number`: verschil onder H0. Default: `0`.
* __showDecision__ | `boolean`: controleert of de nulhypothese wordt weergegeven als deze op het gespecificeerde significantieniveau wordt verworpen.. Default: `false`.


## Examples

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
