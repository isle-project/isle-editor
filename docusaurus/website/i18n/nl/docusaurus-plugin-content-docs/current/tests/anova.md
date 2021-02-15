---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Analyse van de variantie.

## Options

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __variable__ | `string (required)`: naam van de weer te geven variabele. Default: `none`.
* __group__ | `string`: naam van de groepsvariabele. Default: `none`.
* __showDecision__ | `boolean`: controleert of de testbeslissing wordt weergegeven. Default: `false`.


## Examples

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
