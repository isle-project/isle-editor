---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Vienas izlases vidējās vērtības tests.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __variable__ | `string (required)`: mainīgā lieluma nosaukums. Default: `none`.
* __type__ | `string`: testa veids (`Z tests` vai `T tests`).. Default: `'T Test'`.
* __stdev__ | `number`: standartnovirze (`Z testam`). Default: `none`.
* __alpha__ | `number`: nozīmīguma līmenis. Default: `0.05`.
* __direction__ | `string`: testa virziens (`mazāks`, `lielāks` vai `divpusējs`).. Default: `'two-sided'`.
* __mu0__ | `number`: vidējais ar nulles hipotēzi. Default: `0`.
* __showDecision__ | `boolean`: kontrolē, vai attēlot, ja nulles hipotēze ir noraidīta pie norādītā nozīmīguma līmeņa.. Default: `false`.


## Piemēri

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
