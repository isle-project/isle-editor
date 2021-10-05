---
id: map
title: Map
sidebar_label: Map
---

Een geografische kaart die kan worden geleverd met plaatsnamen of met lengte- en breedtegraadwaarden.

## Opties

* __data__ | `object (required)`: object of value arrays voor elke variabele. Default: `none`.
* __scope__ | `string`: omvang van de weer te geven kaart. Default: `'world'`.
* __locations__ | `string`: naam van de variabele in `data` die de locatienaam van het bedrijf bevat. Default: `none`.
* __locationmode__ | `string`: ofwel `ISO-3`, `Amerikaanse staten`, of `landnamen` die aangeven hoe waarden in `locaties` worden gecodeerd. Default: `'country names'`.
* __longitude__ | `string`: naam van de variabele in `data` die de lengtegraad heeft. Default: `none`.
* __latitude__ | `string`: naam van de variabele in `data` met breedtegraadwaarden. Default: `none`.
* __showLand__ | `boolean`: of de geografische kenmerken op de kaart moeten worden weergegeven. Default: `false`.
* __aggregation__ | `string`: tekenreeks die aangeeft hoe de waarden voor elke locatie moeten worden samengevoegd (ofwel `sum`, `avg`, `min`, `max`, `mode`, `median`, `count`, `first`, of `last`). Default: `'sum'`.


## Voorbeelden
