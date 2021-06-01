---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Varianciaanalízis.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __variable__ | `string (required)`: a megjelenítendő változó neve. Default: `none`.
* __group__ | `(string|Factor)`: csoportosító változó neve. Default: `none`.
* __showDecision__ | `boolean`: szabályozza, hogy megjelenítse-e a tesztelési döntést. Default: `false`.


## Példák

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
