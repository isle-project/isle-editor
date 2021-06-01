---
id: generator
title: Generator
sidebar_label: Generator
---

Komponentas, skirtas kitiems komponentams (pvz., automatiškai generuojamiems klausimams) generuoti.

## Parinktys

* __autoStart__ | `boolean`: kontroliuoja, ar automatiškai iškviesti generatorių po montavimo. Default: `true`.
* __buttonLabel__ | `(string|node)`: mygtuko etiketė. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: iškviesta funkcija, kuri turėtų grąžinti naują komponentą, atvaizduojamą pamokoje.. Default: `none`.


## Pavyzdžiai

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
