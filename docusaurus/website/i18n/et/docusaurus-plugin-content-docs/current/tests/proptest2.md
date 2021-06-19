---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Kahe proovi proportsioonitest.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __var1__ | `(string|Factor) (required)`: esimese muutuja nimi. Default: `none`.
* __success__ | `any (required)`: edu kategooria `var1`. Default: `none`.
* __var2__ | `(string|Factor)`: teise muutuja nimi (tuleb esitada `var2` või `group`). Default: `none`.
* __group__ | `(string|Factor)`: grupeeriva muutuja nimi (tuleb esitada `var2` või `group`). Default: `none`.
* __alpha__ | `number`: olulisuse tase. Default: `0.05`.
* __direction__ | `string`: testi suund (kas `less`, `greater` või `two-sided`).. Default: `'two-sided'`.
* __diff__ | `number`: erinevus H0 korral. Default: `0`.
* __showDecision__ | `boolean`: kontrollib, kas näidata, kas nullhüpotees lükatakse tagasi määratud olulisuse tasemel.. Default: `false`.


## Näited

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
