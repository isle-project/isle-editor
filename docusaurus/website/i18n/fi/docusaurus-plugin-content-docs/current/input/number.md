---
id: number-input
title: Number Input
sidebar_label: Number Input
---

Numeron syöttökomponentti. Voidaan käyttää osana ISLE-kojelautaa tai itsenäisesti. Jälkimmäisessä tapauksessa haluat käsitellä muutokset `onChange`-attribuutilla tai sitoa arvon globaaliin muuttujaan `bind`-attribuutilla.

## Vaihtoehdot

* __bind__ | `string`: sen globaalin muuttujan nimi, johon numero osoitetaan.. Default: `''`.
* __defaultValue__ | `number`: arvo, joka ilmaisee syötteen oletusarvon käynnistyksen yhteydessä.. Default: `0`.
* __disabled__ | `boolean`: boolean, joka ilmaisee, onko tulo aktiivinen vai ei.. Default: `false`.
* __inline__ | `boolean`: ilmaisee, näytetäänkö syöttö rivissä. Default: `false`.
* __legend__ | `(string|node)`: merkkijono, joka ilmaisee numeron vieressä näkyvän tekstin.. Default: `none`.
* __max__ | `number`: numero, joka osoittaa suurimman sallitun syötettävän arvon.. Default: `null`.
* __min__ | `number`: numero, joka osoittaa pienimmän mahdollisen arvon, joka voidaan lisätä.. Default: `null`.
* __numbersOnly__ | `boolean`: valvoo, hyväksytäänkö vain numerot. Default: `true`.
* __placeholder__ | `string`: merkkijono, joka osoittaa tekstin, joka näytetään, kun syöttö on tyhjä (edellyttää, että `defaultValue` on asetettu arvoon `null` tai `undefined`).. Default: `'0'`.
* __onBlur__ | `function`: callback-funktio, joka kutsutaan, kun käytetään blur-menetelmää. Default: `onBlur() {}`.
* __onChange__ | `function`: takaisinkutsufunktio, joka käynnistetään, kun numeron syöttöä muutetaan.. Default: `onChange() {}`.
* __onKeyDown__ | `function`: takaisinkutsufunktio, joka käynnistetään, kun jokin näppäin painetaan alas.. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: takaisinkutsufunktio, joka käynnistetään, kun jokin näppäin syötetään.. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: takaisinkutsufunktio, joka käynnistetään, kun näppäin vapautetaan.. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: numero, joka osoittaa asteittaiset muutokset, kun käytetään lisäysnuolia.. Default: `1`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __inputStyle__ | `object`: CSS inline-tyylit syöttöelementille. Default: `{}`.
* __value__ | `number`: numeroarvo (valvottavan komponentin osalta). Default: `none`.
* __tooltip__ | `string`: tooltip-merkkijono (jos sitä ei ole asetettu, tooltip luodaan automaattisesti). Default: `none`.
* __tooltipPlacement__ | `string`: työkaluvihjeen suunta. Default: `'left'`.


## Esimerkkejä

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

