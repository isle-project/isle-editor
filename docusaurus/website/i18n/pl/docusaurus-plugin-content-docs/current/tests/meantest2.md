---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Dwukrotny test średniej próby.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __x__ | `string (required)`: nazwa pierwszej zmiennej. Default: `none`.
* __y__ | `string`: nazwa drugiej zmiennej (należy podać `y` lub `grupę`). Default: `none`.
* __group__ | `string`: nazwa zmiennej grupowania (należy podać `y` lub `grupę`). Default: `none`.
* __type__ | `string`: typ badania (albo `Badanie Z` albo `Badanie T`). Default: `'T Test'`.
* __xstdev__ | `number`: pierwsze odchylenie standardowe (dla `Testu Z`). Default: `none`.
* __ystdev__ | `number`: drugie odchylenie standardowe (dla `Testu Z`). Default: `none`.
* __alpha__ | `number`: poziom istotności. Default: `0.05`.
* __direction__ | `string`: kierunek testu (albo "bez", "większy", albo "dwustronny"). Default: `'two-sided'`.
* __diff__ | `number`: różnica poniżej H0. Default: `0`.
* __showDecision__ | `boolean`: kontroluje, czy hipoteza zerowa ma być wyświetlana, jeśli zostanie odrzucona na określonym poziomie istotności. Default: `false`.


## Przykłady

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
