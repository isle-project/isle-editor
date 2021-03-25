---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

Um componente de aprendizagem que ilustra o Teorema do Limite Central (CLT) para uma distribuição contínua escolhida.

## Opções

* __distributions__ | `array<string>`: distribuições estatísticas a escolher ('uniforme', 'exponencial', e/ou 'normal'). Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: matriz de números ou um único número indicando os tamanhos de amostra que podem ser sorteados. Default: `25`.
* __hideFormulas__ | `boolean`: controla se as fórmulas devem ser ocultadas no texto componente. Default: `false`.


## Exemplos

```jsx live
<LearnContinuousCLT />
```

