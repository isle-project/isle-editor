---
id: hypothesis-testing-proportion
title: Hypothesis Testing for Proportions
sidebar_label: Hypothesis Testing for Proportions
---

Výuková část o testech hypotéz pro podíl populace.

## Možnosti

* __types__ | `array<string>`: typ(y) testu (`Jednovýběrový`, `Dvouvýběrový`), který by měl widget zobrazit.. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __feedback__ | `boolean`: řídí, zda se mají zobrazovat tlačítka zpětné vazby. Default: `false`.
* __nullHypothesisAsValue__ | `boolean`: vždy zobrazí nulovou hypotézu jako jedinou hodnotu.. Default: `false`.
* __pValue__ | `string`: vlastní označení p-hodnoty (měl by to být řetězec rovnic LaTeXu).. Default: `none`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady

```jsx live
<LearnProportionTest />
```

