---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Kruskal-Wallis Test.

## Options

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __variable__ | `string (required)`: nome variabile. Default: `none`.
* __group__ | `string`: variabile di raggruppamento. Default: `none`.
* __showDecision__ | `boolean`: controlla se visualizzare se l'ipotesi nulla viene respinta al livello di significatività specificato. Default: `false`.


## Examples

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
