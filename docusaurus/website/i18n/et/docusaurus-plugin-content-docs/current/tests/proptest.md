---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Ühe valimi proportsioonitest.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __variable__ | `(string|Factor) (required)`: muutuja nimi. Default: `none`.
* __success__ | `any (required)`: edu kategooria `muutuja`. Default: `none`.
* __alpha__ | `number`: olulisuse tase. Default: `0.05`.
* __direction__ | `string`: testi suund (kas "vähem", "suurem" või "kahepoolne").. Default: `'two-sided'`.
* __p0__ | `number`: osakaal nullhüpoteesi korral. Default: `0.5`.
* __showDecision__ | `boolean`: kontrollib, kas näidata, kas nullhüpotees lükatakse tagasi määratud olulisuse tasemel.. Default: `false`.


## Näited

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
