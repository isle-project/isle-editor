---
id: map
title: Map
sidebar_label: Map
---

Geografinis žemėlapis, kuriam galima pateikti vietovių pavadinimus arba ilgumos ir platumos vertes.

## Parinktys

* __data__ | `object (required)`: kiekvieno kintamojo reikšmių masyvų objektas. Default: `none`.
* __scope__ | `string`: rodytino žemėlapio apimtis. Default: `'world'`.
* __locations__ | `string`: `data` kintamojo, kuriame saugomi vietos pavadinimai, pavadinimas. Default: `none`.
* __locationmode__ | `string`: `ISO-3`, `USA-valstybės` arba `šalių pavadinimai`, nurodantys, kaip koduojamos `vietų` reikšmės.. Default: `'country names'`.
* __longitude__ | `string`: `data` kintamojo, kuriame laikomos ilgumos vertės, pavadinimas. Default: `none`.
* __latitude__ | `string`: `data` kintamojo, kuriame laikomos platumos vertės, pavadinimas. Default: `none`.
* __showLand__ | `boolean`: ar žemėlapyje rodyti geografines funkcijas.. Default: `false`.
* __aggregation__ | `string`: eilutė, nurodanti, kaip apibendrinti kiekvienos vietos reikšmes (`sum`, `avg`, `min`, `max`, `mode`, `median`, `count`, `first` arba `last`).. Default: `'sum'`.


## Pavyzdžiai
