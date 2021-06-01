---
id: text-input
title: Text Input
sidebar_label: Text Input
---

Tekstinsyöttökomponentti. Voidaan käyttää osana ISLE-kojelautaa tai itsenäisesti. Jälkimmäisessä tapauksessa haluat käsitellä muutokset `onChange`-attribuutilla tai sitoa arvon globaaliin muuttujaan `bind`-attribuutilla.

## Vaihtoehdot

* __bind__ | `string`: sen globaalin muuttujan nimi, johon numero osoitetaan.. Default: `none`.
* __defaultValue__ | `string`: arvo, joka ilmaisee syötteen oletusarvon alussa.. Default: `''`.
* __value__ | `string`: tekstiarvo (valvottavan komponentin osalta). Default: `none`.
* __legend__ | `(string|node)`: merkkijono, joka ilmaisee numeron vieressä näkyvän tekstin.. Default: `''`.
* __inline__ | `boolean`: Ilmaisee, näytetäänkö syöttö rivissä. Default: `false`.
* __onBlur__ | `function`: takaisinkutsutoiminto, joka käynnistetään, kun tekstialue menettää tarkennuksen.. Default: `onBlur() {}`.
* __onChange__ | `function`: funktio, jota kutsutaan, kun tekstin arvoa muutetaan.. Default: `onChange() {}`.
* __onKeyDown__ | `function`: takaisinkutsufunktio, joka käynnistetään, kun jokin näppäin painetaan alas.. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: takaisinkutsufunktio, joka käynnistetään, kun jokin näppäin syötetään.. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: takaisinkutsufunktio, joka käynnistetään, kun näppäin vapautetaan.. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: merkkijono, joka ilmoittaa arvon, joka näytetään ennen alkuperäisen valinnan tekemistä.. Default: `none`.
* __width__ | `number`: luku, joka ilmaisee syötteen leveyden pikseleinä.. Default: `80`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.


## Esimerkkejä

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

