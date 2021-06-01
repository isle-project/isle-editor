---
id: generator
title: Generator
sidebar_label: Generator
---

Komponent teiste komponentide genereerimiseks (nt automaatselt genereeritud küsimused).

## Valikud

* __autoStart__ | `boolean`: kontrollib, kas pärast paigaldamist kutsutakse generaator automaatselt üles.. Default: `true`.
* __buttonLabel__ | `(string|node)`: nupu silt. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: funktsioon, mis peaks tagastama uue komponendi, mis esitatakse õppetunnis.. Default: `none`.


## Näited

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
