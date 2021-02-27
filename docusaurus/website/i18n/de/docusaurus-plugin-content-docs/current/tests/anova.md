---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Analyse der Varianz.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __variable__ | `string (required)`: Name der Variable, die angezeigt werden soll. Default: `none`.
* __group__ | `(string|Factor)`: Name der Gruppierungsvariable. Default: `none`.
* __showDecision__ | `boolean`: steuert, ob die Testentscheidung angezeigt werden soll. Default: `false`.


## Beispiele

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
