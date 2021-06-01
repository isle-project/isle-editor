---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

En enkätkomponent där läraren kan samla in numeriska enkätdata från eleverna i realtid.

## Alternativ

* __question__ | `(string|node)`: den fråga som ska visas. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: kontrollerar om samma användare (eller session om den är anonym) kan lämna flera svar). Default: `false`.
* __anonymous__ | `boolean`: Gör det möjligt för eleverna att lämna in uppgifter anonymt. Observera att om det här alternativet är inställt på "true" kommer lärarna inte att kunna se den studerandes ID.. Default: `false`.
* __step__ | `(number|string)`: En sträng eller ett numeriskt värde som anger pilarnas steg som syns när markören svävar över inmatningsrutan. Om `'any'`, kommer steget att sättas till `1`.. Default: `'any'`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onSubmit__ | `function`: callback-funktion som anropas när eleverna lämnar in ett svar. Default: `onSubmit() {}`.


## Exempel

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

