---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Pytanie z odpowiedzią składającą się z wielu pól wyboru.

## Options

* __question__ | `(string|node)`: pytanie, które ma być wyświetlane w górnej części matrycy pytań wybranych. Default: `''`.
* __rows__ | `array`: etykiety wierszy. Default: `[]`.
* __cols__ | `array`: etykiety kolumnowe. Default: `[]`.
* __options__ | `object`: obiekt z parami klucz-wartość z kluczami posiadającymi postać `row:col`, np. `0:0`, `0:1`, `1:0` itd., a odpowiadające im wartości są tablicami możliwych do wyboru odpowiedzi na poszczególne wybrane pytania. Default: `{}`.
* __solution__ | `object`: obiekt rozwiązania z parami klucz-wartość z kluczami o postaci `row:col`, np. `0:0`, `0:1`, `1:0` itd., a odpowiadające im wartości są indeksem prawidłowego elementu odpowiedzi z odpowiedniej tablicy `opcji. Default: `{}`.
* __hints__ | `array<(string|node)>`: podpowiedzi zawierające wskazówki, jak odpowiedzieć na pytanie. Default: `[]`.
* __hintPlacement__ | `string`: umieszczenie podpowiedzi (albo "na górze", "w lewo", "w prawo", albo "na dole"). Default: `'bottom'`.
* __feedback__ | `boolean`: kontroluje, czy mają być wyświetlane przyciski sprzężenia zwrotnego. Default: `true`.
* __provideFeedback__ | `string`: czy w ogóle przekazywać "żadne" informacje zwrotne, "indywidualne" informacje zwrotne dotyczące przedłożonych odpowiedzi, czy też "ogólne" informacje zwrotne dotyczące wszystkich pytań. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: czy zezwolić na składanie wniosków bez zaznaczenia w każdym polu wyboru. Default: `false`.
* __nTries__ | `number`: po ilu próbach nie są akceptowane żadne dalsze odpowiedzi (jeśli `provideFeedback` nie jest `żadna`).. Default: `1`.
* __failureMsg__ | `string`: tekst powiadomienia wyświetlany po udzieleniu błędnych odpowiedzi. Default: `none`.
* __successMsg__ | `string`: tekst powiadomienia wyświetlany po udzieleniu prawidłowych odpowiedzi. Default: `none`.
* __cellLabels__ | `object`: etykiety dla komórek zdefiniowanych przez obiekt o kluczach w formacie `row:col`.. Default: `{}`.
* __chat__ | `boolean`: kontroluje, czy dany element powinien mieć zintegrowaną rozmowę. Default: `false`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onSubmit__ | `function`: funkcja callback wywołana po przesłaniu odpowiedzi jako pierwsza i boolean wskazująca poprawność jako drugi parametr. Default: `onSubmit() {}`.


## Examples

```jsx live
<SelectQuestionMatrix
    rows={[ 'First Row' ]} 
    cols={[ 'First Column', 'Second Column' ]} 
    options={{ '0:0': [ 'Incorrect', 'Correct' ], '0:1':  [ 'Incorrect', 'Incorrect', 'Correct' ] }} 
    solution={{ '0:0': 1, '0:1': 2 }}
/>
```
