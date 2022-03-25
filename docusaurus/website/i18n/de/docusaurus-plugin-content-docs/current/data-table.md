---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

Eine Komponente, die Daten in einer tabellarischen Darstellung wiedergibt. Baut auf [react-table](https://react-table.js.org/) auf.

## Optionen

* __data__ | `(array|object) (required)`: Ein Datenobjekt oder Array, das angezeigt werden soll. Wenn es sich um ein Objekt handelt, entsprechen die Schlüssel den Spaltenwerten, während ein Array ein Array von Objekten mit einem benannten Feld erwartet, das jeder Spalte entspricht. Default: `none`.
* __dataInfo__ | `object`: Objekt mit dem String-Array `info`, das den Datensatz beschreibt, dem `Namen` des Datensatzes, einem `Objekt` mit `Variablen`, dessen Schlüssel den Variablennamen und dessen Werte den Variablenbeschreibungen entsprechen, und einem booleschen Wert `showOnStartup`, der steuert, ob das Info-Modal beim Starten angezeigt werden soll. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: steuert, ob Spalten, für die keine `Info` existiert, eine Schaltfläche haben, die beim Anklicken die Callback-Funktion `onColumnDelete` aufruft. Default: `false`.
* __undeletableVars__ | `array<string>`: Array mit Variablennamen von Spalten, die nicht gelöscht werden dürfen. Default: `[]`.
* __filterable__ | `boolean`: steuert, ob Spalten filterbar sind. Default: `true`.
* __editable__ | `array`: Array von Namen für Spalten, die editierbar sein sollen. Default: `[]`.
* __getTrProps__ | `function`: undefined. Default: `none`.
* __onColumnDrag__ | `function`: Funktion, die aufgerufen wird, wenn eine Spalte an eine andere Position gezogen wurde. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: Funktion, die mit dem Namen einer Spalte aufgerufen wird, wenn die entsprechende Löschschaltfläche für eine Spalte angeklickt wird. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: Funktion, die aufgerufen wird, wenn eine Spalte umbenannt wurde (Aufruf mit dem alten Namen als erstes und dem neuen Namen als zweites Argument). Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: Funktion, die eine Aktion für Zeilen angibt, die aus den Daten entfernt werden (Standardwert ist eine leere Funktion). Default: `onClickRemove() {}`.
* __onEdit__ | `function`: Funktion, die mit dem aktualisierten Datensatz aufgerufen wird, nachdem der Wert einer Zelle durch den Benutzer geändert wurde (gilt nur, wenn die Tabelle `editierbar` ist). Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: Funktion, die aufgerufen wird, wenn der Benutzer das Datentabellen-Tutorial abgeschlossen hat. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: Reihe von Filtern. Default: `[]`.
* __onFilteredChange__ | `function`: Funktion, die mit den aktuellen Filtern aufgerufen wird, nachdem die Daten vom Benutzer gefiltert wurden. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: gibt an, ob Kontrollkästchen für zu entfernende Zeilen angezeigt werden sollen. Default: `false`.
* __showIdColumn__ | `boolean`: steuert, ob eine ID-Spalte angezeigt werden soll. Default: `true`.
* __disableDownload__ | `boolean`: ob die Schaltfläche zum Herunterladen der Daten als CSV- oder JSON-Datei ausgeblendet werden soll. Default: `false`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: Ein Objekt, das ein benutzerdefiniertes CSS-Styling ermöglicht. Standardmäßig wird ein leeres Objekt verwendet. Default: `{}`.


## Beispiele

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

