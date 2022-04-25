---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

En komponent, der gengiver data i en tabelform. Bygget oven på [react-table] (https://react-table.js.org/).

## Indstillinger

* __data__ | `(array|object) (required)`: Et dataobjekt eller array, der skal vises. Hvis det er et objekt, svarer nøglerne til kolonneværdierne, mens et array vil forvente et array af objekter med et navngivet felt svarende til hver kolonne. Default: `none`.
* __dataInfo__ | `object`: objekt med et `info`-strengarray, der beskriver datasættet, datasættets `navn`, et `objekt` af `variabler` med nøgler, der svarer til variabelnavne og værdier til variabelbeskrivelser, og et `showOnStartup`-boolean, der styrer, om info-modalmodalen skal vises ved opstart. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: styrer, om kolonner, for hvilke der ikke findes nogen `info`, har en knap, der ved klik kalder callback-funktionen `onColumnDelete`.. Default: `false`.
* __undeletableVars__ | `array<string>`: array af variabelnavne for kolonner, der ikke må slettes. Default: `[]`.
* __filterable__ | `boolean`: styrer, om kolonnerne kan filtreres. Default: `true`.
* __editable__ | `array`: array af navne på kolonner, der skal kunne redigeres. Default: `[]`.
* __getTrProps__ | `function`: callback-funktion, der udføres for hver række for at tilpasse dens styling (overført tabelstatus, oplysninger om rækken,
kolonne og bordinstansen). Default: `none`.
* __onColumnDrag__ | `function`: funktion, der påberåbes, når en kolonne er blevet trukket til en anden position. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: funktion, der påkaldes med navnet på en kolonne, når der klikkes på den respektive sletteknap for en kolonne. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: funktion, der påkaldes, når en kolonne er blevet omdøbt (kaldes med det gamle navn som første og det nye navn som andet argument). Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: funktion, der angiver en handling, der skal udføres for rækker, der fjernes fra dataene (standard er en tom funktion). Default: `onClickRemove() {}`.
* __onEdit__ | `function`: funktion, der påkaldes med det opdaterede datasæt, efter at værdien af en celle er blevet ændret af brugeren (gælder kun, når tabellen er `redigerbar`). Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: funktion, der påkaldes, når brugeren har gennemført datatabellens tutorial. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: array af filtre. Default: `[]`.
* __onFilteredChange__ | `function`: funktion, der påberåbes med de aktuelle filtre, efter at data er blevet filtreret af brugeren. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: angiver, om der skal vises afkrydsningsfelter for rækker, der skal fjernes. Default: `false`.
* __showIdColumn__ | `boolean`: styrer, om der skal vises en ID-kolonne. Default: `true`.
* __disableDownload__ | `boolean`: om du vil skjule knappen til at downloade dataene som en CSV- eller JSON-fil. Default: `false`.
* __className__ | `string`: klassens navn. Default: `''`.
* __style__ | `object`: Et objekt, der giver mulighed for brugerdefineret css-styling. Standard er et tomt objekt. Default: `{}`.


## Eksempler

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

