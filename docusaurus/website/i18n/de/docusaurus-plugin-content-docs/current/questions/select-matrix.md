---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Eine Frage mit einer Antwort, die aus mehreren Auswahlfeldern besteht.

## Options

* __question__ | `(string|node)`: Frage, die oben in der Auswahlfragenmatrix angezeigt werden soll. Default: `''`.
* __rows__ | `array`: Zeilenbeschriftungen. Default: `[]`.
* __cols__ | `array`: Spaltenbezeichnungen. Default: `[]`.
* __options__ | `object`: Objekt mit Schlüssel-Wert-Paaren, deren Schlüssel die Form `Zeile:Spalte` haben, z. B. `0:0`, `0:1`, `1:0` usw., und deren entsprechende Werte Arrays der möglichen Antwortmöglichkeiten für die einzelnen Auswahlfragen sind. Default: `{}`.
* __solution__ | `object`: Lösungsobjekt mit Schlüssel-Wert-Paaren, deren Schlüssel die Form `Zeile:Spalte` haben, z.B. `0:0`, `0:1`, `1:0` usw., und deren zugehörige Werte der Index des richtigen Antwortelements aus dem jeweiligen `Options`-Array sind. Default: `{}`.
* __hints__ | `array<(string|node)>`: Hinweise, die bei der Beantwortung der Frage helfen. Default: `[]`.
* __hintPlacement__ | `string`: Platzierung der Hinweise (entweder `oben`, `left`, `right`, oder `unten`). Default: `'bottom'`.
* __feedback__ | `boolean`: steuert, ob Feedback-Tasten angezeigt werden sollen. Default: `true`.
* __provideFeedback__ | `string`: ob Sie "kein" Feedback, "individuelles" Feedback zu den eingereichten Antworten oder "allgemeines" Feedback für alle Fragen geben möchten. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: ob Eingaben ohne Auswahl in jedem Auswahlfeld erlaubt werden sollen. Default: `false`.
* __nTries__ | `number`: nach wie vielen Versuchen keine weiteren Antworten akzeptiert werden (wenn `provideFeedback` nicht `none` ist). Default: `1`.
* __failureMsg__ | `string`: Benachrichtigungstext, der beim Absenden falscher Antworten angezeigt wird. Default: `none`.
* __successMsg__ | `string`: Benachrichtigungstext, der beim Absenden richtiger Antworten angezeigt wird. Default: `none`.
* __cellLabels__ | `object`: Beschriftungen für Zellen, die durch ein Objekt definiert sind, dessen Schlüssel das Format "Zeile:Spalte" haben. Default: `{}`.
* __chat__ | `boolean`: steuert, ob das Element einen integrierten Chat haben soll. Default: `false`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onSubmit__ | `function`: Callback-Funktion, die bei der Übermittlung mit den Antworten als erstem und einem die Korrektheit angebenden Booleschen Wert als zweitem Parameter aufgerufen wird. Default: `onSubmit() {}`.


## Examples

```jsx live
<SelectQuestionMatrix
    rows={[ 'First Row' ]} 
    cols={[ 'First Column', 'Second Column' ]} 
    options={{ '0:0': [ 'Incorrect', 'Correct' ], '0:1':  [ 'Incorrect', 'Incorrect', 'Correct' ] }} 
    solution={{ '0:0': 1, '0:1': 2 }}
/>
```
