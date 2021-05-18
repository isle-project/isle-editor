---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Test na dwie próbki.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __var1__ | `(string|Factor) (required)`: nazwa pierwszej zmiennej. Default: `none`.
* __success__ | `any (required)`: kategoria sukcesu `var1`. Default: `none`.
* __var2__ | `(string|Factor)`: nazwa drugiej zmiennej (należy podać `var2` lub `grupę`). Default: `none`.
* __group__ | `(string|Factor)`: nazwa zmiennej grupowania (należy podać `var2` lub `grupę`). Default: `none`.
* __alpha__ | `number`: poziom istotności. Default: `0.05`.
* __direction__ | `string`: kierunek testu (albo "bez", "większy", albo "dwustronny"). Default: `'two-sided'`.
* __diff__ | `number`: różnica poniżej H0. Default: `0`.
* __showDecision__ | `boolean`: kontroluje, czy hipoteza zerowa ma być wyświetlana, jeśli zostanie odrzucona na określonym poziomie istotności. Default: `false`.


## Przykłady

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
