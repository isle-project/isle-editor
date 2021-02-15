---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Hoofdcomponentenanalyse.

## Options

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __variables__ | `array<string> (required)`: namen van variabelen die worden gebruikt voor het clusteren. Default: `none`.
* __center__ | `boolean`: centrumwaarden door het gemiddelde af te trekken. Default: `true`.
* __scale__ | `boolean`: schaalwaarden door te delen met de standaardafwijking. Default: `false`.
* __noComponents__ | `number`: aantal componenten geleverd aan de `on-resultaat` callback. Default: `0`.
* __onResult__ | `function`: callback ingeroepen met modelobject en componenten. Default: `onResult() {}`.


## Examples

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

