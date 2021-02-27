---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Twee-steekproef proportionele test.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __var1__ | `string (required)`: naam van eerste variabele. Default: `none`.
* __success__ | `string (required)`: succescategorie van `var1`. Default: `none`.
* __var2__ | `string`: naam van de tweede variabele (`var2` of `groep` moet worden verstrekt). Default: `none`.
* __group__ | `(string|Factor)`: naam van de groepsvariabele (`var2` of `groep` moet worden verstrekt). Default: `none`.
* __alpha__ | `number`: significantieniveau. Default: `0.05`.
* __direction__ | `string`: testrichting (ofwel `minder`, `groter`, of `tweezijdig`). Default: `'two-sided'`.
* __diff__ | `number`: verschil onder H0. Default: `0`.
* __showDecision__ | `boolean`: controleert of de nulhypothese wordt weergegeven als deze op het gespecificeerde significantieniveau wordt verworpen.. Default: `false`.


## Voorbeelden

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
