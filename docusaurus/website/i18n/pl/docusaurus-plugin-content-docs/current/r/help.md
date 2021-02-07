---
id: r-help
title: R Help
sidebar_label: R Help
---

Po kliknięciu słów wyciągnij dokumentację R w oknie modalnym.

## Options

* __func__ | `string`: nazwa funkcji `R`, dla której należy otworzyć dokumentację. Jeśli nie została dostarczona, przyjmuje się, że zawartość znacznika `RHelp` jest równa nazwie funkcji. Default: `''`.
* __library__ | `string`: nazwa pakietu R, w którym znajduje się dana funkcja. Default: `'base'`.
* __visible__ | `boolean`: kontroluje, czy okno pomocy modalnej powinno być otwarte podczas uruchamiania.. Default: `false`.


## Examples

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

