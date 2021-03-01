---
id: generator
title: Generator
sidebar_label: Generator
---

Une composante permettant de générer d'autres composantes (par exemple, des questions générées automatiquement).

## Options

* __autoStart__ | `boolean`: contrôle si le générateur doit être automatiquement appelé après le montage. Default: `true`.
* __buttonLabel__ | `(string|node)`: étiquette pour le bouton. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: fonction invoquée qui doit renvoyer un nouveau composant à rendre dans la leçon. Default: `none`.


## Exemples

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
