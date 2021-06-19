---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Kétmintás arányteszt.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __var1__ | `(string|Factor) (required)`: az első változó neve. Default: `none`.
* __success__ | `any (required)`: a "var1" sikerkategóriája. Default: `none`.
* __var2__ | `(string|Factor)`: a második változó neve (`var2` vagy `group` kell megadni). Default: `none`.
* __group__ | `(string|Factor)`: a csoportosító változó neve (a `var2` vagy `group` változót meg kell adni). Default: `none`.
* __alpha__ | `number`: szignifikancia szint. Default: `0.05`.
* __direction__ | `string`: a vizsgálat iránya (vagy `less`, `greater`, vagy `two-sided`). Default: `'two-sided'`.
* __diff__ | `number`: különbség H0 alatt. Default: `0`.
* __showDecision__ | `boolean`: ellenőrzi, hogy megjelenjen-e, ha a nullhipotézis a megadott szignifikancia szinten elutasításra kerül.. Default: `false`.


## Példák

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
