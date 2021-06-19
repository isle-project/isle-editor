---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Jednopróbkowy test średni.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __variable__ | `string (required)`: nazwa zmiennej. Default: `none`.
* __type__ | `string`: rodzaj testu (`Z Test` lub `T Test`). Default: `'T Test'`.
* __stdev__ | `number`: odchylenie standardowe (dla `Testu Z`). Default: `none`.
* __alpha__ | `number`: poziom istotności. Default: `0.05`.
* __direction__ | `string`: kierunek testu (albo `less`, `greater`, albo `two-sided`). Default: `'two-sided'`.
* __mu0__ | `number`: średnia pod hipotezą zerową. Default: `0`.
* __showDecision__ | `boolean`: kontroluje, czy hipoteza zerowa ma być wyświetlana, jeśli zostanie odrzucona na określonym poziomie istotności. Default: `false`.


## Przykłady

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
