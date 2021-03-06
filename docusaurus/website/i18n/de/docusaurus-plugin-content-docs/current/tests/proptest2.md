---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Zwei-Stichproben-Verhältnis-Test.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __var1__ | `(string|Factor) (required)`: Name der ersten Variablen. Default: `none`.
* __success__ | `any (required)`: Erfolgskategorie von `var1`. Default: `none`.
* __var2__ | `(string|Factor)`: Name der zweiten Variablen (`var2` oder `group` muss angegeben werden). Default: `none`.
* __group__ | `(string|Factor)`: Name der Gruppierungsvariable (`var2` oder `group` müssen angegeben werden). Default: `none`.
* __alpha__ | `number`: Signifikanzniveau. Default: `0.05`.
* __direction__ | `string`: Testrichtung (entweder `less`, `greater`, oder `two-sided`). Default: `'two-sided'`.
* __diff__ | `number`: Unterschied unter H0. Default: `0`.
* __showDecision__ | `boolean`: steuert, ob angezeigt werden soll, wenn die Nullhypothese bei dem angegebenen Signifikanzniveau abgelehnt wird. Default: `false`.


## Beispiele

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
