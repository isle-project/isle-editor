---
id: r-output
title: R Output
sidebar_label: R Output
---

Komponent do renderowania wyjścia R wewnątrz lekcji ISLE.

## Options

* __code__ | `string`: Kod R używany do oceny. Default: `''`.
* __libraries__ | `array`: Biblioteki R, które powinny być ładowane automatycznie po wykonaniu wejścia `kodu`.. Default: `[]`.
* __prependCode__ | `(string|array)`: Kod R (lub `liczba` bloków kodu), który ma być dołączony do kodu przechowywanego w `kodu` podczas oceny. Default: `''`.
* __onPlots__ | `function`: Wywołanie zwrotne z dowolnie wygenerowanymi działkami. Default: `onPlots() {}`.
* __onResult__ | `function`: wywołanie zwrotne z `błędem` (`nieważne`, jeśli operacja zakończyła się sukcesem) i `wynik` posiadania wyjścia R. Default: `onResult() {}`.


## Examples

```jsx live
<ROutput code="runif(10)" />
```

