---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

O componentă de învățare privind testele de ipoteză pentru media unei populații.

## Opțiuni

* __types__ | `array<string>`: tipul (tipurile) de test (`One-Sample`, `Two-Sample`) pe care widget-ul ar trebui să-l expună. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: testul (testele) expus(e) de către widget. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: să afișeze întotdeauna ipoteza nulă ca o singură valoare. Default: `false`.
* __feedback__ | `boolean`: controlează dacă se afișează butoanele de feedback. Default: `false`.
* __pValue__ | `string`: etichetă personalizată pentru valoarea p (ar trebui să fie un șir de ecuații LaTeX). Default: `none`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.


## Exemple

```jsx live
<LearnMeanTest />
```

