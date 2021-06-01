---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Kruskala-Valisa tests.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __variable__ | `string (required)`: mainīgā lieluma nosaukums. Default: `none`.
* __group__ | `(string|Factor)`: grupēšanas mainīgais. Default: `none`.
* __showDecision__ | `boolean`: kontrolē, vai attēlot, ja nulles hipotēze ir noraidīta pie norādītā nozīmīguma līmeņa.. Default: `false`.


## Piemēri

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
