---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

Komponent vykresľujúci údaje v tabuľkovom zobrazení. Postavená nad [react-table](https://react-table.js.org/).

## Možnosti

* __data__ | `(array|object) (required)`: Dátový objekt alebo pole, ktoré sa má zobraziť. Ak ide o objekt, kľúče zodpovedajú hodnotám stĺpcov, zatiaľ čo pri poli sa očakáva pole objektov s pomenovaným poľom, ktoré zodpovedá každému stĺpcu. Default: `none`.
* __dataInfo__ | `object`: objekt s reťazcovým poľom `info` popisujúcim súbor údajov, `názov` súboru údajov, `objekt` `premenných` s kľúčmi zodpovedajúcimi menám premenných a hodnotami popisov premenných, a boolean `showOnStartup`, ktorý kontroluje, či sa má pri spustení zobraziť informačný modal. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: kontroluje, či stĺpce, pre ktoré neexistujú žiadne `info`, majú tlačidlo, ktoré po kliknutí vyvolá spätnú funkciu `onColumnDelete`.. Default: `false`.
* __undeletableVars__ | `array<string>`: pole názvov premenných stĺpcov, ktoré sa nesmú vymazať. Default: `[]`.
* __filterable__ | `boolean`: kontroluje, či je možné stĺpce filtrovať.. Default: `true`.
* __editable__ | `array`: pole názvov stĺpcov, ktoré sa budú dať upravovať. Default: `[]`.
* __getTrProps__ | `function`: undefined. Default: `none`.
* __onColumnDrag__ | `function`: funkcia vyvolaná po pretiahnutí stĺpca na inú pozíciu. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: funkcia vyvolaná s názvom stĺpca po kliknutí na príslušné tlačidlo na odstránenie stĺpca. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: funkcia vyvolaná pri premenovaní stĺpca (volá sa so starým názvom ako prvým a novým názvom ako druhým argumentom). Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: funkcia určujúca akciu, ktorá sa má vykonať pre riadky odstránené z údajov (predvolené nastavenie je prázdna funkcia). Default: `onClickRemove() {}`.
* __onEdit__ | `function`: funkcia vyvolaná s aktualizovaným súborom údajov po tom, čo používateľ zmenil hodnotu bunky (platí len vtedy, keď je tabuľka `editovateľná`). Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: funkcia vyvolaná, keď používateľ dokončí výučbu tabuľky údajov. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: pole filtrov. Default: `[]`.
* __onFilteredChange__ | `function`: funkcia vyvolaná s aktuálnymi filtrami po filtrovaní údajov používateľom. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: označuje, či sa majú zobrazovať zaškrtávacie políčka pre riadky, ktoré sa majú odstrániť.. Default: `false`.
* __showIdColumn__ | `boolean`: kontroluje, či sa má zobrazovať stĺpec ID. Default: `true`.
* __disableDownload__ | `boolean`: či chcete skryť tlačidlo na prevzatie údajov ako súboru CSV alebo JSON.. Default: `false`.
* __className__ | `string`: názov triedy. Default: `''`.
* __style__ | `object`: Objekt umožňujúci vlastné štýlovanie css. Predvolené nastavenie je prázdny objekt. Default: `{}`.


## Príklady

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

