---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

En komponent som visar data i en tabellform. Byggd på [react-table] (https://react-table.js.org/).

## Alternativ

* __data__ | `(array|object) (required)`: Ett dataobjekt eller en matris som ska visas. Om det är ett objekt motsvarar nycklarna kolumnvärdena, medan en array förväntar sig en array av objekt med ett namngivet fält som motsvarar varje kolumn.. Default: `none`.
* __dataInfo__ | `object`: objekt med en strängarray `info` som beskriver datamängden, datamängdens `namn`, ett `objekt` med `variabler` med nycklar som motsvarar variabelnamn och värden som motsvarar variabelbeskrivningar, och en boolean `showOnStartup` som kontrollerar om informationsmodalen ska visas vid uppstart.. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: kontrollerar om kolumner för vilka det inte finns någon `info` har en knapp som när den klickas på kallar callback-funktionen `onColumnDelete`.. Default: `false`.
* __undeletableVars__ | `array<string>`: en matris med variabelnamn för kolumner som inte får tas bort. Default: `[]`.
* __filterable__ | `boolean`: kontrollerar om kolumnerna kan filtreras. Default: `true`.
* __editable__ | `array`: Matris med namn på kolumner som ska kunna redigeras.. Default: `[]`.
* __getTrProps__ | `function`: callback-funktion som utförs för varje rad för att anpassa dess stil (överlämnades tabellstatus, radinformation,
kolumn och tabellinstansen). Default: `none`.
* __onColumnDrag__ | `function`: funktion som anropas när en kolumn har dragits till en annan position. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: funktion som anropas med namnet på en kolumn när man klickar på respektive raderingsknapp för en kolumn.. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: funktion som anropas när en kolumn har bytt namn (anropas med det gamla namnet som första och det nya namnet som andra argument). Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: funktion som anger en åtgärd som ska vidtas för rader som tas bort från data (standardvärdet är en tom funktion).. Default: `onClickRemove() {}`.
* __onEdit__ | `function`: funktion som åberopas med den uppdaterade datamängden efter att värdet i en cell har ändrats av användaren (gäller endast när tabellen är "redigerbar").. Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: funktion som anropas när användaren har slutfört handledningen om datatabellen. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: en rad filter.. Default: `[]`.
* __onFilteredChange__ | `function`: funktion som åberopas med de aktuella filtren efter att data har filtrerats av användaren.. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: anger om det ska visas kryssrutor för rader som ska tas bort. Default: `false`.
* __showIdColumn__ | `boolean`: kontrollerar om en ID-kolumn ska visas. Default: `true`.
* __disableDownload__ | `boolean`: om du vill dölja knappen för att hämta data som en CSV- eller JSON-fil. Default: `false`.
* __className__ | `string`: klassens namn. Default: `''`.
* __style__ | `object`: Ett objekt som gör det möjligt att använda anpassad css-stil. Standardvärdet är ett tomt objekt.. Default: `{}`.


## Exempel

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

