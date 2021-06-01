---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Analiza varianței.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __variable__ | `string (required)`: numele variabilei care urmează să fie afișată. Default: `none`.
* __group__ | `(string|Factor)`: denumirea variabilei de grupare. Default: `none`.
* __showDecision__ | `boolean`: controlează dacă se afișează sau nu decizia de testare. Default: `false`.


## Exemple

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
