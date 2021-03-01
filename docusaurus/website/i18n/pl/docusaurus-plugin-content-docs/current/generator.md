---
id: generator
title: Generator
sidebar_label: Generator
---

Komponent do generowania innych komponentów (np. automatycznie generowanych pytań).

## Opcje

* __autoStart__ | `boolean`: kontroluje, czy generator ma być automatycznie wywoływany po zamontowaniu. Default: `true`.
* __buttonLabel__ | `(string|node)`: etykieta na przycisk. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: wywołana funkcja, która powinna zwrócić nowy komponent do wykonania w lekcji. Default: `none`.


## Przykłady

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
