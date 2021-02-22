---
id: order-question
title: Order Question
sidebar_label: Order Question
---

Element pytania o porządek, który prosi ucznia o uporządkowanie zbioru elementów w odpowiedniej kolejności.

## Options

* __question__ | `(string|node)`: pytanie, na które student musi uporządkować dostępne `opcje` w odpowiedniej kolejności. Default: `''`.
* __options__ | `array (required)`: szereg tekstów, które student musi wnieść do właściwego zamówienia (zakładając, że jest to zamówienie dostarczone). Default: `none`.
* __provideFeedback__ | `boolean`: kontroluje, czy ma zostać wyświetlone powiadomienie informujące o tym, czy udzielona odpowiedź jest prawidłowa, czy też nie. Default: `true`.
* __hintPlacement__ | `string`: umieszczenie podpowiedzi (albo "na górze", "w lewo", "w prawo", albo "na dole"). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: podpowiedzi zawierające wskazówki, jak odpowiedzieć na pytanie. Default: `[]`.
* __feedback__ | `boolean`: kontroluje, czy mają być wyświetlane przyciski sprzężenia zwrotnego. Default: `true`.
* __chat__ | `boolean`: kontroluje, czy dany element powinien mieć zintegrowaną rozmowę. Default: `false`.
* __failureMsg__ | `string`: komunikat, który będzie wyświetlany, gdy student udzieli błędnej odpowiedzi. Default: `none`.
* __successMsg__ | `string`: komunikat, który będzie wyświetlany, gdy student udzieli poprawnej odpowiedzi. Default: `none`.
* __disableSubmitNotification__ | `boolean`: kontrola, czy należy wyłączyć powiadomienia o złożeniu wniosku. Default: `false`.
* __until__ | `Date`: czas, w którym studenci powinni mieć możliwość udzielenia odpowiedzi. Default: `none`.
* __points__ | `number`: maksymalna liczba punktów przyznawanych w poszczególnych klasach. Default: `10`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onChange__ | `function`: wywołanie zwrotne, które jest uruchamiane po przeciągnięciu elementu; ma dwa parametry: `boolean` wskazujący, czy elementy zostały umieszczone w odpowiedniej kolejności oraz `szeregowy` z aktualną kolejnością. Default: `onChange() {}`.
* __onSubmit__ | `function`: wywołanie zwrotne wywołane podczas udzielania odpowiedzi; ma jako jedyny parametr `boolean` wskazujący, czy elementy zostały umieszczone we właściwej kolejności. Default: `onSubmit() {}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Hints', value: 'hints' },
        { label: 'Submit Function', value: 'submitFunction' },
        { label: 'With Points and Feedback Message', value: 'withGradingAndFeedback' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
/>
```
</TabItem>

<TabItem value="hints">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
    hints={[ 'Delta succeeds Gamma in the Greek alphabet' ]}
    hintPlacement="bottom"
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "A",
        "G",
        "V"
    ]}
    onSubmit={() => {
        alert( 'Any JavaScript function could be executed here...' );
    }}
/>
```
</TabItem>

<TabItem value="withGradingAndFeedback">

```jsx live
<OrderQuestion
    question="Arrange the events in historical order"
    options={[
        "Napoleon's coronation as emperor",
        "The Crimean War",
        "Bombing of Hiroshima",
        "Fall of the Berlin Wall",
        "Donald Trump's inauguration",
    ]}
    points={10}
    successMsg = "Great! Looks like you are a history expert"
/>
```
</TabItem>

</Tabs>
