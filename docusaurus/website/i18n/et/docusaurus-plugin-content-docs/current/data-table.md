---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

Komponent, mis renderdab andmeid tabeli kujul. Ehitatud [react-table](https://react-table.js.org/) peal.

## Valikud

* __data__ | `(array|object) (required)`: Vaadeldav andmeobjekt või massiivi. Kui tegemist on objektiga, vastavad võtmed veergude väärtustele, samas kui massiivi puhul oodatakse objektide massiivi, millel on igale veerule vastav nimeline väli.. Default: `none`.
* __dataInfo__ | `object`: objekt, mis sisaldab andmekogumit kirjeldava stringimassiivi `info`, andmekogumi `nime`, `muutujate` objekti, mille võtmed vastavad muutujate nimedele ja väärtused muutujate kirjeldustele, ja boolean `showOnStartup`, mis kontrollib, kas infomoodulit kuvatakse käivitamisel.. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: kontrollib, kas veergudel, mille kohta ei ole `info` olemas, on nupp, mille klõpsamisel kutsutakse välja tagasilöögifunktsioon `onColumnDelete`.. Default: `false`.
* __undeletableVars__ | `array<string>`: massiivi muutujate nimedest, mida ei tohi kustutada.. Default: `[]`.
* __filterable__ | `boolean`: kontrollib, kas veerud on filtreeritavad. Default: `true`.
* __editable__ | `array`: redigeeritavate veergude nimede massiivi. Default: `[]`.
* __getTrProps__ | `function`: callback-funktsioon, mis täidetakse iga rea puhul, et kohandada selle kujundust (edastatud tabeli olek, rea info,
veerg ja tabeli instants). Default: `none`.
* __onColumnDrag__ | `function`: funktsioon, mida kutsutakse üles, kui veerg on lohistatud teise positsiooni. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: funktsioon, mida kutsutakse esile veeru nimega, kui klõpsatakse vastava veeru kustutamise nupule. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: funktsioon, mida kutsutakse üles, kui veerg on ümber nimetatud (kutsutakse vana nime esimese ja uue nimega teise argumendina).. Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: funktsioon, mis määrab, mida tuleb teha andmetest eemaldatud ridade puhul (vaikimisi tühi funktsioon). Default: `onClickRemove() {}`.
* __onEdit__ | `function`: funktsioon, mida kutsutakse üles koos uuendatud andmekogumiga pärast seda, kui kasutaja on lahtri väärtust muutnud (kehtib ainult siis, kui tabel on "redutseeritav").. Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: funktsioon, mida kutsutakse üles, kui kasutaja on lõpetanud andmetabeli õpetuse. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: filtrite massiivi. Default: `[]`.
* __onFilteredChange__ | `function`: funktsioon, mida kutsutakse üles praeguste filtritega pärast seda, kui kasutaja on andmed filtreerinud.. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: näitab, kas kuvada eemaldatavate ridade märkeruudud.. Default: `false`.
* __showIdColumn__ | `boolean`: kontrollib, kas näidata ID veergu. Default: `true`.
* __disableDownload__ | `boolean`: kas varjata nuppu andmete allalaadimiseks CSV- või JSON-failina.. Default: `false`.
* __className__ | `string`: klassi nimi. Default: `''`.
* __style__ | `object`: Objekt, mis võimaldab kohandatud css-stiilimist. Vaikimisi on tühi objekt. Default: `{}`.


## Näited

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

