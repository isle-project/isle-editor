---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

Um componente de aprendizagem para calcular as probabilidades de uma distribuição gama.

## Opções

* __domain__ | `object`: objeto dos conjuntos `x` e `y` com os pontos inicial e final para o respectivo eixo. Default: `none`.
* __scaleParameterization__ | `boolean`: controla se deve ser utilizada a parametrização envolvendo um parâmetro de forma e escala em vez de forma e taxa. Default: `false`.
* __step__ | `(number|string)`: tamanho do passo da entrada do scroll. Default: `0.01`.
* __symbols__ | `boolean`: se devem ser exibidos símbolos gregos para parâmetros. Default: `true`.
* __tabs__ | `array<string>`: que abas exibir (ou "menor", "maior", ou "alcance"). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Exemplos

```jsx live
<LearnGammaDistribution />
```

