---
id: match-list-question 
title: Match List Question
sidebar_label: Match List Question
---

Komponent ISLE, który sprawia, że pytanie, w którym uczący się musi we właściwy sposób dopasować elementy z dwóch list do siebie.

## Opcje

* __question__ | `(string|node)`: pytanie, które ma być wyświetlane na górze elementu listy pytań ofertowych. Default: `''`.
* __elements__ | `array<{a,b}>`: `rówka` trzymająca właściwe pary wyświetlana na górze komponentu pytania swobodnego tekstu. Każdy `arrada` musi być obiektem` z właściwościami `a` i `b`; dostarcza elementy tylko z właściwościami `a` lub `b` aby dodać odpowiedzi rozpraszające. Default: `[]`.
* __hintPlacement__ | `string`: umieszczenie podpowiedzi (albo `top`, `left`, `right`, albo `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: podpowiedzi zawierające wskazówki, jak odpowiedzieć na pytanie. Default: `[]`.
* __provideFeedback__ | `boolean`: wskazuje, czy rozwiązanie powinno być dostępne po udzieleniu odpowiedzi przez uczących się. Default: `true`.
* __feedback__ | `boolean`: kontroluje, czy mają być wyświetlane przyciski sprzężenia zwrotnego. Default: `true`.
* __chat__ | `boolean`: kontroluje, czy dany element powinien mieć zintegrowaną rozmowę. Default: `false`.
* __colorScale__ | `array`: jeśli są ustawione, dołączone kolory są używane do płytek. Default: `none`.
* __shuffle__ | `string`: określa, czy tasować `lewe`, `prawe` lub `obu` kolumny, których elementy mają być dopasowane; podaj `none` lub inną wartość, aby nie tasować elementów po obu stronach (może być przydatne w przypadku, gdy nie ma rozwiązania). Default: `'both'`.
* __disableSubmitNotification__ | `boolean`: kontrola, czy należy wyłączyć powiadomienia o złożeniu wniosku. Default: `false`.
* __submissionMsg__ | `string`: powiadomienie wyświetlane w momencie, gdy uczący się po raz pierwszy przekazuje swoją odpowiedź. Default: `'You have successfully submitted your answer.'`.
* __resubmissionMsg__ | `string`: powiadomienie wyświetlane dla wszystkich zgłoszeń po pierwszym. Default: `'You have successfully re-submitted your answer.'`.
* __until__ | `Date`: czas, w którym studenci powinni mieć możliwość udzielenia odpowiedzi. Default: `none`.
* __points__ | `number`: maksymalna liczba punktów przyznawanych w poszczególnych klasach. Default: `10`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onChange__ | `function`: callback wywoływany, gdy uczniowie zmieniają odpowiedź. Default: `onChange() {}`.
* __onSubmit__ | `function`: wywołanie zwrotne, gdy uczniowie udzielają odpowiedzi. Default: `onSubmit() {}`.


## Przykłady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'withMarkdown' },
        { label: 'With Solution & Style', value: 'withFeedback' },
        { label: 'Shuffle Right', value: 'shuffleRight' },
        { label: 'Points for Grading', value: 'grading' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    elements={[
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { a: 'Ar', b: 'Argon' },
        { a: 'Ac' , b: 'Actinium'},
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
    provideFeedback={false}
/>
```
</TabItem>

<TabItem value="withMarkdown">

```jsx live
<MatchListQuestion
    question={<span>Please match the **symbols** and the respective *chemical* element.</span>}
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="withFeedback">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="shuffleRight">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Carl Friedrich', b: 'Gauß' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Francis', b: 'Galton' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'Ronald', b: 'Fisher' }
    ]}
    shuffle="right"
/>
```
</TabItem>

<TabItem value="grading">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Ronald', b: 'Fisher' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Francis', b: 'Galton' },
        { a: 'Carl Friedrich', b: 'Gauß' }
    ]}
    points={20}
/>
```
</TabItem>

</Tabs>
