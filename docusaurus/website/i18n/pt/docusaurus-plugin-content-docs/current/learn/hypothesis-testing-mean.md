---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

Um componente de aprendizado sobre testes de hipóteses para uma média populacional.

## Opções

* __types__ | `array<string>`: o(s) tipo(s) de teste ('Uma Amostra', 'Duas Amostra') que o widget deve expor. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: o(s) teste(s) exposto(s) pelo widget. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: sempre exibir a hipótese nula como um único valor. Default: `false`.
* __feedback__ | `boolean`: controla se devem ser exibidos botões de feedback. Default: `false`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Exemplos

```jsx live
<LearnMeanTest />
```

