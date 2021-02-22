---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

Element pytania numerycznego.

## Opcje

* __question__ | `(string|node)`: pytanie numeryczne. Default: `''`.
* __hintPlacement__ | `string`: umieszczenie podpowiedzi (na górze, na dole, w lewo, w prawo lub na dole).. Default: `'top'`.
* __hints__ | `array<(string|node)>`: podpowiedzi zawierające wskazówki, jak odpowiedzieć na pytanie. Default: `[]`.
* __feedback__ | `boolean`: kontroluje, czy mają być wyświetlane przyciski sprzężenia zwrotnego. Default: `true`.
* __solution__ | `(number|array<number>)`: numeryczną odpowiedź na problem (lub kilka poprawnych odpowiedzi, jeśli dostarczona jest tablica). Default: `none`.
* __digits__ | `number`: liczba cyfr, dla których odpowiedź udzielona przez studenta musi odpowiadać rozwiązaniu, które ma być uznane za prawidłowe. Ustawić wartość 0, aby dopasować ją jako liczbę całkowitą. Jeśli zostanie ustawiona na zero, będzie szukał dokładnego dopasowania.. Default: `3`.
* __max__ | `number`: maksymalna dopuszczalna wartość wejściowa. Default: `null`.
* __min__ | `number`: minimalna dopuszczalna wartość wejściowa. Default: `null`.
* __defaultValue__ | `number`: wstępnie wybrana wartość wejścia liczbowego. Default: `0`.
* __provideFeedback__ | `boolean`: wskazuje, czy informacja zwrotna zawierająca poprawną odpowiedź powinna być wyświetlana po udzieleniu odpowiedzi przez uczących się. Default: `true`.
* __nTries__ | `number`: po tym, ile prób powinno być dostarczonych informacji zwrotnych (jeśli `provideFeedback` jest `prawdziwy`).. Default: `1`.
* __disableSubmitNotification__ | `boolean`: kontrola, czy należy wyłączyć powiadomienia o złożeniu wniosku. Default: `false`.
* __chat__ | `boolean`: kontroluje, czy dany element powinien mieć zintegrowaną rozmowę. Default: `false`.
* __until__ | `Date`: czas, w którym studenci powinni mieć możliwość udzielenia odpowiedzi. Default: `none`.
* __points__ | `number`: maksymalna liczba punktów przyznawanych w poszczególnych klasach. Default: `10`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onChange__ | `function`: wywołanie zwrotne, które jest wywoływane po zmianie wartości pola liczbowego; otrzymuje bieżącą wartość jako jedyny argument. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback wywoływany przy udzielaniu odpowiedzi; ma jako pierwszy parametr `boolean` wskazujący, czy odpowiedź została udzielona poprawnie (jeśli dotyczy, `nie ma znaczenia` inaczej), a udzielona odpowiedź jako drugi parametr. Default: `onSubmit() {}`.


## Przykłady

```jsx live
<NumberQuestion
    question="What is the number PI - three digits after the period"
    solution={3.142}
/>
```
