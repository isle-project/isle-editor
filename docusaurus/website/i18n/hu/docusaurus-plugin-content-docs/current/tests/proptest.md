---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Egymintás arányteszt.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __variable__ | `(string|Factor) (required)`: változó neve. Default: `none`.
* __success__ | `any (required)`: a `változó` sikerkategóriája. Default: `none`.
* __alpha__ | `number`: szignifikancia szint. Default: `0.05`.
* __direction__ | `string`: a vizsgálat iránya (vagy `less`, `greater`, vagy `two-sided`). Default: `'two-sided'`.
* __p0__ | `number`: a nullhipotézis szerinti arány. Default: `0.5`.
* __showDecision__ | `boolean`: ellenőrzi, hogy megjelenjen-e, ha a nullhipotézis a megadott szignifikancia szinten elutasításra kerül.. Default: `false`.


## Példák

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
