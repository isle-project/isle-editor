---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

Een leercomponent voor het berekenen van de waarschijnlijkheid van een normale verdeling.

## Opties

* __domain__ | `object`: object van `x` en `y` arrays met de begin- en eindpunten voor de respectievelijke as. Default: `none`.
* __hideCDF__ | `boolean`: controleert of de CDF-plots worden verborgen. Default: `false`.
* __minStDev__ | `number`: minimale standaardafwijking. Default: `1`.
* __step__ | `(number|string)`: stapgrootte van de scroll-ingang. Default: `0.01`.
* __tabs__ | `array<string>`: welke tabbladen moeten worden weergegeven (ofwel `kleiner`, `groter`, of `schaal`). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Voorbeelden

```jsx live
<LearnNormalDistribution />
```

