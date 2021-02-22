---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

Eine Lernkomponente zur Berechnung von Wahrscheinlichkeiten einer Gamma-Verteilung.

## Optionen

* __domain__ | `object`: Objekt aus `x` und `y` Arrays mit den Anfangs- und Endpunkten für die jeweilige Achse. Default: `none`.
* __scaleParameterization__ | `boolean`: steuert, ob die Parametrierung mit einem Form- und Skalenparameter anstelle von Form und Rate verwendet werden soll. Default: `false`.
* __step__ | `(number|string)`: Schrittweite des Scrolleingangs. Default: `0.01`.
* __symbols__ | `boolean`: ob griechische Symbole für Parameter angezeigt werden sollen. Default: `true`.
* __tabs__ | `array<string>`: welche Registerkarten angezeigt werden sollen (entweder `kleiner`, `größer`, oder `Bereich`). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Beispiele

```jsx live
<LearnGammaDistribution />
```

