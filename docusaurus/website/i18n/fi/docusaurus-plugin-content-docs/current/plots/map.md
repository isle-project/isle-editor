---
id: map
title: Map
sidebar_label: Map
---

Maantieteellinen kartta, jolle voidaan antaa joko sijainnin nimi tai pituus- ja leveysasteet.

## Vaihtoehdot

* __data__ | `object (required)`: kunkin muuttujan arvomääritysten objekti. Default: `none`.
* __scope__ | `string`: näytettävän kartan laajuus. Default: `'world'`.
* __locations__ | `string`: sijaintien nimiä sisältävän muuttujan nimi `data`:ssa. Default: `none`.
* __locationmode__ | `string`: joko `ISO-3`, `USA-states` tai `country names`, jotka ilmaisevat, miten `locations`-arvot koodataan.. Default: `'country names'`.
* __longitude__ | `string`: pituusarvoja sisältävän muuttujan nimi `data`:ssa. Default: `none`.
* __latitude__ | `string`: muuttujan nimi `data`:ssa, joka sisältää leveyspiirin arvot.. Default: `none`.
* __showLand__ | `boolean`: näytetäänkö kartalla maantieteelliset piirteet. Default: `false`.
* __aggregation__ | `string`: merkkijono, joka osoittaa, miten kunkin sijainnin arvot aggregoidaan (joko `sum`, `avg`, `min`, `max`, `mode`, `median`, `count`, `first` tai `last`).. Default: `'sum'`.


## Esimerkkejä
