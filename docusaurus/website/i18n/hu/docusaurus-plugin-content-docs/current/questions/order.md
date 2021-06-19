---
id: order-question
title: Order Question
sidebar_label: Order Question
---

Egy sorrendkérdés-összetevő, amely arra kéri a tanulót, hogy az elemek gyűjteményét a helyes sorrendbe állítsa.

## Opciók

* __question__ | `(string|node)`: kérdés, amelyben a tanulónak a rendelkezésre álló "lehetőségeket" kell a helyes sorrendbe állítania.. Default: `''`.
* __options__ | `array (required)`: szövegek tömbje, amelyeket a tanulónak a helyes sorrendbe kell helyeznie (feltételezhetően a megadott sorrendben).. Default: `none`.
* __provideFeedback__ | `boolean`: szabályozza, hogy megjelenjen-e értesítés arról, hogy a beküldött válasz helyes-e vagy sem.. Default: `true`.
* __hintPlacement__ | `string`: a tippek elhelyezése (vagy `top`, `left`, `right`, vagy `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: a kérdés megválaszolására vonatkozó útmutatásokat ad. Default: `[]`.
* __feedback__ | `boolean`: szabályozza, hogy megjelenjenek-e a visszajelző gombok. Default: `true`.
* __chat__ | `boolean`: szabályozza, hogy az elemnek legyen-e integrált chatje. Default: `false`.
* __failureMsg__ | `string`: üzenet, amely akkor jelenik meg, ha a tanuló rossz választ ad be. Default: `none`.
* __successMsg__ | `string`: üzenet, amely megjelenik, amikor a tanuló elküldi a helyes választ. Default: `none`.
* __disableSubmitNotification__ | `boolean`: szabályozza a benyújtási értesítések letiltását. Default: `false`.
* __until__ | `Date`: a tanulóknak a válaszok benyújtásáig rendelkezésre álló idő. Default: `none`.
* __points__ | `number`: az osztályozás során adható maximális pontszám. Default: `10`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onChange__ | `function`: callback, amely egy elem áthúzása után lép működésbe; két paramétere van: egy `boolean`, amely jelzi, hogy az elemek a megfelelő sorrendben lettek-e elhelyezve, és egy `array` az aktuális sorrenddel.. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, amelyet a válasz elküldésekor hívnak meg; egyetlen paramétere egy "bóluszi", amely azt jelzi, hogy az elemek a helyes sorrendben lettek-e elhelyezve.. Default: `onSubmit() {}`.


## Példák

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
