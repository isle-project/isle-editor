---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Ühe valimi keskmine test.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __variable__ | `string (required)`: muutuja nimi. Default: `none`.
* __type__ | `string`: testi tüüp (Z- või T-test). Default: `'T Test'`.
* __stdev__ | `number`: standardhälve (Z-testi puhul). Default: `none`.
* __alpha__ | `number`: olulisuse tase. Default: `0.05`.
* __direction__ | `string`: testi suund (kas `less`, `greater` või `two-sided`).. Default: `'two-sided'`.
* __mu0__ | `number`: keskmine nullhüpoteesi korral. Default: `0`.
* __showDecision__ | `boolean`: kontrollib, kas näidata, kas nullhüpotees lükatakse tagasi määratud olulisuse tasemel.. Default: `false`.


## Näited

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
