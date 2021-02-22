---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Ein-Stichproben-Verhältnis-Test.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __variable__ | `string (required)`: Name der Variablen. Default: `none`.
* __success__ | `string (required)`: Erfolgskategorie von `Variable`. Default: `none`.
* __alpha__ | `number`: Signifikanzniveau. Default: `0.05`.
* __direction__ | `string`: Testrichtung (entweder `weniger`, `größer`, oder `zweiseitig`). Default: `'two-sided'`.
* __p0__ | `number`: Anteil unter der Nullhypothese. Default: `0.5`.
* __showDecision__ | `boolean`: steuert, ob angezeigt werden soll, wenn die Nullhypothese bei dem angegebenen Signifikanzniveau abgelehnt wird. Default: `false`.


## Beispiele

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
