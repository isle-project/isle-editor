---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Dispersinė analizė.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __variable__ | `string (required)`: rodytino kintamojo pavadinimas. Default: `none`.
* __group__ | `(string|Factor)`: grupavimo kintamojo pavadinimas. Default: `none`.
* __showDecision__ | `boolean`: kontroliuoja, ar rodyti testo sprendimą.. Default: `false`.


## Pavyzdžiai

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
