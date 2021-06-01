---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Test de corelație.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __var1__ | `string (required)`: numele primei variabile. Default: `none`.
* __var2__ | `string (required)`: numele celei de-a doua variabile. Default: `none`.
* __rho0__ | `number`: valoarea corelației sub ipoteza nulă. Default: `0`.
* __alpha__ | `number`: nivelul de semnificație. Default: `0.05`.
* __direction__ | `string`: direcția testului (fie `less`, `greater`, sau `two-sided`). Default: `'two-sided'`.
* __showDecision__ | `boolean`: controlează dacă se afișează dacă ipoteza nulă este respinsă la nivelul de semnificație specificat. Default: `false`.


## Exemple

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
