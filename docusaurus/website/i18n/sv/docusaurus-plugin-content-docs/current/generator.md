---
id: generator
title: Generator
sidebar_label: Generator
---

En komponent för att generera andra komponenter (t.ex. automatiskt genererade frågor).

## Alternativ

* __autoStart__ | `boolean`: kontrollerar om generatorn ska anropas automatiskt efter montering. Default: `true`.
* __buttonLabel__ | `(string|node)`: etikett för knappen. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: funktion som ska återge en ny komponent som ska återges i lektionen.. Default: `none`.


## Exempel

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
