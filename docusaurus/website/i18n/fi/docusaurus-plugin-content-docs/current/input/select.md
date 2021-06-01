---
id: select-input
title: Select Input
sidebar_label: Select Input
---

Valitse tulokomponentti. Voidaan käyttää osana ISLE-kojelautaa tai itsenäisesti. Jälkimmäisessä tapauksessa haluat käsitellä muutokset `onChange`-attribuutilla tai sitoa arvon globaaliin muuttujaan `bind`-attribuutilla.

## Vaihtoehdot

* __bind__ | `string`: sen globaalin muuttujan nimi, johon numero osoitetaan.. Default: `''`.
* __clearable__ | `boolean`: boolean-arvo, joka ilmaisee, voiko tehdyn valinnan (tehdyt valinnat) tyhjentää.. Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: syötteen oletusarvo käynnistyksen yhteydessä. Default: `none`.
* __disabled__ | `boolean`: ohjaa, onko tulo aktiivinen vai ei. Default: `false`.
* __inline__ | `boolean`: ilmaisee, näytetäänkö syöttö rivissä. Default: `false`.
* __legend__ | `(string|node)`: syötteen vieressä näkyvä teksti. Default: `''`.
* __menuPlacement__ | `string`: valikon sijainti suhteessa ohjaimeen (joko "auto", "top" tai "bottom").. Default: `'auto'`.
* __multi__ | `boolean`: valvoo, voiko valita useita vastauksia. Default: `false`.
* __onChange__ | `function`: callback-funktio, joka kutsutaan, kun valinta on tehty.. Default: `onChange() {}`.
* __options__ | `array`: joukko, joka osoittaa käyttäjän käytettävissä olevat vaihtoehdot. Default: `[]`.
* __placeholder__ | `string`: arvo, joka näytetään ennen alkuperäisen valinnan tekemistä.. Default: `none`.
* __tooltip__ | `string`: teksti, joka näytetään, kun hiiren kursori viedään legendan päälle. Default: `none`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.


## Esimerkkejä

```jsx live
<SelectInput
    legend="Choose the test direction"
    defaultValue="two-sided"
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```

