---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Pääkomponenttianalyysi.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __variables__ | `array<string> (required)`: klusteroinnissa käytettävien muuttujien nimet. Default: `none`.
* __center__ | `boolean`: keskiarvot vähentämällä keskiarvo. Default: `true`.
* __scale__ | `boolean`: asteikkoarvot jakamalla ne keskihajonnalla.. Default: `false`.
* __noComponents__ | `number`: `onResult` -kutsun takaisinkutsuun toimitettujen komponenttien määrä.. Default: `0`.
* __onResult__ | `function`: callback kutsutaan malliobjektin ja komponenttien kanssa. Default: `onResult() {}`.


## Esimerkkejä

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

