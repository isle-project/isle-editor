---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Chi-négyzet függetlenségvizsgálat.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __var1__ | `(string|Factor) (required)`: az első változó neve. Default: `none`.
* __var2__ | `(string|Factor) (required)`: a második változó neve. Default: `none`.


## Példák

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
