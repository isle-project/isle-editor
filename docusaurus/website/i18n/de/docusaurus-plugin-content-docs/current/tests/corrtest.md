---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Korrelationstest.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __var1__ | `string (required)`: Name der ersten Variablen. Default: `none`.
* __var2__ | `string (required)`: Name der zweiten Variablen. Default: `none`.
* __rho0__ | `number`: Korrelationswert unter der Nullhypothese. Default: `0`.
* __alpha__ | `number`: Signifikanzniveau. Default: `0.05`.
* __direction__ | `string`: Testrichtung (entweder `weniger`, `größer`, oder `zweiseitig`). Default: `'two-sided'`.
* __showDecision__ | `boolean`: steuert, ob angezeigt werden soll, wenn die Nullhypothese bei dem angegebenen Signifikanzniveau abgelehnt wird. Default: `false`.


## Beispiele

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
