---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

Una componente di apprendimento che illustra il Teorema del limite centrale (CLT) per una distribuzione continua scelta.

## Opzioni

* __distributions__ | `array<string>`: distribuzioni statistiche tra cui scegliere ("uniforme", "esponenziale" e/o "normale"). Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: array di numeri o un singolo numero che denota le dimensioni del campione che può essere estratto. Default: `25`.
* __hideFormulas__ | `boolean`: controlla se nascondere le formule nel testo del componente. Default: `false`.


## Esempi

```jsx live
<LearnContinuousCLT />
```

