---
id: generator
title: Generator
sidebar_label: Generator
---

Un componente para generar otros componentes (por ejemplo, preguntas generadas automáticamente).

## Opciones

* __autoStart__ | `boolean`: controla si se invoca automáticamente el generador después de montar. Default: `true`.
* __buttonLabel__ | `(string|node)`: etiqueta para el botón. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: función invocada que debe devolver un nuevo componente para ser rendido en la lección. Default: `none`.


## Ejemplos

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
