---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

Eine Umfragekomponente, in der der Kursleiter Multiple-Choice-Umfragedaten von Studenten in Echtzeit erfassen kann.

## Optionen

* __question__ | `(string|node)`: Zeichenkette zur Angabe der Frage, die den Schülern gestellt werden soll. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: steuert, ob man den Studenten erlauben möchte, die Umfrage mehrfach zu beantworten. Default: `false`.
* __anonymous__ | `boolean`: steuert, ob Schülerantworten anonymisiert werden. Default: `false`.
* __answers__ | `array`: Array, das Antwortmöglichkeiten für die Studenten anzeigt. Default: `[]`.
* __multipleAnswers__ | `boolean`: gibt an, ob Schüler mehr als eine Antwort auswählen dürfen. Beachten Sie, dass sich dies von allowMultipleAnswers dadurch unterscheidet, dass allow die Schüler in die Lage versetzt, die Frage mehrfach zu stellen. Default: `false`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onSubmit__ | `function`: Funktion, die aufgerufen wird, wenn eine Antwort gesendet wird. Default: `onSubmit() {}`.


## Beispiele

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

