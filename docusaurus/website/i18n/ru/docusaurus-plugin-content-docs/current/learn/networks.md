---
id: networks
title: Networks
sidebar_label: Networks
---

Генерируйте сети по модели Erdős-Rényi.

## Options

* __maxNumNodes__ | `number`: максимальное количество узлов, которые могут быть выбраны для сети. Default: `30`.
* __showEdgeChart__ | `boolean`: управляет отображением графика, отображающего количество ребер в каждой сгенерированной сети (сбрасывается при изменении количества узлов). Default: `false`.
* __showTransitivities__ | `boolean`: подсчет переходных процессов / глобальных коэффициентов кластеризации для генерируемых сетей. Default: `false`.


## Examples

```jsx live
<LearnNetworks />
```

