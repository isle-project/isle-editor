---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Test de proporție cu două eșantioane.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __var1__ | `(string|Factor) (required)`: numele primei variabile. Default: `none`.
* __success__ | `any (required)`: categoria de succes a lui `var1`. Default: `none`.
* __var2__ | `(string|Factor)`: numele celei de-a doua variabile (trebuie să se furnizeze `var2` sau `group`). Default: `none`.
* __group__ | `(string|Factor)`: numele variabilei de grupare (`var2` sau `group` trebuie să fie furnizate). Default: `none`.
* __alpha__ | `number`: nivelul de semnificație. Default: `0.05`.
* __direction__ | `string`: direcția testului (fie `less`, `greater`, sau `two-sided`). Default: `'two-sided'`.
* __diff__ | `number`: diferența sub H0. Default: `0`.
* __showDecision__ | `boolean`: controlează dacă se afișează dacă ipoteza nulă este respinsă la nivelul de semnificație specificat. Default: `false`.


## Exemple

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
