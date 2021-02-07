---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Komponente, die es einer Gruppe von Personen ermöglicht, über die Gewichtung und Wichtigkeit von gegebenen Optionen abzustimmen.

## Options

* __allowMultipleAnswers__ | `boolean`: steuert, ob man den Teilnehmern erlauben möchte, die Umfrage mehrfach zu beantworten. Default: `false`.
* __anonymous__ | `boolean`: steuert, ob Schülerantworten anonymisiert werden. Default: `false`.
* __colors__ | `array`: Array mit Farben für die Kreisdiagrammkomponenten. Wenn nicht definiert, wird eine benutzerdefinierte Farbskala verwendet. Default: `none`.
* __disabled__ | `boolean`: steuert, ob die Umfrage deaktiviert wird. Default: `false`.
* __group__ | `string`: Gruppenanzeige Überschrift. Default: `'group results'`.
* __groupHeight__ | `number`: Proportionen Eingangshöhe für Gruppendarstellung (in px). Default: `100`.
* __legends__ | `array`: Legendenbeschriftungen, die die zu wägenden Optionen beschreiben. Default: `[]`.
* __margin__ | `string`: Anteil Eingaberand (in px). Default: `'40px'`.
* __onSubmit__ | `function`: Callback-Funktion, die aufgerufen wird, sobald der Schüler eine Antwort abgeschickt hat. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: Proportionen Eingangshöhe für einzelnen Schüler (in px). Default: `200`.
* __precision__ | `number`: Angezeigte Präzision der Anteilswerte. Default: `2`.
* __question__ | `(string|node)`: die Frage, die angezeigt werden soll. Default: `''`.
* __step__ | `number`: die Stufe der Pfeile, die zu sehen sind, wenn der Cursor über dem Eingabefeld schwebt. Default: `0.25`.


## Examples

```jsx live
<ProportionsSurvey 
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```



