---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

Komponent ISLE dla pytań, na które odpowiedzi uczniów powinny być dostarczone w formie wolnego tekstu.

## Opcje

* __question__ | `(string|node)`: pytanie wyświetlane w górnej części komponentu pytań tekstowych. Default: `''`.
* __hints__ | `array<(string|node)>`: podpowiedzi zawierające wskazówki, jak odpowiedzieć na pytanie. Default: `[]`.
* __hintPlacement__ | `string`: umieszczenie podpowiedzi (albo `top`, `left`, `right`, albo `bottom`). Default: `'top'`.
* __feedback__ | `boolean`: kontroluje, czy mają być wyświetlane przyciski sprzężenia zwrotnego. Default: `true`.
* __solution__ | `(string|node)`: modelowa odpowiedź na problem. Default: `''`.
* __instantSolution__ | `boolean`: czy można od razu przełączyć wyświetlanie odpowiedzi modelu. Default: `false`.
* __rows__ | `number`: liczba wierszy pola tekstowego, w których uczniowie mogą wpisywać swoje odpowiedzi. Default: `5`.
* __chat__ | `boolean`: kontroluje, czy włączyć czat grupowy powinien w przypadku danego pytania. Default: `false`.
* __resizable__ | `boolean`: kontroluje, czy obszar tekstowy powinien mieć możliwość zmiany rozmiaru. Default: `false`.
* __placeholder__ | `string`: tekst zastępczy wyświetlany przed wprowadzeniem dowolnego tekstu przez użytkownika. Default: `''`.
* __disableSubmitNotification__ | `boolean`: kontrola, czy należy wyłączyć powiadomienia o złożeniu wniosku. Default: `false`.
* __submissionMsg__ | `string`: powiadomienie wyświetlane w momencie, gdy uczący się po raz pierwszy przekazuje swoją odpowiedź. Default: `''`.
* __resubmissionMsg__ | `string`: powiadomienie wyświetlane dla wszystkich zgłoszeń po pierwszym. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: wskazuje, czy informacja zwrotna zawierająca poprawną odpowiedź powinna być wyświetlana po udzieleniu odpowiedzi przez uczących się. Default: `true`.
* __maxlength__ | `number`: maksymalna dozwolona liczba znaków. Default: `2500`.
* __until__ | `Date`: czas, w którym studenci powinni mieć możliwość udzielenia odpowiedzi. Default: `none`.
* __points__ | `number`: maksymalna liczba punktów przyznawanych w poszczególnych klasach. Default: `10`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onChange__ | `function`: wywołanie zwrotne wywoływane przy każdej zmianie wartości obszaru tekstowego; otrzymuje aktualny tekst jako jedyny argument. Default: `onChange() {}`.
* __onSubmit__ | `function`: wywołanie zwrotne, gdy użytkownik udziela odpowiedzi; otrzymuje nadesłany tekst jako jedyny argument. Default: `onSubmit() {}`.


## Przykłady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Points for Grading', value: 'withPointsForGrading' },
        { label: 'No Feedback', value: 'withoutFeedbackAndNotification' },
        { label: 'Solution', value: 'withSolution' },
        { label: 'Hints', value: 'withHints' },
        { label: 'Placeholder', value: 'placeholderText' },
        { label: 'Due Date', value: 'dueDate' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3} 
/>
```
</TabItem>

<TabItem value="withPointsForGrading" >

```jsx live
<FreeTextQuestion 
    question={<span>Can you please explain Montesquieu's System of *separation of powers*?</span>} 
    rows={3} 
    points={15}
/>
```

</TabItem>

<TabItem value="withoutFeedbackAndNotification" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3}
    disableSubmitNotification 
    feedback={false}
/>
```

</TabItem>

<TabItem value="withSolution" > 

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={1} 
    solution="Winston Churchill" 
/>
```

</TabItem>

<TabItem value="withHints" >

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={1} 
    solution="Winston Churchill" 
    hints = {["No, it was not Margret Thatcher", "He believed in Aliens by the way", "His first name was Winston - like the guy in 1984"]}
    submissionMsg = "His name was Winston churchill, and it occurred in a speech given by him to the House of Commons of the Parliament of the United Kingdom on 13 May 1940. The speech is sometimes known by that name"
/>
```

</TabItem>

<TabItem value="placeholderText" >

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={3} 
    solution="Winston Churchill" 
    placeholder="Think of an overweight politician with a big cigar in his mouth."
/>
```

</TabItem>

<TabItem value="dueDate" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3} 
    until={new Date( Date.UTC(2029, 0, 1, 3, 33 ) )}
    placeholder="You can set a date until answers are accepted. In this case it is 2020, 1st of January, 3:30 am UTC time."
/>
```

</TabItem>

</Tabs>
