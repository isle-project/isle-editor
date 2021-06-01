---
id: hypothesis-testing-proportion
title: Hypothesis Testing for Proportions
sidebar_label: Hypothesis Testing for Proportions
---

Mācību komponents par hipotēžu testiem attiecībā uz populācijas proporciju.

## Iespējas

* __types__ | `array<string>`: testa(-u) tips(-i) (`Viena izlase`, `Divas izlases`), kas widgetam būtu jāatspoguļo.. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __feedback__ | `boolean`: kontrolē, vai tiek rādītas atgriezeniskās saites pogas.. Default: `false`.
* __nullHypothesisAsValue__ | `boolean`: nulles hipotēzi vienmēr parāda kā vienu vērtību.. Default: `false`.
* __pValue__ | `string`: pielāgota p-vērtības etiķete (tai jābūt LaTeX vienādojuma virknei).. Default: `none`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.


## Piemēri

```jsx live
<LearnProportionTest />
```

