---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Анализ на главните компоненти.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __variables__ | `array<string> (required)`: имена на променливи, използвани за клъстериране. Default: `none`.
* __center__ | `boolean`: централни стойности чрез изваждане на средната. Default: `true`.
* __scale__ | `boolean`: мащабирайте стойностите, като ги разделите със стандартното отклонение. Default: `false`.
* __noComponents__ | `number`: брой на компонентите, предоставени на обратната връзка `onResult`. Default: `0`.
* __onResult__ | `function`: обратна връзка, извикана с обект на модела и компоненти. Default: `onResult() {}`.


## Примери

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

