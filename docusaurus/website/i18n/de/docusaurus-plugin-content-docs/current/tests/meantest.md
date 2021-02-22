---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Mittelwerttest bei einer Stichprobe.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __variable__ | `string (required)`: Name der Variablen. Default: `none`.
* __type__ | `string`: Art des Tests (`Z-Test` oder `T-Test`). Default: `'T Test'`.
* __stdev__ | `number`: Standardabweichung (für "Z-Test"). Default: `none`.
* __alpha__ | `number`: Signifikanzniveau. Default: `0.05`.
* __direction__ | `string`: Testrichtung (entweder `weniger`, `größer`, oder `zweiseitig`). Default: `'two-sided'`.
* __mu0__ | `number`: Mittelwert unter der Nullhypothese. Default: `0`.
* __showDecision__ | `boolean`: steuert, ob angezeigt werden soll, wenn die Nullhypothese bei dem angegebenen Signifikanzniveau abgelehnt wird. Default: `false`.


## Beispiele

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
