---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Δοκιμή αναλογίας ενός δείγματος.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο των πινάκων τιμών. Default: `none`.
* __variable__ | `(string|Factor) (required)`: όνομα της μεταβλητής. Default: `none`.
* __success__ | `any (required)`: κατηγορία επιτυχίας της `μεταβλητής`. Default: `none`.
* __alpha__ | `number`: επίπεδο σημαντικότητας. Default: `0.05`.
* __direction__ | `string`: κατεύθυνση δοκιμής (είτε `less`, `greater` ή `two-sided`). Default: `'two-sided'`.
* __p0__ | `number`: αναλογία υπό τη μηδενική υπόθεση. Default: `0.5`.
* __showDecision__ | `boolean`: ελέγχει αν θα εμφανίζεται αν η μηδενική υπόθεση απορρίπτεται στο καθορισμένο επίπεδο σημαντικότητας. Default: `false`.


## Παραδείγματα

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
