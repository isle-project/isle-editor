---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Dviejų imčių proporcijų testas.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __var1__ | `(string|Factor) (required)`: pirmojo kintamojo pavadinimas. Default: `none`.
* __success__ | `any (required)`: `var1` sėkmės kategorija. Default: `none`.
* __var2__ | `(string|Factor)`: antrojo kintamojo pavadinimas (reikia nurodyti `var2` arba `group`). Default: `none`.
* __group__ | `(string|Factor)`: grupuojančio kintamojo pavadinimas (būtina nurodyti `var2` arba `group`). Default: `none`.
* __alpha__ | `number`: reikšmingumo lygis. Default: `0.05`.
* __direction__ | `string`: testo kryptis (`mažesnė`, `didesnė` arba `dvipusė`).. Default: `'two-sided'`.
* __diff__ | `number`: skirtumas pagal H0. Default: `0`.
* __showDecision__ | `boolean`: kontroliuoja, ar rodyti, jei nulinė hipotezė atmetama esant nurodytam reikšmingumo lygiui.. Default: `false`.


## Pavyzdžiai

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
