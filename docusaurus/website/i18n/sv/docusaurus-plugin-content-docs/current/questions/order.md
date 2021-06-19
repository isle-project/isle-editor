---
id: order-question
title: Order Question
sidebar_label: Order Question
---

En komponent för ordningsfrågor som ber eleven att få en samling element i rätt ordning.

## Alternativ

* __question__ | `(string|node)`: Fråga där eleven måste sätta de tillgängliga alternativen i rätt ordning.. Default: `''`.
* __options__ | `array (required)`: En uppsättning texter som eleven ska ordna i rätt ordning (som antas vara den ordning som anges).. Default: `none`.
* __provideFeedback__ | `boolean`: styr om det ska visas ett meddelande om huruvida det inlämnade svaret är korrekt eller inte.. Default: `true`.
* __hintPlacement__ | `string`: placering av tipsen (antingen `top`, `left`, `right` eller `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: tips som ger vägledning om hur frågan ska besvaras. Default: `[]`.
* __feedback__ | `boolean`: kontrollerar om återkopplingsknapparna ska visas. Default: `true`.
* __chat__ | `boolean`: kontrollerar om elementet ska ha en integrerad chatt. Default: `false`.
* __failureMsg__ | `string`: Meddelande som ska visas när eleven lämnar in ett felaktigt svar.. Default: `none`.
* __successMsg__ | `string`: Meddelande som ska visas när eleven lämnar in rätt svar.. Default: `none`.
* __disableSubmitNotification__ | `boolean`: kontrollerar om anmälningar om inlämning ska inaktiveras. Default: `false`.
* __until__ | `Date`: tid fram till dess att eleverna ska få lämna in sina svar. Default: `none`.
* __points__ | `number`: Maximalt antal poäng som tilldelas vid betygsättning.. Default: `10`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onChange__ | `function`: callback som utlöses efter att ett element har dragits; har två parametrar: en `boolean` som anger om elementen placerades i rätt ordning och ett `array` med den aktuella ordningen.. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback som aktiveras när svaret har skickats in; har som enda parameter en "boolean" som anger om elementen har placerats i rätt ordning.. Default: `onSubmit() {}`.


## Exempel

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
