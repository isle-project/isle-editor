---
id: generator
title: Generator
sidebar_label: Generator
---

Компонент за генериране на други компоненти (напр. автоматично генерирани въпроси).

## Опции

* __autoStart__ | `boolean`: контролира дали генераторът да се извиква автоматично след монтиране. Default: `true`.
* __buttonLabel__ | `(string|node)`: етикет за бутон. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: функция, която трябва да върне нов компонент, който да бъде визуализиран в урока. Default: `none`.


## Примери

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
