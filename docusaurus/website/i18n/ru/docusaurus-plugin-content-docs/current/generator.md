---
id: generator
title: Generator
sidebar_label: Generator
---

Компонент для генерации других компонентов (например, автоматически генерируемых вопросов).

## Варианты

* __autoStart__ | `boolean`: управляет автоматическим вызовом генератора после монтажа. Default: `true`.
* __buttonLabel__ | `(string|node)`: ярлык для кнопки. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: вызываемая функция, которая должна возвращать новый компонент, выводимый в лекции. Default: `none`.


## Примеры

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
