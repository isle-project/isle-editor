---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Δοκιμή μέσου όρου ενός δείγματος.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο των πινάκων τιμών. Default: `none`.
* __variable__ | `string (required)`: όνομα της μεταβλητής. Default: `none`.
* __type__ | `string`: τύπος δοκιμής (δοκιμή "Ζ" ή δοκιμή "Τ"). Default: `'T Test'`.
* __stdev__ | `number`: τυπική απόκλιση (για τη δοκιμή Ζ). Default: `none`.
* __alpha__ | `number`: επίπεδο σημαντικότητας. Default: `0.05`.
* __direction__ | `string`: κατεύθυνση δοκιμής (είτε "μικρότερη", "μεγαλύτερη" ή "αμφίπλευρη"). Default: `'two-sided'`.
* __mu0__ | `number`: μέσος όρος υπό τη μηδενική υπόθεση. Default: `0`.
* __showDecision__ | `boolean`: ελέγχει αν θα εμφανίζεται αν η μηδενική υπόθεση απορρίπτεται στο καθορισμένο επίπεδο σημαντικότητας. Default: `false`.


## Παραδείγματα

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
