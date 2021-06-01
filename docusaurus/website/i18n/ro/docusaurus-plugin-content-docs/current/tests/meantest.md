---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Testul mediei cu un eșantion.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __variable__ | `string (required)`: numele variabilei. Default: `none`.
* __type__ | `string`: tipul de test (`Z Test` sau `T Test`). Default: `'T Test'`.
* __stdev__ | `number`: abaterea standard (pentru testul `Z`). Default: `none`.
* __alpha__ | `number`: nivelul de semnificație. Default: `0.05`.
* __direction__ | `string`: direcția testului (fie `less`, `greater`, sau `two-sided`). Default: `'two-sided'`.
* __mu0__ | `number`: medie sub ipoteza nulă. Default: `0`.
* __showDecision__ | `boolean`: controlează dacă se afișează dacă ipoteza nulă este respinsă la nivelul de semnificație specificat. Default: `false`.


## Exemple

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
