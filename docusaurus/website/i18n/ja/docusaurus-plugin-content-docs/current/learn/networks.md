---
id: networks
title: Networks
sidebar_label: Networks
---

Erdős-Rényiモデルからネットワークを生成する。

## オプション

* __maxNumNodes__ | `number`: ネットワークで選択可能な最大ノード数. Default: `30`.
* __showEdgeChart__ | `boolean`: 各生成ネットワークのエッジ数を表示するチャートを表示するかどうかを制御します（ノード数が変更されるとリセットされます）．. Default: `false`.
* __showTransitivities__ | `boolean`: 生成されたネットワークのための遷移性／グローバルクラスタリング係数を集計するかどうか. Default: `false`.


## 例としては、以下のようなものがあります。

```jsx live
<LearnNetworks />
```

