---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

Eine ISLE-Komponente für Fragen, bei denen die Antworten von den Schülern in Form von Freitext geliefert werden sollen. Was diese Komponente von der **FreeTextQuestion** unterscheidet, ist die Tatsache, dass die aggregierten Gruppendaten in Echtzeit für alle angezeigt werden.

## Optionen

* __question__ | `(string|node)`: die Frage an die Studenten. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: steuert, ob man den Teilnehmern erlauben möchte, die Umfrage mehrfach zu beantworten. Default: `false`.
* __anonymous__ | `boolean`: steuert, ob Schülerantworten anonym gesammelt werden. Default: `false`.
* __rows__ | `number`: Anzahl der Textzeilen im Eingabefeld. Default: `4`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onSubmit__ | `function`: Callback-Funktion, die aufgerufen wird, wenn eine Antwort gesendet wird. Default: `onSubmit() {}`.


## Beispiele

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

