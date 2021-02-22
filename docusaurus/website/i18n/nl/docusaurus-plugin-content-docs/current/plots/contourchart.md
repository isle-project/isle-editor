---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Een contourenkaart.

## Opties

* __data__ | `object (required)`: object of value arrays voor elke variabele. Default: `none`.
* __x__ | `string (required)`: x-asvariabele. Default: `none`.
* __y__ | `string (required)`: y-asvariabele. Default: `none`.
* __overlayPoints__ | `boolean`: controleert of de punten voor elke waarneming worden overlapt. Default: `false`.
* __smoothSpan__ | `number`: afvlakkingsspanne. Default: `0.66`.
* __regressionMethod__ | `array<string>`: array met `lineair` en/of `vloeiend` om een lineaire en/of afgevlakte regressielijn te bedekken. Default: `none`.
* __onSelected__ | `function`: callback aangeroepen wanneer punten worden geselecteerd met x-, y-waarden en de geselecteerde punten. Default: `onSelected() {}`.


## Voorbeelden

```jsx live
<ContourChart 
    data={heartdisease} 
    x="Age"
    y="Cost"
/>
```

