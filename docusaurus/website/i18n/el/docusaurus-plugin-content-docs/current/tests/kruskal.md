---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Δοκιμή Kruskal-Wallis.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο των πινάκων τιμών. Default: `none`.
* __variable__ | `string (required)`: όνομα μεταβλητής. Default: `none`.
* __group__ | `(string|Factor)`: μεταβλητή ομαδοποίησης. Default: `none`.
* __showDecision__ | `boolean`: ελέγχει αν θα εμφανίζεται αν η μηδενική υπόθεση απορρίπτεται στο καθορισμένο επίπεδο σημαντικότητας. Default: `false`.


## Παραδείγματα

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
