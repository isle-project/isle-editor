---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Analyse des composantes principales.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __variables__ | `array<string> (required)`: les noms des variables utilisées pour la mise en grappes. Default: `none`.
* __center__ | `boolean`: centrer les valeurs en soustrayant la moyenne. Default: `true`.
* __scale__ | `boolean`: les valeurs de l'échelle en les divisant par l'écart-type. Default: `false`.
* __noComponents__ | `number`: nombre de composants fournis au rappel "sur résultat. Default: `0`.
* __onResult__ | `function`: rappel invoqué avec l'objet modèle et les composants. Default: `onResult() {}`.


## Examples

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

