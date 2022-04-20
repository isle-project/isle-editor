---
id: range-question
title: Range Question
sidebar_label: Range Question
---

Komponent pytania zakresowego, który prosi uczniów o podanie dolnego i górnego punktu końcowego.

## Opcje

* __question__ | `(string|node)`: wyświetlone pytanie. Default: `''`.
* __solution__ | `array<number>`: dwuelementowa macierz zawierająca punkty końcowe o odpowiednim zakresie. Default: `none`.
* __hintPlacement__ | `string`: umieszczenie podpowiedzi (na górze, na dole, w lewo, w prawo lub na dole). Default: `'top'`.
* __hints__ | `array<(string|node)>`: podpowiedzi zawierające wskazówki, jak odpowiedzieć na pytanie. Default: `[]`.
* __labels__ | `array`: dwuelementowa tablica niestandardowych etykiet innych niż "Niżej" i "Górna strona". Default: `none`.
* __feedback__ | `boolean`: kontroluje, czy mają być wyświetlane przyciski sprzężenia zwrotnego. Default: `true`.
* __chat__ | `boolean`: kontroluje, czy dany element powinien mieć zintegrowaną rozmowę. Default: `false`.
* __digits__ | `number`: liczba cyfr, które muszą się zgadzać między rozwiązaniem a odpowiedzią użytkownika. Jeśli nie została podana lub została ustawiona na zero, komponent sprawdza, czy istnieje ścisła równość. Jeśli jest ustawiona na 0, sprawdza równość liczb całkowitych. Default: `3`.
* __max__ | `number`: maksymalna wartość wejściowa. Default: `null`.
* __min__ | `number`: minimalna wartość wejściowa. Default: `null`.
* __provideFeedback__ | `boolean`: wskazuje, czy informacja zwrotna zawierająca poprawną odpowiedź powinna być wyświetlana po udzieleniu odpowiedzi przez uczących się. Default: `true`.
* __allowMultipleAnswers__ | `boolean`: kontroluje, czy można udzielić wielu odpowiedzi. Default: `false`.
* __until__ | `Date`: czas, w którym studenci powinni mieć możliwość udzielenia odpowiedzi. Default: `none`.
* __points__ | `number`: maksymalna liczba punktów przyznawanych w poszczególnych klasach. Default: `10`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onChangeLower__ | `function`: wywołanie zwrotne wywołane po zmianie dolnej granicy przez użytkownika. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: wywołanie zwrotne wywołane po zmianie górnej granicy przez użytkownika. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: wywołanie zwrotne wywoływane po zmianie ograniczenia przez użytkownika (z dolnym i górnym ograniczeniem jako argumentami). Default: `onChange() {}`.
* __onSubmit__ | `function`: callback wywoływany przy udzielaniu odpowiedzi; ma jako pierwszy parametr `boolean` wskazujący, czy odpowiedź została udzielona poprawnie (jeśli dotyczy, `nie ma znaczenia` inaczej), a udzielona odpowiedź jako drugi parametr. Default: `onSubmit() {}`.


## Przykłady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Points and Feedback', value: 'withPoints' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<RangeQuestion
    style={{ fontSize: 17, }}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withHints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
/>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<RangeQuestion
    style={{ fontFamily: 'Georgia', boxShadow: '0 0  10px darkblue'}}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withPoints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
    points={20}
    onSubmit={(res) => {
     if (res === true) {
      alert('Great, you have received 20 points');
     }
     else alert('sorry, this answer was wrong');
    }}
/>
```

</TabItem>

</Tabs>
