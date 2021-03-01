---
id: generator
title: Generator
sidebar_label: Generator
---

Un componente per la generazione di altri componenti (ad es. domande generate automaticamente).

## Opzioni

* __autoStart__ | `boolean`: controlla se invocare automaticamente il generatore dopo il montaggio. Default: `true`.
* __buttonLabel__ | `(string|node)`: etichetta per il pulsante. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: funzione invocata che dovrebbe restituire un nuovo componente da rendere nella lezione. Default: `none`.


## Esempi

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
