---
id: generator
title: Generator
sidebar_label: Generator
---

他のコンポーネント（例えば、自動生成された質問）を生成するためのコンポーネント。

## オプション

* __autoStart__ | `boolean`: マウント後にジェネレーターを自動的に起動するかどうかを制御します。. Default: `true`.
* __buttonLabel__ | `(string|node)`: ボタン用ラベル. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: レッスンでレンダリングされる新しいコンポーネントを返す関数が呼び出されました。. Default: `none`.


## 例としては、以下のようなものがあります。

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
