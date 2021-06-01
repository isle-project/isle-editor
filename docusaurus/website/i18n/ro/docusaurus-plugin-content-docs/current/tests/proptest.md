---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Test de proporție cu o singură probă.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __variable__ | `(string|Factor) (required)`: numele variabilei. Default: `none`.
* __success__ | `any (required)`: categoria de succes a `variabilei`. Default: `none`.
* __alpha__ | `number`: nivelul de semnificație. Default: `0.05`.
* __direction__ | `string`: direcția testului (fie `less`, `greater`, sau `two-sided`). Default: `'two-sided'`.
* __p0__ | `number`: proporția sub ipoteza nulă. Default: `0.5`.
* __showDecision__ | `boolean`: controlează dacă se afișează dacă ipoteza nulă este respinsă la nivelul de semnificație specificat. Default: `false`.


## Exemple

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
