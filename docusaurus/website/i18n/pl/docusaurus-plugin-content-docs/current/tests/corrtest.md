---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Test korelacji.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __var1__ | `string (required)`: nazwa pierwszej zmiennej. Default: `none`.
* __var2__ | `string (required)`: nazwa drugiej zmiennej. Default: `none`.
* __rho0__ | `number`: wartość korelacji pod hipotezą zerową. Default: `0`.
* __alpha__ | `number`: poziom istotności. Default: `0.05`.
* __direction__ | `string`: kierunek testu (albo `less`, `greater`, albo `two-sided`). Default: `'two-sided'`.
* __showDecision__ | `boolean`: kontroluje, czy hipoteza zerowa ma być wyświetlana, jeśli zostanie odrzucona na określonym poziomie istotności. Default: `false`.


## Przykłady

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
