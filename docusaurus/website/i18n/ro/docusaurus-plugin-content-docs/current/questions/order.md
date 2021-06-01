---
id: order-question
title: Order Question
sidebar_label: Order Question
---

O componentă de întrebare de ordine care cere elevului să pună o colecție de elemente în ordinea corectă.

## Opțiuni

* __question__ | `(string|node)`: întrebare pentru care elevul trebuie să aducă `opțiunile` disponibile în ordinea corectă.. Default: `''`.
* __options__ | `array (required)`: o serie de texte pe care elevul trebuie să le pună în ordinea corectă (se presupune că este ordinea furnizată). Default: `none`.
* __provideFeedback__ | `boolean`: controlează dacă se afișează sau nu o notificare care să arate dacă răspunsul trimis este corect sau nu.. Default: `true`.
* __hintPlacement__ | `string`: plasarea indicilor (fie `top`, `left`, `right`, sau `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: indicii care oferă îndrumări privind modul de răspuns la întrebare. Default: `[]`.
* __feedback__ | `boolean`: controlează dacă se afișează butoanele de feedback. Default: `true`.
* __chat__ | `boolean`: controlează dacă elementul trebuie să aibă un chat integrat. Default: `false`.
* __failureMsg__ | `string`: mesajul care trebuie afișat atunci când elevul trimite un răspuns greșit. Default: `none`.
* __successMsg__ | `string`: mesajul care va fi afișat atunci când elevul trimite răspunsul corect. Default: `none`.
* __disableSubmitNotification__ | `boolean`: controlează dacă se dezactivează sau nu notificările de trimitere. Default: `false`.
* __until__ | `Date`: timpul până la care elevii ar trebui să fie lăsați să trimită răspunsurile. Default: `none`.
* __points__ | `number`: numărul maxim de puncte acordate în cadrul clasificării. Default: `10`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onChange__ | `function`: callback care este declanșat după ce se trage un element; are doi parametri: un `boolean` care indică dacă elementele au fost plasate în ordinea corectă și un `array` cu ordinea curentă. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback invocat la trimiterea răspunsului; are ca unic parametru un `boolean` care indică dacă elementele au fost plasate în ordinea corectă. Default: `onSubmit() {}`.


## Exemple

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
