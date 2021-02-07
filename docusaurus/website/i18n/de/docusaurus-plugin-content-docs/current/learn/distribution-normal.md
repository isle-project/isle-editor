---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

Eine Lernkomponente zur Berechnung von Wahrscheinlichkeiten einer Normalverteilung.

## Options

* __domain__ | `object`: Objekt aus `x` und `y` Arrays mit den Anfangs- und Endpunkten für die jeweilige Achse. Default: `none`.
* __hideCDF__ | `boolean`: steuert, ob die CDF-Darstellungen ausgeblendet werden sollen. Default: `false`.
* __minStDev__ | `number`: Mindeststandardabweichung. Default: `1`.
* __step__ | `(number|string)`: Schrittweite des Scrolleingangs. Default: `0.01`.
* __tabs__ | `array<string>`: welche Registerkarten angezeigt werden sollen (entweder `kleiner`, `größer`, oder `Bereich`). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Examples

```jsx live
<LearnNormalDistribution />
```

