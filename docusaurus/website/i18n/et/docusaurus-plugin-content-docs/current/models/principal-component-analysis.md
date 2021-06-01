---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Põhikomponentanalüüs.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __variables__ | `array<string> (required)`: klasterdamiseks kasutatavate muutujate nimed. Default: `none`.
* __center__ | `boolean`: keskväärtused, lahutades keskväärtuse. Default: `true`.
* __scale__ | `boolean`: skaala väärtused, jagades standardhälbega. Default: `false`.
* __noComponents__ | `number`: komponentide arv, mis on esitatud tagasiside "onResult" jaoks.. Default: `0`.
* __onResult__ | `function`: tagasikutsumine, mida kutsutakse üles koos mudeli objekti ja komponentidega. Default: `onResult() {}`.


## Näited

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

