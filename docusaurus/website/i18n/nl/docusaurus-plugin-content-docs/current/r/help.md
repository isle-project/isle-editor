---
id: r-help
title: R Help
sidebar_label: R Help
---

Laat woorden de R-documentatie in een modaal venster ophalen wanneer er op wordt geklikt.

## Options

* __func__ | `string`: naam van de `R-functie` waarvoor de documentatie moet worden geopend. Indien niet geleverd, wordt de inhoud van de `RHelp`-tag verondersteld gelijk te zijn aan de naam van de functie.. Default: `''`.
* __library__ | `string`: naam van het R-pakket waarin de functie zich bevindt. Default: `'base'`.
* __visible__ | `boolean`: controleert of het hulpvenster bij het opstarten moet worden geopend.. Default: `false`.


## Examples

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

