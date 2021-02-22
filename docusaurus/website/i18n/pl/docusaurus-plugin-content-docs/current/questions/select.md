---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

Komponent wyboru pytania.

## Options

* __question__ | `(string|node)`: pytanie, na które student musi wybrać jedną z dostępnych opcji odpowiedzi. Default: `''`.
* __options__ | `array (required)`: dostępne opcje odpowiedzi, z których student może wybrać. Default: `none`.
* __solution__ | `number (required)`: indeks elementu rozwiązania w `opcjach`. Default: `none`.
* __preselected__ | `number`: indeks wstępnie wybranej opcji odpowiedzi. Default: `0`.
* __inline__ | `boolean`: kontroluje, czy element jest renderowany w linii, czy nie. Default: `false`.
* __hintPlacement__ | `string`: umieszczenie podpowiedzi (na górze, na dole, w lewo, w prawo lub na dole).. Default: `'top'`.
* __hints__ | `array<(string|node)>`: podpowiedzi zawierające wskazówki, jak odpowiedzieć na pytanie. Default: `[]`.
* __feedback__ | `boolean`: kontroluje, czy mają być wyświetlane przyciski sprzężenia zwrotnego. Default: `true`.
* __chat__ | `boolean`: kontroluje, czy dany element powinien mieć zintegrowaną rozmowę. Default: `false`.
* __provideFeedback__ | `boolean`: wskazuje, czy informacja zwrotna zawierająca poprawną odpowiedź powinna być wyświetlana po udzieleniu odpowiedzi przez uczących się. Default: `true`.
* __failureMsg__ | `string`: komunikat, który będzie wyświetlany, gdy student wybierze błędną odpowiedź. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: komunikat, który będzie wyświetlany, gdy student wybierze prawidłową odpowiedź. Default: `'That's the correct answer!'`.
* __points__ | `number`: maksymalna liczba punktów przyznawanych w poszczególnych klasach. Default: `10`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onChange__ | `function`: wywołanie zwrotne, które jest uruchamiane po przedłożeniu działania. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback wywoływany przy udzielaniu odpowiedzi; ma jako pierwszy parametr `boolean` wskazujący, czy odpowiedź została udzielona poprawnie (jeśli dotyczy, `nie ma znaczenia` inaczej), a udzielona odpowiedź jako drugi parametr. Default: `onSubmit() {}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Inline', value: 'inline' },
        { label: 'With Hints', value: 'with Hints' },
        { label: 'Submit Function Hints', value: 'submitFunction' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    style={{ background: 'gainsboro', boxShadow: '0 0 10px black'}}
/>
```
</TabItem>

<TabItem value="inline">

```jsx live
The usual t-test is:
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    inline
/> ... so you can us it in the midst of a longer paragraph
```
</TabItem>

<TabItem value="withHints">

```jsx live
<SelectQuestion
    question="White is "
    solution={2}
    options={[
        'a primary color',
        'not a primary color'
    ]}
    hints={[ "There are 3 primary colors", "Red is a primary color", "and so is yellow" ]}
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<SelectQuestion
    question="Select the primary color"
    solution={2}
    options={[
        'orange',
        'white',
        'red'
    ]}
    onSubmit={(result) => {
        switch ( result ) {
            case 'orange':
                alert( 'No, orange is a mix of yellow and red.' );
            break;
            case 'white':
                alert( 'White does not count as a color.' );
            break;
            case 'red':
                alert( 'That is correct.' );
            break;
        }
    }}
    provideFeedback={false}
/> 
```
</TabItem>

</Tabs>
