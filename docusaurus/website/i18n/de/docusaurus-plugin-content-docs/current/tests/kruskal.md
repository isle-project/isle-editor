---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Kruskal-Wallis-Test.

## Options

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __variable__ | `string (required)`: Variablenname. Default: `none`.
* __group__ | `string`: Gruppierungsvariable. Default: `none`.
* __showDecision__ | `boolean`: steuert, ob angezeigt werden soll, wenn die Nullhypothese bei dem angegebenen Signifikanzniveau abgelehnt wird. Default: `false`.


## Examples

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
