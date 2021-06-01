---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Δοκιμή μέσου όρου δύο δειγμάτων.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο των πινάκων τιμών. Default: `none`.
* __x__ | `string (required)`: όνομα της πρώτης μεταβλητής. Default: `none`.
* __y__ | `string`: όνομα της δεύτερης μεταβλητής (πρέπει να παρέχεται το `y` ή το `group`). Default: `none`.
* __group__ | `(string|Factor)`: όνομα της μεταβλητής ομαδοποίησης (πρέπει να παρέχονται τα στοιχεία `y` ή `group`). Default: `none`.
* __type__ | `string`: τύπος δοκιμής (είτε "δοκιμή Ζ" είτε "δοκιμή Τ"). Default: `'T Test'`.
* __xstdev__ | `number`: πρώτη τυπική απόκλιση (για τη δοκιμή Ζ). Default: `none`.
* __ystdev__ | `number`: δεύτερη τυπική απόκλιση (για τη δοκιμή Ζ). Default: `none`.
* __alpha__ | `number`: επίπεδο σημαντικότητας. Default: `0.05`.
* __direction__ | `string`: κατεύθυνση δοκιμής (είτε "μικρότερη", "μεγαλύτερη" ή "αμφίπλευρη"). Default: `'two-sided'`.
* __diff__ | `number`: διαφορά υπό H0. Default: `0`.
* __showDecision__ | `boolean`: ελέγχει αν θα εμφανίζεται αν η μηδενική υπόθεση απορρίπτεται στο καθορισμένο επίπεδο σημαντικότητας. Default: `false`.


## Παραδείγματα

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
