---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Divu izlases vidējo vērtību tests.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __x__ | `string (required)`: pirmā mainīgā nosaukums. Default: `none`.
* __y__ | `string`: otrā mainīgā nosaukums (jānorāda `y` vai `group`).. Default: `none`.
* __group__ | `(string|Factor)`: grupēšanas mainīgā nosaukums (jānorāda `y` vai `group`).. Default: `none`.
* __type__ | `string`: testa veids (`Z tests` vai `T tests`).. Default: `'T Test'`.
* __xstdev__ | `number`: pirmā standartnovirze (`Z testam`). Default: `none`.
* __ystdev__ | `number`: otrā standartnovirze (`Z testam`). Default: `none`.
* __alpha__ | `number`: nozīmīguma līmenis. Default: `0.05`.
* __direction__ | `string`: testa virziens (`less`, `greater` vai `two-sided`).. Default: `'two-sided'`.
* __diff__ | `number`: atšķirība saskaņā ar H0. Default: `0`.
* __showDecision__ | `boolean`: kontrolē, vai attēlot, ja nulles hipotēze ir noraidīta pie norādītā nozīmīguma līmeņa.. Default: `false`.


## Piemēri

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
