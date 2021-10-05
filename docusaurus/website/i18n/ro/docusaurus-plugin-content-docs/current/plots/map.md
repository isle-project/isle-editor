---
id: map
title: Map
sidebar_label: Map
---

O hartă geografică pe care pot fi furnizate fie nume de locații, fie valori de longitudine/latitudine.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori pentru fiecare variabilă. Default: `none`.
* __scope__ | `string`: domeniul de aplicare al hărții care urmează să fie afișată. Default: `'world'`.
* __locations__ | `string`: numele variabilei din `data` care conține numele locației. Default: `none`.
* __locationmode__ | `string`: fie `ISO-3`, `USA-states`, fie `country names` care indică modul de codificare a valorilor din `locations`.. Default: `'country names'`.
* __longitude__ | `string`: numele variabilei din `data` care conține valorile longitudinii. Default: `none`.
* __latitude__ | `string`: numele variabilei din `data` care conține valorile latitudinii. Default: `none`.
* __showLand__ | `boolean`: dacă să se afișeze caracteristicile geografice pe hartă. Default: `false`.
* __aggregation__ | `string`: undefined. Default: `'sum'`.


## Exemple
