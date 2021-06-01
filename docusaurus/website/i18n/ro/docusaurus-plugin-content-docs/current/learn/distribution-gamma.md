---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

O componentă de învățare pentru calcularea probabilităților unei distribuții gamma.

## Opțiuni

* __domain__ | `object`: obiect de matrice `x` și `y` cu punctele de început și de sfârșit pentru axa respectivă. Default: `none`.
* __scaleParameterization__ | `boolean`: controlează dacă se utilizează sau nu parametrizarea care implică un parametru de formă și scară în loc de formă și rată. Default: `false`.
* __step__ | `(number|string)`: mărimea pasului de intrare a scroll-ului. Default: `0.01`.
* __symbols__ | `boolean`: dacă se afișează sau nu simboluri grecești pentru parametri. Default: `true`.
* __tabs__ | `array<string>`: ce file să fie afișate (fie `smaller`, `greater`, sau `range`). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.


## Exemple

```jsx live
<LearnGammaDistribution />
```

