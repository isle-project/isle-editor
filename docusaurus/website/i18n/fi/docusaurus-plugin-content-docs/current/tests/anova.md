---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Varianssianalyysi.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __variable__ | `string (required)`: näytettävän muuttujan nimi. Default: `none`.
* __group__ | `(string|Factor)`: ryhmittelymuuttujan nimi. Default: `none`.
* __showDecision__ | `boolean`: valvoo, näytetäänkö testipäätös. Default: `false`.


## Esimerkkejä

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
