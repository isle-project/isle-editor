---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Zwei-Stichproben-Mittelwerttest.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __x__ | `string (required)`: Name der ersten Variablen. Default: `none`.
* __y__ | `string`: Name der zweiten Variablen (`y` oder `group` muss angegeben werden). Default: `none`.
* __group__ | `string`: Name der Gruppierungsvariable (`y` oder `group` müssen angegeben werden). Default: `none`.
* __type__ | `string`: Art des Tests (entweder "Z-Test" oder "T-Test"). Default: `'T Test'`.
* __xstdev__ | `number`: erste Standardabweichung (für `Z-Test`). Default: `none`.
* __ystdev__ | `number`: zweite Standardabweichung (für "Z-Test"). Default: `none`.
* __alpha__ | `number`: Signifikanzniveau. Default: `0.05`.
* __direction__ | `string`: Testrichtung (entweder `weniger`, `größer`, oder `zweiseitig`). Default: `'two-sided'`.
* __diff__ | `number`: Unterschied unter H0. Default: `0`.
* __showDecision__ | `boolean`: steuert, ob angezeigt werden soll, wenn die Nullhypothese bei dem angegebenen Signifikanzniveau abgelehnt wird. Default: `false`.


## Beispiele

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
