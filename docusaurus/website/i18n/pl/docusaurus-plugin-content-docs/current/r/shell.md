---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Interaktywna powłoka R, która może być używana do wykonywania poleceń R w chmurze za pomocą [OpenCPU](https://www.opencpu.org/).

## Opcje

* __code__ | `string`: Kod R podlegający ocenie. Default: `''`.
* __solution__ | `string`: dla pytań programowych, kod R `string` reprezentujący oficjalne rozwiązanie problemu. Default: `''`.
* __hints__ | `array<(string|node)>`: w przypadku pytań związanych z programowaniem, szereg wskazówek zawierających wskazówki, jak podejść do problemu. Default: `[]`.
* __addPreceding__ | `boolean`: jeśli zostanie ustawiona na wartość true, powłoka oceni cały kod z bieżącego składnika i wszystkich poprzednich występujących w lekcji. Default: `false`.
* __libraries__ | `array`: Biblioteki R, które powinny być ładowane automatycznie po wykonaniu wejścia `kodu`.. Default: `[]`.
* __precompute__ | `boolean`: kontroluje, czy po zamontowaniu komponentu powinien zostać wykonany kod domyślny. Default: `false`.
* __prependCode__ | `(string|array)`: Kod R `sznurek` (lub `szereg` bloków kodu R), który ma być dołączony do kodu przechowywanego w `kodu` podczas oceny. Default: `''`.
* __chat__ | `boolean`: kontroluje, czy funkcja czatu grupowego powinna być włączona. Default: `false`.
* __disabled__ | `boolean`: kontroluje, czy wyłączyć wszystkie wejścia użytkownika i sprawić, by blok kodu był statyczny. Default: `false`.
* __lines__ | `number`: liczba wierszy do wyświetlenia. Default: `5`.
* __resettable__ | `boolean`: kontroluje, czy ma być wyświetlany przycisk resetowania w celu przywrócenia domyślnego kodu wejściowego. Default: `false`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onChange__ | `function`: wywołanie zwrotne przy każdej zmianie danych wejściowych pola tekstowego. Default: `onChange() {}`.
* __onEvaluate__ | `function`: wywołanie zwrotne po kliknięciu przycisku "Wycena".. Default: `onEvaluate(){}`.
* __onResult__ | `function`: wywołanie zwrotne wywoływane za każdym razem, gdy wynik wykonania kodu zostanie uzyskany z chmury. Wynik `łańcuch` jest przekazywany jako jedyny argument do funkcji callback. Default: `onResult() {}`.


## Przykłady

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
/>
```

