---
id: generator
title: Generator
sidebar_label: Generator
---

Komponent na generovanie ďalších komponentov (napr. automaticky generovaných otázok).

## Možnosti

* __autoStart__ | `boolean`: ovláda, či sa má generátor automaticky zavolať po pripojení. Default: `true`.
* __buttonLabel__ | `(string|node)`: štítok pre tlačidlo. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: vyvolaná funkcia, ktorá by mala vrátiť novú zložku, ktorá sa má vykresliť v lekcii. Default: `none`.


## Príklady

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
