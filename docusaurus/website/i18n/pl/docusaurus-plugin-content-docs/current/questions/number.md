---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

Element pytania numerycznego.

## Opcje

* __question__ | `(string|node)`: pytanie numeryczne. Default: `''`.
* __hintPlacement__ | `string`: umieszczenie podpowiedzi (na górze, na dole, w lewo, w prawo lub na dole). Default: `'top'`.
* __hints__ | `array<(string|node)>`: podpowiedzi zawierające wskazówki, jak odpowiedzieć na pytanie. Default: `[]`.
* __feedback__ | `boolean`: kontroluje, czy mają być wyświetlane przyciski sprzężenia zwrotnego. Default: `true`.
* __solution__ | `(number|array<number>)`: numeryczną odpowiedź na problem (lub kilka poprawnych odpowiedzi, jeśli dostarczona jest tablica). Default: `none`.
* __digits__ | `number`: liczba cyfr, dla których odpowiedź podana przez ucznia musi być zgodna z rozwiązaniem, aby została uznana za poprawną. Ustaw na 0, aby dopasować jako liczbę całkowitą. Jeśli ustawione na null, będzie szukało dokładnego dopasowania. Default: `3`.
* __max__ | `number`: maksymalna dopuszczalna wartość wejściowa. Default: `null`.
* __min__ | `number`: minimalna dopuszczalna wartość wejściowa. Default: `null`.
* __defaultValue__ | `number`: wstępnie wybrana wartość wejścia liczbowego. Default: `none`.
* __provideFeedback__ | `boolean`: wskazuje, czy informacja zwrotna zawierająca poprawną odpowiedź powinna być wyświetlana po udzieleniu odpowiedzi przez uczących się. Default: `true`.
* __submitAfterFeedback__ | `boolean`: kontroluje, czy osoba powinna mieć możliwość ponownego wysłania zgłoszenia nawet po ujawnieniu rozwiązania. Default: `false`.
* __nTries__ | `number`: po tym, ile prób powinno być dostarczonych informacji zwrotnych (jeśli `provideFeedback` jest `prawdziwy`). Default: `1`.
* __disableSubmitNotification__ | `boolean`: kontrola, czy należy wyłączyć powiadomienia o złożeniu wniosku. Default: `false`.
* __chat__ | `boolean`: kontroluje, czy dany element powinien mieć zintegrowaną rozmowę. Default: `false`.
* __until__ | `Date`: czas, w którym studenci powinni mieć możliwość udzielenia odpowiedzi. Default: `none`.
* __points__ | `number`: maksymalna liczba punktów przyznawanych w poszczególnych klasach. Default: `10`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onChange__ | `function`: wywołanie zwrotne, które jest wywoływane po zmianie wartości pola liczbowego; otrzymuje bieżącą wartość jako jedyny argument. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback wywoływany przy udzielaniu odpowiedzi; ma jako pierwszy parametr `boolean` wskazujący, czy odpowiedź została udzielona poprawnie (jeśli dotyczy, `nie ma znaczenia` inaczej), a udzielona odpowiedź jako drugi parametr. Default: `onSubmit() {}`.


## Przykłady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'markdownStyling' },
        { label: 'With CSS', value: 'withCSS' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<NumberQuestion
    question="What is the number Pi? (include at least three digits after the decimal point)"
    solution={3.142}
/>
```
</TabItem>

<TabItem value="markdownStyling">

```jsx live
<NumberQuestion
    question={<span>What is the number $\pi$? (include at least _three_ digits after the decimal point)</span>}
    solution={3.142}
/>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<NumberQuestion
    question={<span style={{ fontSize: 25, color: 'darkorange'}}>What is the number PI - three digits after the period</span>}
    solution={3.142}
/>
```
</TabItem>

</Tabs>
