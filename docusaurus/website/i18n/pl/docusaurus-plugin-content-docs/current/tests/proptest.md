---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Test proporcji jednej próbki.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __variable__ | `(string|Factor) (required)`: nazwa zmiennej. Default: `none`.
* __success__ | `string (required)`: kategoria sukcesu `zmiennej`. Default: `none`.
* __alpha__ | `number`: poziom istotności. Default: `0.05`.
* __direction__ | `string`: kierunek testu (albo "bez", "większy", albo "dwustronny"). Default: `'two-sided'`.
* __p0__ | `number`: proporcja pod hipotezą zerową. Default: `0.5`.
* __showDecision__ | `boolean`: kontroluje, czy hipoteza zerowa ma być wyświetlana, jeśli zostanie odrzucona na określonym poziomie istotności. Default: `false`.


## Przykłady

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
