---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Vienas izlases proporcionālais tests.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __variable__ | `(string|Factor) (required)`: mainīgā lieluma nosaukums. Default: `none`.
* __success__ | `any (required)`: `mainīgās` veiksmes kategorija. Default: `none`.
* __alpha__ | `number`: nozīmīguma līmenis. Default: `0.05`.
* __direction__ | `string`: testa virziens (`less`, `greater` vai `two-sided`).. Default: `'two-sided'`.
* __p0__ | `number`: proporcija saskaņā ar nulles hipotēzi. Default: `0.5`.
* __showDecision__ | `boolean`: kontrolē, vai attēlot, ja nulles hipotēze ir noraidīta pie norādītā nozīmīguma līmeņa.. Default: `false`.


## Piemēri

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
