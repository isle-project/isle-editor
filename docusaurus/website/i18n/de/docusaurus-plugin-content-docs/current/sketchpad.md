---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

Ein Zeichnungsskizzenblock für Notizen auf Vorlesungsfolien oder leeren Seiten.

## Optionen

* __autoSave__ | `boolean`: steuert, ob der Editor den aktuellen Text in einem bestimmten Zeitintervall in den lokalen Speicher des Browsers speichern soll. Default: `true`.
* __feedbackButtons__ | `boolean`: steuert, ob auf jeder Folie Feedback-Schaltflächen angezeigt werden sollen. Default: `false`.
* __intervalTime__ | `number`: Zeit zwischen automatischen Speicherungen. Default: `10000`.
* __hideInputButtons__ | `boolean`: steuert, ob Zeichen- und Texteingabetasten ausgeblendet werden sollen. Default: `false`.
* __hideNavigationButtons__ | `boolean`: steuert, ob Schaltflächen zum Navigieren zwischen Seiten ausgeblendet werden sollen. Default: `false`.
* __hideSaveButtons__ | `boolean`: steuert, ob die Speichertasten ausgeblendet werden sollen. Default: `false`.
* __hideTransmitButtons__ | `boolean`: steuert, ob Schaltflächen zum Übertragen von Benutzeraktionen ausgeblendet werden sollen. Default: `false`.
* __brushSize__ | `number`: Größe des Pinsels, mit dem gemalt werden soll. Default: `4`.
* __color__ | `string`: Farbe des Pinsels und der Texte. Default: `'#444444'`.
* __canvasWidth__ | `number`: Breite des Canvas-Elements (in px). Default: `1200`.
* __canvasHeight__ | `number`: Höhe des Canvas-Elements (in px). Default: `700`.
* __fullscreen__ | `boolean`: steuert, ob die Größe der Leinwand automatisch an die Breite und Höhe des Browserfensters angepasst werden soll. Default: `false`.
* __fill__ | `string`: wenn `horizontal`, wird beim Zeichnen einer PDF-Datei der gesamte verfügbare horizontale Raum gefüllt; wenn `vertical`, wird der gesamte vertikale Raum verwendet, um einen Überlauf der y-Achse zu verhindern. Default: `'vertical'`.
* __disabled__ | `boolean`: ob die Komponente schreibgeschützt werden soll und das Zeichnen auf dem Skizzenblock verboten werden soll. Default: `false`.
* __fontFamily__ | `string`: Schriftfamilie. Default: `'Arial'`.
* __fontSize__ | `number`: Schriftgröße. Default: `24`.
* __nodes__ | `object`: Komponenten, die über den angegebenen Folien gerendert werden sollen; `Schlüssel` sollte den Seitenzahlen entsprechen, `Werte` den Komponenten. Default: `{}`.
* __noPages__ | `number`: ursprüngliche Seitenzahl. Default: `1`.
* __pdf__ | `string`: Link zur PDF-Datei für eingebrannte Seitenhintergründe. Default: `none`.
* __showTutorial__ | `boolean`: Tutorial für den Skizzenblock beim Starten anzeigen. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: steuert, ob Schaltflächen ausgeblendet werden sollen, wenn die Breite der Symbolleiste nicht ausreicht (andernfalls wird eine neue Zeile begonnen). Default: `false`.
* __transmitOwner__ | `boolean`: ob Besitzeraktionen in Echtzeit an andere Benutzer übertragen werden sollen. Default: `true`.
* __groupMode__ | `boolean`: steuert, ob alle Aktionen des Benutzers an alle anderen übertragen werden. Default: `false`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onChange__ | `function`: Callback, der immer dann aufgerufen wird, wenn ein neues Linienelement gezeichnet wird. Default: `onChange() {}`.


## Beispiele

```jsx live
<Sketchpad canvasWidth={750} />
```

