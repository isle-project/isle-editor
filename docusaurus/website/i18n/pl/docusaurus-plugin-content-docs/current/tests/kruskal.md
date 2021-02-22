---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Test Kruskala-Wallisa.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __variable__ | `string (required)`: zmienna nazwa. Default: `none`.
* __group__ | `string`: zmienna grupowania. Default: `none`.
* __showDecision__ | `boolean`: kontroluje, czy hipoteza zerowa ma być wyświetlana, jeśli zostanie odrzucona na określonym poziomie istotności. Default: `false`.


## Przykłady

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
