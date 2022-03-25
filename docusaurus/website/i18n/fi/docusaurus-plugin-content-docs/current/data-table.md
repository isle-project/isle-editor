---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

Komponentti, joka renderöi tietoja taulukkomuodossa. Rakennettu [react-table](https://react-table.js.org/) päälle.

## Vaihtoehdot

* __data__ | `(array|object) (required)`: Katseltava datakohde tai -joukko. Jos kyseessä on objekti, avaimet vastaavat sarakkeiden arvoja, kun taas array odottaa joukko objekteja, joissa on nimetty kenttä jokaista saraketta varten.. Default: `none`.
* __dataInfo__ | `object`: objekti, jossa on `info` merkkijonojoukko, joka kuvaa tietosarjaa, tietosarjan `name`, `objekti` muuttujista, jonka avaimet vastaavat muuttujien nimiä ja arvot muuttujien kuvauksia, ja `showOnStartup` boolean, joka ohjaa, näytetäänkö info-ikkuna käynnistyksen yhteydessä.. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: valvoo, onko sarakkeilla, joille ei ole olemassa `info`, painike, jota napsauttamalla kutsutaan `onColumnDelete` callback-funktiota.. Default: `false`.
* __undeletableVars__ | `array<string>`: sarakkeiden muuttujien nimet, joita ei saa poistaa.. Default: `[]`.
* __filterable__ | `boolean`: ohjaa, ovatko sarakkeet suodatettavissa. Default: `true`.
* __editable__ | `array`: muokattavien sarakkeiden nimien joukko. Default: `[]`.
* __getTrProps__ | `function`: undefined. Default: `none`.
* __onColumnDrag__ | `function`: toiminto, jota kutsutaan, kun sarake on vedetty eri paikkaan.. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: funktio, jota kutsutaan sarakkeen nimellä, kun sarakkeen poistopainiketta napsautetaan.. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: funktio, jota kutsutaan, kun sarake on nimetty uudelleen (kutsutaan vanhalla nimellä ensimmäisenä ja uudella nimellä toisena argumenttina).. Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: funktio, joka määrittelee toiminnon, joka tehdään datasta poistetuille riveille (oletusarvo on tyhjä funktio).. Default: `onClickRemove() {}`.
* __onEdit__ | `function`: funktio, jota kutsutaan päivitetyllä tietosarjalla sen jälkeen, kun käyttäjä on muuttanut solun arvoa (koskee vain, kun taulukko on `editable`).. Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: toiminto, jota kutsutaan, kun käyttäjä on suorittanut datataulukon opetusohjelman loppuun. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: joukko suodattimia. Default: `[]`.
* __onFilteredChange__ | `function`: funktio, jota kutsutaan nykyisillä suodattimilla sen jälkeen, kun käyttäjä on suodattanut tiedot.. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: ilmoittaa, näytetäänkö poistettavien rivien valintaruudut.. Default: `false`.
* __showIdColumn__ | `boolean`: valvoo, näytetäänkö ID-sarake. Default: `true`.
* __disableDownload__ | `boolean`: halutaanko piilottaa painike tietojen lataamiseksi CSV- tai JSON-tiedostona?. Default: `false`.
* __className__ | `string`: luokan nimi. Default: `''`.
* __style__ | `object`: Objekti, joka mahdollistaa mukautetun css-muotoilun. Oletusarvo on tyhjä objekti. Default: `{}`.


## Esimerkkejä

```jsx live
<DataTable
    showRemove
    onClickRemove={( data ) => { console.log(data); }}
    data={{ 
        firstName: [ 'Hans', 'Lotti', 'Fritz' ], 
        lastName: [ 'Bauer', 'Müller', 'Schultz' ],
        age: [ 37, 55, 62 ]
    }}
    style={{ width: 600 }}
/>
```

