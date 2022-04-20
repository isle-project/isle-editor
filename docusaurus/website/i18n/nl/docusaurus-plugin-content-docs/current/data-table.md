---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

Een component die gegevens weergeeft in een tabelweergave. Gebouwd bovenop [reageer-tabel](https://react-table.js.org/).

## Opties

* __data__ | `(array|object) (required)`: Een te bekijken data-object of -array. Als het een object is, komen de toetsen overeen met de kolomwaarden, terwijl een array een array verwacht met een veld met een naam die overeenkomt met elke kolom. Default: `none`.
* __dataInfo__ | `object`: object met `info` string array die de dataset beschrijft, de `naam` van de dataset, een `object` van `variabelen` met toetsen die overeenkomen met variabelennamen en -waarden bij variabelenbeschrijvingen, een `showOnStartup` boolean die bepaalt of de infomodal bij het opstarten wordt weergegeven. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: bepaalt of kolommen waarvoor geen `info` bestaat een knop hebben die bij het aanklikken de `onColumnDelete` terugbelfunctie oproept. Default: `false`.
* __undeletableVars__ | `array<string>`: array van variabele namen van kolommen die niet mogen worden geschrapt. Default: `[]`.
* __filterable__ | `boolean`: controleert of de kolommen filterbaar zijn. Default: `true`.
* __editable__ | `array`: array van namen voor kolommen die bewerkbaar moeten zijn. Default: `[]`.
* __getTrProps__ | `function`: callback functie die voor elke rij wordt uitgevoerd om de styling ervan aan te passen (doorgegeven tabelstatus, rij-info,
kolom, en de tabel instantie). Default: `none`.
* __onColumnDrag__ | `function`: functie aangeroepen wanneer een kolom naar een andere positie is gesleept. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: functie aangeroepen met de naam van een kolom wanneer op de respectievelijke verwijderknop voor een kolom wordt geklikt. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: functie aangeroepen wanneer een kolom is hernoemd (met de oude naam als eerste en de nieuwe naam als tweede argument). Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: functie die een actie specificeert voor rijen die uit de gegevens worden verwijderd (standaard naar een lege functie). Default: `onClickRemove() {}`.
* __onEdit__ | `function`: functie aangeroepen met de bijgewerkte dataset nadat de waarde van een cel door de gebruiker is gewijzigd (geldt alleen als de tabel 'bewerkbaar' is). Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: functie die wordt aangeroepen wanneer de gebruiker de gegevenstabelinstructie heeft voltooid. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: reeks filters. Default: `[]`.
* __onFilteredChange__ | `function`: functie die wordt aangeroepen met de huidige filters nadat de gegevens door de gebruiker zijn gefilterd. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: geeft aan of de selectievakjes voor de te verwijderen rijen moeten worden weergegeven. Default: `false`.
* __showIdColumn__ | `boolean`: controleert of er een ID-kolom wordt getoond. Default: `true`.
* __disableDownload__ | `boolean`: of de knop om de gegevens te downloaden als CSV- of JSON-bestand te verbergen. Default: `false`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: Een object dat een aangepaste css-styling mogelijk maakt. Standaardinstelling van een leeg object. Default: `{}`.


## Voorbeelden

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

