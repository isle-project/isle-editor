---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Divu izlases proporciju tests.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __var1__ | `(string|Factor) (required)`: pirmā mainīgā nosaukums. Default: `none`.
* __success__ | `any (required)`: `var1` veiksmes kategorija. Default: `none`.
* __var2__ | `(string|Factor)`: otrā mainīgā nosaukums (jānorāda `var2` vai `group`).. Default: `none`.
* __group__ | `(string|Factor)`: grupēšanas mainīgā nosaukums (jānorāda `var2` vai `group`).. Default: `none`.
* __alpha__ | `number`: nozīmīguma līmenis. Default: `0.05`.
* __direction__ | `string`: testa virziens (`mazāks`, `lielāks` vai `divpusējs`).. Default: `'two-sided'`.
* __diff__ | `number`: atšķirība saskaņā ar H0. Default: `0`.
* __showDecision__ | `boolean`: kontrolē, vai attēlot, ja nulles hipotēze ir noraidīta pie norādītā nozīmīguma līmeņa.. Default: `false`.


## Piemēri

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
