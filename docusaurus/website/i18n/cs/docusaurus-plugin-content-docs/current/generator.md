---
id: generator
title: Generator
sidebar_label: Generator
---

Komponenta pro generování dalších komponent (např. automaticky generovaných otázek).

## Možnosti

* __autoStart__ | `boolean`: řídí, zda se má generátor po připojení automaticky vyvolat.. Default: `true`.
* __buttonLabel__ | `(string|node)`: štítek pro tlačítko. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: vyvolána funkce, která by měla vrátit novou komponentu, která bude vykreslena v lekci.. Default: `none`.


## Příklady

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
