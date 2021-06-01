---
id: generator
title: Generator
sidebar_label: Generator
---

Komponenta za generiranje drugih komponent (npr. samodejno generiranih vprašanj).

## Možnosti

* __autoStart__ | `boolean`: nadzoruje, ali naj se generator samodejno prikliče po namestitvi. Default: `true`.
* __buttonLabel__ | `(string|node)`: nalepka za gumb. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: funkcija, ki mora vrniti novo komponento, ki se prikaže v lekciji.. Default: `none`.


## Primeri

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
