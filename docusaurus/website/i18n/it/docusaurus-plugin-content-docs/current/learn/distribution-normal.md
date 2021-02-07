---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

Un componente di apprendimento per il calcolo delle probabilità di una distribuzione normale.

## Options

* __domain__ | `object`: oggetto di array `x` e `y` con i punti iniziali e finali per il rispettivo asse. Default: `none`.
* __hideCDF__ | `boolean`: controlla se nascondere le trame del CDF. Default: `false`.
* __minStDev__ | `number`: deviazione standard minima. Default: `1`.
* __step__ | `(number|string)`: dimensione del passo dell'ingresso di scorrimento. Default: `0.01`.
* __tabs__ | `array<string>`: quali schede visualizzare (sia `piccole`, `greater`, o `range`). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Examples

```jsx live
<LearnNormalDistribution />
```

