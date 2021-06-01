---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Testul mediei în două eșantioane.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __x__ | `string (required)`: numele primei variabile. Default: `none`.
* __y__ | `string`: numele celei de-a doua variabile (`y` sau `group` trebuie să fie furnizate). Default: `none`.
* __group__ | `(string|Factor)`: numele variabilei de grupare (trebuie să se furnizeze `y` sau `group`). Default: `none`.
* __type__ | `string`: tipul de test (fie `Z Test`, fie `T Test`). Default: `'T Test'`.
* __xstdev__ | `number`: prima abatere standard (pentru testul `Z`). Default: `none`.
* __ystdev__ | `number`: a doua abatere standard (pentru testul `Z`). Default: `none`.
* __alpha__ | `number`: nivelul de semnificație. Default: `0.05`.
* __direction__ | `string`: direcția testului (fie `less`, `greater`, sau `two-sided`). Default: `'two-sided'`.
* __diff__ | `number`: diferența sub H0. Default: `0`.
* __showDecision__ | `boolean`: controlează dacă se afișează dacă ipoteza nulă este respinsă la nivelul de semnificație specificat. Default: `false`.


## Exemple

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
