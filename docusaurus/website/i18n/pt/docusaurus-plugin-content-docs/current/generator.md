---
id: generator
title: Generator
sidebar_label: Generator
---

Um componente para gerar outros componentes (por exemplo, perguntas geradas automaticamente).

## Opções

* __autoStart__ | `boolean`: controla se o gerador deve ser invocado automaticamente após a montagem. Default: `true`.
* __buttonLabel__ | `(string|node)`: etiqueta para botão. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: função invocada que deve retornar um novo componente a ser apresentado na lição. Default: `none`.


## Exemplos

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
