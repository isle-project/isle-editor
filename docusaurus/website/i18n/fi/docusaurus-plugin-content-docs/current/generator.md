---
id: generator
title: Generator
sidebar_label: Generator
---

Komponentti muiden komponenttien (esim. automaattisesti luotujen kysymysten) tuottamiseen.

## Vaihtoehdot

* __autoStart__ | `boolean`: valvoo, kutsutaanko generaattori automaattisesti asennuksen jälkeen.. Default: `true`.
* __buttonLabel__ | `(string|node)`: painikkeen etiketti. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: funktio, jonka pitäisi palauttaa uusi komponentti, joka renderöidään oppitunnilla.. Default: `none`.


## Esimerkkejä

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
