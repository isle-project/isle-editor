---
id: generator
title: Generator
sidebar_label: Generator
---

En komponent til at generere andre komponenter (f.eks. automatisk genererede spørgsmål).

## Indstillinger

* __autoStart__ | `boolean`: styrer, om generatoren skal påkaldes automatisk efter montering. Default: `true`.
* __buttonLabel__ | `(string|node)`: etiket til knap. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: funktion, der skal returnere en ny komponent, som skal gengives i lektionen. Default: `none`.


## Eksempler

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
