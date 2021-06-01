---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

Výuková složka o testech hypotéz pro populační průměr.

## Možnosti

* __types__ | `array<string>`: typ(y) testu (`Jednovýběrový`, `Dvouvýběrový`), který by měl widget zobrazit.. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: test(y) vystavený(é) widgetem.. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: vždy zobrazí nulovou hypotézu jako jedinou hodnotu.. Default: `false`.
* __feedback__ | `boolean`: řídí, zda se mají zobrazovat tlačítka zpětné vazby. Default: `false`.
* __pValue__ | `string`: vlastní označení p-hodnoty (měl by to být řetězec rovnic LaTeXu).. Default: `none`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady

```jsx live
<LearnMeanTest />
```

