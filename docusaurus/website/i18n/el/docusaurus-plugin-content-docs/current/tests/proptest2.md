---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Δοκιμή αναλογίας δύο δειγμάτων.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο των πινάκων τιμών. Default: `none`.
* __var1__ | `(string|Factor) (required)`: όνομα της πρώτης μεταβλητής. Default: `none`.
* __success__ | `any (required)`: κατηγορία επιτυχίας της `var1`. Default: `none`.
* __var2__ | `(string|Factor)`: όνομα της δεύτερης μεταβλητής (πρέπει να παρέχεται η λέξη `var2` ή `group`). Default: `none`.
* __group__ | `(string|Factor)`: όνομα της μεταβλητής ομαδοποίησης (πρέπει να παρέχονται οι μεταβλητές "var2" ή "group"). Default: `none`.
* __alpha__ | `number`: επίπεδο σημαντικότητας. Default: `0.05`.
* __direction__ | `string`: κατεύθυνση δοκιμής (είτε "μικρότερη", "μεγαλύτερη" ή "αμφίπλευρη"). Default: `'two-sided'`.
* __diff__ | `number`: διαφορά υπό H0. Default: `0`.
* __showDecision__ | `boolean`: ελέγχει αν θα εμφανίζεται αν η μηδενική υπόθεση απορρίπτεται στο καθορισμένο επίπεδο σημαντικότητας. Default: `false`.


## Παραδείγματα

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
