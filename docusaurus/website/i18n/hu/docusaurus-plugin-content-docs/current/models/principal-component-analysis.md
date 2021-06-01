---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Főkomponens-elemzés.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __variables__ | `array<string> (required)`: a klaszterezéshez használt változók nevei. Default: `none`.
* __center__ | `boolean`: középértékek az átlag kivonásával. Default: `true`.
* __scale__ | `boolean`: skálaértékek osztva a szórással. Default: `false`.
* __noComponents__ | `number`: az "onResult" visszahíváshoz megadott komponensek száma. Default: `0`.
* __onResult__ | `function`: visszahívás a modell objektummal és a komponensekkel. Default: `onResult() {}`.


## Példák

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

