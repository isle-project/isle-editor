---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

Een leercomponent voor het berekenen van de waarschijnlijkheid van een gamma-verdeling.

## Options

* __domain__ | `object`: object van `x` en `y` arrays met de begin- en eindpunten voor de respectievelijke as. Default: `none`.
* __scaleParameterization__ | `boolean`: bepaalt of de parametrisering met een vorm- en schaalparameter moet worden gebruikt in plaats van vorm en snelheid. Default: `false`.
* __step__ | `(number|string)`: stapgrootte van de scroll-ingang. Default: `0.01`.
* __symbols__ | `boolean`: de vraag of er Griekse symbolen voor de parameters moeten worden weergegeven. Default: `true`.
* __tabs__ | `array<string>`: welke tabbladen moeten worden weergegeven (ofwel `kleiner`, `groter`, of `schaal`). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Examples

```jsx live
<LearnGammaDistribution />
```

