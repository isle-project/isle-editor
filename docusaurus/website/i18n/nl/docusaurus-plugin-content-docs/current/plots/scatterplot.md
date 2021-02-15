---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Berekent de minimale en maximale waarde van een array.

## Options

* __data__ | `object (required)`: object of value arrays voor elke variabele. Default: `none`.
* __xval__ | `string (required)`: variabele voor weergave op de x-as. Default: `none`.
* __yval__ | `string (required)`: variabele voor weergave op de y-as. Default: `none`.
* __text__ | `string`: Teksten die naast elk punt moeten worden weergegeven. Default: `none`.
* __color__ | `string`: categorische variabele om de kleur van de punten in kaart te brengen. Default: `none`.
* __type__ | `string`: categorische variabele om de weergegeven symbolen in kaart te brengen. Default: `none`.
* __size__ | `string`: kwantitatieve variabele om de grootte van de punten in kaart te brengen. Default: `none`.
* __regressionLine__ | `boolean`: controleert of de regressielijn(en) moet(en) worden overlapt. Default: `false`.
* __regressionMethod__ | `array<string>`: Lineair` en/of `vloeiend` om lineaire regressie en gladgestreken LAGE regressielijn weer te geven. Default: `[
  'linear'
]`.
* __lineBy__ | `string`: een aparte regressielijn weergeven voor elke categorie van de gespecificeerde categorische variabele. Default: `none`.
* __smoothSpan__ | `number`: afvlakkingsspanningsparameter voor `vloeiende` regressielijn. Default: `0.66`.


## Examples

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Cost"
/>
```

