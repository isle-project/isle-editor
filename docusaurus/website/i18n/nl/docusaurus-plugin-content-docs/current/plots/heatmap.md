---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Een warmtekaart voor het visualiseren van een relatie tussen twee variabelen.

## Options

* __data__ | `object (required)`: object of value arrays voor elke variabele. Default: `none`.
* __x__ | `string (required)`: x-asvariabele. Default: `none`.
* __y__ | `string (required)`: y-asvariabele. Default: `none`.
* __overlayPoints__ | `boolean`: controleert of de punten voor elke waarneming worden overlapt. Default: `false`.
* __smoothSpan__ | `number`: afvlakkingsspanne. Default: `0.66`.
* __regressionMethod__ | `array<string>`: array met `lineair` en/of `vloeiend` om een lineaire en/of afgevlakte regressielijn te bedekken. Default: `none`.
* __alternateColor__ | `boolean`: controleert of er een alternatief kleurenschema voor de warmtekaart moet worden gebruikt. Default: `false`.
* __commonXAxis__ | `boolean`: bepaalt of er een gemeenschappelijke x-as moet worden gebruikt bij het maken van meerdere warmtekaarten per waarde van een groepsvariabele. Default: `false`.
* __commonYAxis__ | `boolean`: bepaalt of een gemeenschappelijke y-as moet worden gebruikt bij het maken van meerdere warmtekaarten per waarde van een groepsvariabele. Default: `false`.


## Examples

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Age"
    y="Cost"
/>
```

