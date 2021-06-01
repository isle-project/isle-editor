---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

O componentă de învățare pentru calcularea probabilităților unei distribuții normale.

## Opțiuni

* __domain__ | `object`: obiect de matrice `x` și `y` cu punctele de început și de sfârșit pentru axa respectivă. Default: `none`.
* __hideCDF__ | `boolean`: controlează dacă se ascund graficele CDF. Default: `false`.
* __minStDev__ | `number`: abaterea standard minimă. Default: `1`.
* __step__ | `(number|string)`: mărimea pasului de intrare a scroll-ului. Default: `0.01`.
* __tabs__ | `array<string>`: ce file să fie afișate (fie `smaller`, `greater`, sau `range`). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.


## Exemple

```jsx live
<LearnNormalDistribution />
```

