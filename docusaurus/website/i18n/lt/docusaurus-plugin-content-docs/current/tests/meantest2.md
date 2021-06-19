---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Dviejų imčių vidurkio testas.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __x__ | `string (required)`: pirmojo kintamojo pavadinimas. Default: `none`.
* __y__ | `string`: antrojo kintamojo pavadinimas (reikia nurodyti `y` arba `group`). Default: `none`.
* __group__ | `(string|Factor)`: grupavimo kintamojo pavadinimas (būtina nurodyti `y` arba `group`). Default: `none`.
* __type__ | `string`: testo tipas (`Z testas` arba `T testas`).. Default: `'T Test'`.
* __xstdev__ | `number`: pirmasis standartinis nuokrypis (`Z testui`). Default: `none`.
* __ystdev__ | `number`: antrasis standartinis nuokrypis (`Z testui`). Default: `none`.
* __alpha__ | `number`: reikšmingumo lygis. Default: `0.05`.
* __direction__ | `string`: testo kryptis (`less`, `greater` arba `two-sided`).. Default: `'two-sided'`.
* __diff__ | `number`: skirtumas pagal H0. Default: `0`.
* __showDecision__ | `boolean`: kontroliuoja, ar rodyti, jei nulinė hipotezė atmetama esant nurodytam reikšmingumo lygiui.. Default: `false`.


## Pavyzdžiai

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
