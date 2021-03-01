---
id: generator
title: Generator
sidebar_label: Generator
---

Eine Komponente zur Generierung anderer Komponenten (z. B. automatisch generierte Fragen).

## Optionen

* __autoStart__ | `boolean`: steuert, ob der Generator nach der Montage automatisch aufgerufen werden soll. Default: `true`.
* __buttonLabel__ | `(string|node)`: Beschriftung für Schaltfläche. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: Funktion aufgerufen, die eine neue Komponente zurückgeben soll, die in der Lektion gerendert wird. Default: `none`.


## Beispiele

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
