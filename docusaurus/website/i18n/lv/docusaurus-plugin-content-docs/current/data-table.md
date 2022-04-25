---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

Komponents, kas attēlo datus tabulārajā displejā. Izstrādāts uz [react-table](https://react-table.js.org/).

## Iespējas

* __data__ | `(array|object) (required)`: Pārskatāmais datu objekts vai masīvs. Ja tas ir objekts, atslēgas atbilst kolonnu vērtībām, bet masīvs būs objektu masīvs ar nosauktu lauku, kas atbilst katrai kolonnai.. Default: `none`.
* __dataInfo__ | `object`: objekts ar `info` virkņu masīvu, kas apraksta datu kopu, datu kopas `nosaukumu`, `mainīgo` objektu ar mainīgo nosaukumu atslēgām un mainīgo aprakstu vērtībām, `showOnStartup` boolean, kas kontrolē, vai palaišanas laikā tiek parādīts informācijas modāls.. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: kontrolē, vai kolonnām, kurām nav `info`, ir poga, kas pēc noklikšķināšanas izsauc `onColumnDelete` izsaukuma funkciju.. Default: `false`.
* __undeletableVars__ | `array<string>`: to kolonnu mainīgo nosaukumu masīvs, kuras nedrīkst dzēst.. Default: `[]`.
* __filterable__ | `boolean`: kontrolē, vai kolonnas ir filtrējamas.. Default: `true`.
* __editable__ | `array`: rediģējamo kolonnu nosaukumu masīvs. Default: `[]`.
* __getTrProps__ | `function`: atsauces funkcija, kas tiek izpildīta katrai rindai, lai pielāgotu tās stilu (nodota tabulas stāvoklis, rindas informācija,
sleja un tabulas instance). Default: `none`.
* __onColumnDrag__ | `function`: funkcija, kas tiek izsaukta, kad sleja ir pārvilkta uz citu pozīciju.. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: funkcija, kas tiek izsaukta ar kolonnas nosaukumu, kad ir noklikšķināts uz attiecīgās kolonnas dzēšanas pogas.. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: funkcija, kas tiek izsaukta, ja kolonnas nosaukums ir mainīts (tiek izsaukta ar veco nosaukumu kā pirmo un jauno nosaukumu kā otro argumentu).. Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: funkcija, kas norāda darbību, kas jāveic attiecībā uz rindām, kuras izņemtas no datiem (noklusējuma iestatījumi ir tukša funkcija).. Default: `onClickRemove() {}`.
* __onEdit__ | `function`: funkcija, kas tiek izsaukta ar atjauninātu datu kopu pēc tam, kad lietotājs ir mainījis šūnas vērtību (attiecas tikai tad, ja tabula ir `rediģējama`).. Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: funkcija, kas tiek izsaukta, kad lietotājs ir pabeidzis datu tabulas pamācību.. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: filtru masīvs. Default: `[]`.
* __onFilteredChange__ | `function`: funkcija, kas tiek izsaukta ar pašreizējiem filtriem pēc tam, kad datus ir filtrējis lietotājs.. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: norāda, vai attīrāmajām rindām ir jānorāda izvēles rūtiņas.. Default: `false`.
* __showIdColumn__ | `boolean`: kontrolē, vai tiek rādīta ID sleja.. Default: `true`.
* __disableDownload__ | `boolean`: vai slēpt pogu, lai datus lejupielādētu CSV vai JSON faila veidā.. Default: `false`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __style__ | `object`: Objekts, kas ļauj pielāgot css stilu. Noklusējuma noklusējuma vērtība ir tukšs objekts. Default: `{}`.


## Piemēri

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

