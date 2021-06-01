---
id: order-question
title: Order Question
sidebar_label: Order Question
---

En komponent med spørgsmål om rækkefølge, der beder eleven om at bringe en samling elementer i den korrekte rækkefølge.

## Indstillinger

* __question__ | `(string|node)`: spørgsmål, hvor den studerende skal bringe de tilgængelige "valgmuligheder" i den rigtige rækkefølge. Default: `''`.
* __options__ | `array (required)`: en række tekster, som den studerende skal bringe i den korrekte rækkefølge (som antages at være den angivne rækkefølge). Default: `none`.
* __provideFeedback__ | `boolean`: styrer, om der skal vises en meddelelse, der viser, om det indsendte svar er korrekt eller ej. Default: `true`.
* __hintPlacement__ | `string`: placeringen af vejledningerne (enten "top", "venstre", "højre" eller "nederst"). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: tips, der giver vejledning om, hvordan spørgsmålet skal besvares. Default: `[]`.
* __feedback__ | `boolean`: styrer, om der skal vises feedback-knapper. Default: `true`.
* __chat__ | `boolean`: kontrollerer, om elementet skal have en integreret chat. Default: `false`.
* __failureMsg__ | `string`: meddelelse, der skal vises, når en elev afgiver et forkert svar. Default: `none`.
* __successMsg__ | `string`: meddelelse, der skal vises, når eleven afgiver det korrekte svar. Default: `none`.
* __disableSubmitNotification__ | `boolean`: kontrollerer, om meddelelser om indsendelse skal deaktiveres. Default: `false`.
* __until__ | `Date`: den tid, der skal gå, før de studerende kan afgive svar. Default: `none`.
* __points__ | `number`: det maksimale antal point, der kan tildeles ved bedømmelsen. Default: `10`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onChange__ | `function`: callback, der udløses efter at have trukket et element; har to parametre: en `boolean`, der angiver, om elementerne blev placeret i den korrekte rækkefølge, og et `array` med den aktuelle rækkefølge. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, der påkaldes, når svaret er indsendt; har som eneste parameter en `boolean`, der angiver, om elementerne blev placeret i den korrekte rækkefølge. Default: `onSubmit() {}`.


## Eksempler

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
