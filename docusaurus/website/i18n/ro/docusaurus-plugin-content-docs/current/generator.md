---
id: generator
title: Generator
sidebar_label: Generator
---

O componentă pentru generarea altor componente (de exemplu, întrebări generate automat).

## Opțiuni

* __autoStart__ | `boolean`: controlează dacă se apelează automat generatorul după montare. Default: `true`.
* __buttonLabel__ | `(string|node)`: etichetă pentru buton. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: invocată care ar trebui să returneze o nouă componentă care să fie redată în lecție. Default: `none`.


## Exemple

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
