---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Koreliacijos testas.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __var1__ | `string (required)`: pirmojo kintamojo pavadinimas. Default: `none`.
* __var2__ | `string (required)`: antrojo kintamojo pavadinimas. Default: `none`.
* __rho0__ | `number`: koreliacijos vertė, esant nulinei hipotezei. Default: `0`.
* __alpha__ | `number`: reikšmingumo lygis. Default: `0.05`.
* __direction__ | `string`: testo kryptis (`mažesnė`, `didesnė` arba `dvipusė`).. Default: `'two-sided'`.
* __showDecision__ | `boolean`: kontroliuoja, ar rodyti, jei nulinė hipotezė atmetama esant nurodytam reikšmingumo lygiui.. Default: `false`.


## Pavyzdžiai

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
