---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

Eine Komponente mit einer Frage und einer Fünf-Punkte-Skala, die die Schüler beantworten sollen.

## Options

* __question__ | `(string|node)`: zu druckende Frage. Default: `''`.
* __options__ | `array`: ein Array mit fünf Elementen, das die Beschriftungen für die verschiedenen Skalenstufen enthält. Default: `none`.
* __noMultipleResponses__ | `boolean`: Mehrfache Einreichungen von einem einzelnen Studenten nicht zulassen. Default: `false`.
* __disableSubmitNotification__ | `boolean`: steuert, ob Übermittlungsbenachrichtigungen deaktiviert werden sollen. Default: `false`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Examples

```jsx live
<LikertScale 
    id="discrimination" 
    question="After your initial analysis of the data, how likely do you think it is that players are discriminated against by soccer referees because of their skin tone?" 
    options={[ 'Very unlikely', 'Unlikely', 'Neither unlikely nor likely', 'Likely', 'Very Likely']} 
/>
```

