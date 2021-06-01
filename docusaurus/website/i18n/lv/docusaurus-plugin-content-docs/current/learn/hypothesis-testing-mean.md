---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

Mācību komponents par hipotēžu testiem populācijas vidējai vērtībai.

## Iespējas

* __types__ | `array<string>`: testa(-u) tips(-i) (`Viena izlase`, `Divas izlases`), kas widgetam būtu jāatspoguļo.. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: logrīka parādītais(-ie) tests(-i).. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: nulles hipotēzi vienmēr parāda kā vienu vērtību.. Default: `false`.
* __feedback__ | `boolean`: kontrolē, vai tiek rādītas atgriezeniskās saites pogas.. Default: `false`.
* __pValue__ | `string`: pielāgota p-vērtības etiķete (tai jābūt LaTeX vienādojuma virknei).. Default: `none`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.


## Piemēri

```jsx live
<LearnMeanTest />
```

