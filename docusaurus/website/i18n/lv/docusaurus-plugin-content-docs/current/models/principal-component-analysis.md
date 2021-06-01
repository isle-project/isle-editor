---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Galveno komponenšu analīze.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __variables__ | `array<string> (required)`: klasterizēšanai izmantoto mainīgo nosaukumi. Default: `none`.
* __center__ | `boolean`: centra vērtības, atņemot vidējo. Default: `true`.
* __scale__ | `boolean`: skalas vērtības, dalot ar standartnovirzi.. Default: `false`.
* __noComponents__ | `number`: `onResult` atgriezeniskajam izsaukumam sniegto komponentu skaits. Default: `0`.
* __onResult__ | `function`: atsaukums, kas izsaukts ar modeļa objektu un sastāvdaļām. Default: `onResult() {}`.


## Piemēri

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

