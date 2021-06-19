---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Korrelatsioonitest.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __var1__ | `string (required)`: esimese muutuja nimi. Default: `none`.
* __var2__ | `string (required)`: teise muutuja nimi. Default: `none`.
* __rho0__ | `number`: korrelatsiooniväärtus nullhüpoteesi korral. Default: `0`.
* __alpha__ | `number`: olulisuse tase. Default: `0.05`.
* __direction__ | `string`: testi suund (kas `less`, `greater` või `two-sided`).. Default: `'two-sided'`.
* __showDecision__ | `boolean`: kontrollib, kas näidata, kas nullhüpotees lükatakse tagasi määratud olulisuse tasemel.. Default: `false`.


## Näited

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
