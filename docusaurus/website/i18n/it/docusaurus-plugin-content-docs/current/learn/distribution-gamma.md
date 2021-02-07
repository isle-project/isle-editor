---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

Un componente di apprendimento per il calcolo delle probabilità di una distribuzione gamma.

## Options

* __domain__ | `object`: oggetto di array `x` e `y` con i punti iniziali e finali per il rispettivo asse. Default: `none`.
* __scaleParameterization__ | `boolean`: controlla se utilizzare la parametrizzazione che comporta un parametro di forma e scala invece di forma e velocità. Default: `false`.
* __step__ | `(number|string)`: dimensione del passo dell'ingresso di scorrimento. Default: `0.01`.
* __symbols__ | `boolean`: se visualizzare i simboli greci per i parametri. Default: `true`.
* __tabs__ | `array<string>`: quali schede visualizzare (sia `piccole`, `greater`, o `range`). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Examples

```jsx live
<LearnGammaDistribution />
```

