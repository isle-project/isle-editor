---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Pagrindinių komponentų analizė.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __variables__ | `array<string> (required)`: klasterizacijai naudojamų kintamųjų pavadinimai. Default: `none`.
* __center__ | `boolean`: centro reikšmes atimant vidurkį. Default: `true`.
* __scale__ | `boolean`: verčių skalę dalijant iš standartinio nuokrypio.. Default: `false`.
* __noComponents__ | `number`: komponentų, pateiktų `onResult` grįžtamajam skambučiui, skaičius. Default: `0`.
* __onResult__ | `function`: grįžtamasis skambutis, iškviečiamas su modelio objektu ir komponentais. Default: `onResult() {}`.


## Pavyzdžiai

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

