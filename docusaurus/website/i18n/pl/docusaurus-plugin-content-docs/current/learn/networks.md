---
id: networks
title: Networks
sidebar_label: Networks
---

Generowanie sieci na podstawie modelu Erdős-Rényi.

## Opcje

* __maxNumNodes__ | `number`: maksymalna liczba węzłów, które mogą być wybrane do sieci. Default: `30`.
* __showEdgeChart__ | `boolean`: kontroluje, czy ma być wyświetlany wykres pokazujący liczbę krawędzi w każdej generowanej sieci (reset przy zmianie liczby węzłów). Default: `false`.
* __showTransitivities__ | `boolean`: czy zsumować współczynniki aktywności tranzytowej / globalnego grupowania dla wygenerowanych sieci. Default: `false`.


## Przykłady

```jsx live
<LearnNetworks />
```

