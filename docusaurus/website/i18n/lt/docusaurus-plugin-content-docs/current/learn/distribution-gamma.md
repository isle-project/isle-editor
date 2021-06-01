---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

Mokymosi komponentas, skirtas gama pasiskirstymo tikimybėms apskaičiuoti.

## Parinktys

* __domain__ | `object`: `x` ir `y` masyvų objektas su atitinkamos ašies pradžios ir pabaigos taškais.. Default: `none`.
* __scaleParameterization__ | `boolean`: kontroliuoja, ar naudoti parametrizavimą, apimantį formos ir skalės parametrą, o ne formos ir greičio parametrą.. Default: `false`.
* __step__ | `(number|string)`: slinkties įvesties žingsnio dydis. Default: `0.01`.
* __symbols__ | `boolean`: ar rodyti graikiškus simbolius parametrams. Default: `true`.
* __tabs__ | `array<string>`: kokius skirtukus rodyti (`mažesnius`, `didesnius` arba `didesnius`).. Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai

```jsx live
<LearnGammaDistribution />
```

