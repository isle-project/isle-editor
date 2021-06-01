---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Variatsioonianalüüs.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __variable__ | `string (required)`: kuvatava muutuja nimi. Default: `none`.
* __group__ | `(string|Factor)`: rühmitava muutuja nimi. Default: `none`.
* __showDecision__ | `boolean`: kontrollib, kas testimisotsust kuvatakse. Default: `false`.


## Näited

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
