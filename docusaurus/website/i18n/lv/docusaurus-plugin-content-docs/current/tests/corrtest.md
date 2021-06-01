---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Korelācijas tests.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __var1__ | `string (required)`: pirmā mainīgā nosaukums. Default: `none`.
* __var2__ | `string (required)`: otrā mainīgā nosaukums. Default: `none`.
* __rho0__ | `number`: korelācijas vērtība saskaņā ar nulles hipotēzi. Default: `0`.
* __alpha__ | `number`: nozīmīguma līmenis. Default: `0.05`.
* __direction__ | `string`: testa virziens (`mazāks`, `lielāks` vai `divpusējs`).. Default: `'two-sided'`.
* __showDecision__ | `boolean`: kontrolē, vai attēlot, ja nulles hipotēze ir noraidīta pie norādītā nozīmīguma līmeņa.. Default: `false`.


## Piemēri

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
