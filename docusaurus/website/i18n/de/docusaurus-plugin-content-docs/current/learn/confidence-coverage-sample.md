---
id: confidence-coverage-sample
title: Confidence Interval Coverage Sample
sidebar_label: Confidence Interval Coverage Sample
---

Eine Lernkomponente zur Veranschaulichung des zentralen Grenzwertsatzes (CLT) bei der Stichprobenziehung aus einem gelieferten Datensatz.

## Optionen

* __data__ | `object (required)`: Datenobjekt, dessen Schlüssel den Variablennamen entsprechen und dessen Werte die Werte der jeweiligen Variablen enthalten. Default: `none`.
* __samples__ | `(array<number>|number)`: Array von Zahlen oder eine einzelne Zahl, die den Stichprobenumfang angibt, der gezogen werden kann. Default: `25`.
* __variables__ | `array (required)`: Namen von Variablen, die abgetastet werden können. Default: `none`.


## Beispiele

```jsx live
<LearnConfidenceCoverageSample />
```

