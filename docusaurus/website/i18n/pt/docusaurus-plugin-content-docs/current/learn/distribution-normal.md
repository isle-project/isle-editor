---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

Um componente de aprendizagem para o cálculo das probabilidades de uma distribuição normal.

## Options

* __domain__ | `object`: objeto dos conjuntos `x` e `y` com os pontos inicial e final para o respectivo eixo. Default: `none`.
* __hideCDF__ | `boolean`: controla se devem ser ocultadas as parcelas de CDF. Default: `false`.
* __minStDev__ | `number`: desvio padrão mínimo. Default: `1`.
* __step__ | `(number|string)`: tamanho do passo da entrada do scroll. Default: `0.01`.
* __tabs__ | `array<string>`: que abas exibir (ou "menor", "maior", ou "alcance"). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Examples

```jsx live
<LearnNormalDistribution />
```

