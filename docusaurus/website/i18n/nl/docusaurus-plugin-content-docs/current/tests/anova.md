---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Analyse van de variantie.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __variable__ | `string (required)`: naam van de weer te geven variabele. Default: `none`.
* __group__ | `(string|Factor)`: naam van de groepsvariabele. Default: `none`.
* __showDecision__ | `boolean`: controleert of de testbeslissing wordt weergegeven. Default: `false`.


## Voorbeelden

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
