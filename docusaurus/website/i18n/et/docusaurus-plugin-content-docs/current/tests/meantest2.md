---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Kahe proovi keskmine test.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __x__ | `string (required)`: esimese muutuja nimi. Default: `none`.
* __y__ | `string`: teise muutuja nimi (tuleb esitada `y` või `group`). Default: `none`.
* __group__ | `(string|Factor)`: grupeeriva muutuja nimi (tuleb esitada `y` või `group`). Default: `none`.
* __type__ | `string`: testi tüüp (kas "Z-testi" või "T-testi"). Default: `'T Test'`.
* __xstdev__ | `number`: esimene standardhälve (Z-testi puhul). Default: `none`.
* __ystdev__ | `number`: teine standardhälve (Z-testi puhul). Default: `none`.
* __alpha__ | `number`: olulisuse tase. Default: `0.05`.
* __direction__ | `string`: testi suund (kas "vähem", "suurem" või "kahepoolne").. Default: `'two-sided'`.
* __diff__ | `number`: erinevus H0 korral. Default: `0`.
* __showDecision__ | `boolean`: kontrollib, kas näidata, kas nullhüpotees lükatakse tagasi määratud olulisuse tasemel.. Default: `false`.


## Näited

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
