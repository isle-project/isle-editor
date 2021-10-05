---
id: map
title: Map
sidebar_label: Map
---

Une carte géographique qui peut être fournie soit par des noms de lieux, soit par des valeurs de longitude/latitude.

## Options

* __data__ | `object (required)`: des tableaux d'objets de valeur pour chaque variable. Default: `none`.
* __scope__ | `string`: étendue de la carte à afficher. Default: `'world'`.
* __locations__ | `string`: nom de la variable dans les noms de lieux de détention des "données. Default: `none`.
* __locationmode__ | `string`: soit "ISO-3", "États américains", ou "noms de pays" indiquant comment les valeurs dans les "localisations" sont encodées. Default: `'country names'`.
* __longitude__ | `string`: nom de la variable dans "data" contenant les valeurs de longitude. Default: `none`.
* __latitude__ | `string`: nom de la variable dans "data" contenant les valeurs de latitude. Default: `none`.
* __showLand__ | `boolean`: si les caractéristiques géographiques doivent être indiquées sur la carte. Default: `false`.
* __aggregation__ | `string`: chaîne indiquant comment agréger les valeurs pour chaque emplacement (soit `sum`, `avg`, `min`, `max`, `mode`, `median`, `count`, `first`, ou `last`). Default: `'sum'`.


## Exemples
