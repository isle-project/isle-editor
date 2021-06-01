---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Ανάλυση διακύμανσης.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο των πινάκων τιμών. Default: `none`.
* __variable__ | `string (required)`: όνομα της μεταβλητής που θα εμφανιστεί. Default: `none`.
* __group__ | `(string|Factor)`: όνομα της μεταβλητής ομαδοποίησης. Default: `none`.
* __showDecision__ | `boolean`: ελέγχει αν θα εμφανιστεί η απόφαση δοκιμής. Default: `false`.


## Παραδείγματα

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
