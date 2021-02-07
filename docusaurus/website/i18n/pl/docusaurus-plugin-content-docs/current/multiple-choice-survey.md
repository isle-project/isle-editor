---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

Komponent ankiety, w którym prowadzący może w czasie rzeczywistym zbierać od studentów dane z ankiety wielokrotnego wyboru.

## Options

* __question__ | `(string|node)`: ciąg znaków wskazujący na pytanie, które należy zadać uczniom. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: kontroluje, czy chce się zezwolić uczniom na wielokrotne udzielanie odpowiedzi na ankietę. Default: `false`.
* __anonymous__ | `boolean`: kontroluje, czy odpowiedzi uczniów są anonimowe. Default: `false`.
* __answers__ | `array`: tablica wskazująca wybory odpowiedzi dla uczniów. Default: `[]`.
* __multipleAnswers__ | `boolean`: wskazuje, czy uczniowie mogą wybrać więcej niż jedną odpowiedź. Zwróć uwagę, że różni się to od allowMultipleAnswers tym, że pozwala to studentom na wielokrotne zadawanie pytań. Default: `false`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onSubmit__ | `function`: funkcja, która ma być wywołana po udzieleniu odpowiedzi. Default: `onSubmit() {}`.


## Examples

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

