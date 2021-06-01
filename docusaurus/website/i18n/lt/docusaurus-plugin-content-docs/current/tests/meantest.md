---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Vienos imties vidurkio testas.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __variable__ | `string (required)`: kintamojo pavadinimas. Default: `none`.
* __type__ | `string`: testo tipas (`Z testas` arba `T testas`).. Default: `'T Test'`.
* __stdev__ | `number`: standartinis nuokrypis (`Z testui`). Default: `none`.
* __alpha__ | `number`: reikšmingumo lygis. Default: `0.05`.
* __direction__ | `string`: testo kryptis (`mažesnė`, `didesnė` arba `dvipusė`).. Default: `'two-sided'`.
* __mu0__ | `number`: vidurkis pagal nulinę hipotezę. Default: `0`.
* __showDecision__ | `boolean`: kontroliuoja, ar rodyti, jei nulinė hipotezė atmetama esant nurodytam reikšmingumo lygiui.. Default: `false`.


## Pavyzdžiai

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
