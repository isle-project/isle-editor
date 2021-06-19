---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Kétmintás átlagteszt.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __x__ | `string (required)`: az első változó neve. Default: `none`.
* __y__ | `string`: a második változó neve (`y` vagy `group` megadandó). Default: `none`.
* __group__ | `(string|Factor)`: a csoportosító változó neve (az `y` vagy a `group` változót meg kell adni). Default: `none`.
* __type__ | `string`: a teszt típusa (Z-teszt vagy T-teszt). Default: `'T Test'`.
* __xstdev__ | `number`: első szórás (a "Z teszt" esetében). Default: `none`.
* __ystdev__ | `number`: második szórás (a "Z-teszt" esetében). Default: `none`.
* __alpha__ | `number`: szignifikancia szint. Default: `0.05`.
* __direction__ | `string`: a teszt iránya (vagy `less`, `greater`, vagy `two-sided`). Default: `'two-sided'`.
* __diff__ | `number`: különbség H0 alatt. Default: `0`.
* __showDecision__ | `boolean`: ellenőrzi, hogy megjelenjen-e, ha a nullhipotézis a megadott szignifikancia szinten elutasításra kerül.. Default: `false`.


## Példák

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
