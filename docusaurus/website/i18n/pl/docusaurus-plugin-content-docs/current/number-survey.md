---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

Komponent ankiety, w którym prowadzący może zbierać dane liczbowe z ankiety od studentów w czasie rzeczywistym.

## Options

* __question__ | `(string|node)`: pytanie, które ma zostać wyświetlone. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: kontroluje, czy ten sam użytkownik (lub sesja, jeśli jest anonimowy) może udzielić wielu odpowiedzi). Default: `false`.
* __anonymous__ | `boolean`: Pozwala studentom na anonimowe przekazywanie danych. Zauważ, że jeśli ta opcja jest ustawiona na "true", wówczas prowadzący nie będą mogli zobaczyć ID zgłaszającego się studenta.. Default: `false`.
* __step__ | `(number|string)`: Wartość `łańcucha` lub `numeryczna` wskazująca krok strzałek widziany podczas najeżdżania kursorem nad pole wprowadzania danych. Jeśli `'any'`, to krok zostanie ustawiony na `1`.. Default: `'any'`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onSubmit__ | `function`: funkcja wywołania zwrotnego, wywoływana po udzieleniu odpowiedzi przez studentów. Default: `onSubmit() {}`.


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

