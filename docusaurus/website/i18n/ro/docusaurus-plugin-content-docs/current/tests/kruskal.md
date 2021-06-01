---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Testul Kruskal-Wallis.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __variable__ | `string (required)`: numele variabilei. Default: `none`.
* __group__ | `(string|Factor)`: variabilă de grupare. Default: `none`.
* __showDecision__ | `boolean`: controlează dacă se afișează dacă ipoteza nulă este respinsă la nivelul de semnificație specificat. Default: `false`.


## Exemple

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
