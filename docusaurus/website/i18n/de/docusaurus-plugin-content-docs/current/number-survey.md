---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

Eine Umfragekomponente, in der der Dozent numerische Umfragedaten von Studenten in Echtzeit sammeln kann.

## Options

* __question__ | `(string|node)`: die Frage, die angezeigt werden soll. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: steuert, ob derselbe Benutzer (oder die Sitzung, wenn sie anonym ist) mehrere Antworten abgeben darf). Default: `false`.
* __anonymous__ | `boolean`: Ermöglicht es den Schülern, Daten anonym zu übermitteln. Beachten Sie, dass, wenn diese Option auf "true" gesetzt ist, die Dozenten die ID des einreichenden Studenten nicht sehen können. Default: `false`.
* __step__ | `(number|string)`: Ein `String` oder `numerischer` Wert, der den Schritt der Pfeile angibt, die zu sehen sind, wenn der Cursor über dem Eingabefeld schwebt. Wenn `'any'`, wird der Schritt auf `1` gesetzt. Default: `'any'`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onSubmit__ | `function`: Callback-Funktion, die aufgerufen wird, sobald der Schüler eine Antwort abgeschickt hat. Default: `onSubmit() {}`.


## Examples

```jsx live
<NumberSurvey
    allowMultipleAnswers={true}
    anonymous="false"
    id="generic_mean_question"
    question="Submit a number"
    defaultValue={0}
    step="any"
/>
```

