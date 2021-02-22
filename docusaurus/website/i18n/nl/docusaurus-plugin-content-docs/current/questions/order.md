---
id: order-question
title: Order Question
sidebar_label: Order Question
---

Een bestelvraagcomponent die de student vraagt om een verzameling elementen in de juiste volgorde te brengen.

## Options

* __question__ | `(string|node)`: vraag waarvoor de student de beschikbare `opties` in de juiste volgorde moet brengen. Default: `''`.
* __options__ | `array (required)`: een reeks teksten die de student in de juiste volgorde moet brengen (verondersteld wordt de geleverde bestelling te zijn). Default: `none`.
* __provideFeedback__ | `boolean`: controleert of een kennisgeving wordt weergegeven met of het ingediende antwoord al dan niet correct is. Default: `true`.
* __hintPlacement__ | `string`: plaatsing van de hints (ofwel `top`, `left`, `right`, of `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: tips die een leidraad bieden voor het beantwoorden van de vraag. Default: `[]`.
* __feedback__ | `boolean`: regelt of er terugmeldingsknoppen moeten worden weergegeven. Default: `true`.
* __chat__ | `boolean`: bepaalt of het element een geïntegreerde chat moet hebben. Default: `false`.
* __failureMsg__ | `string`: bericht dat moet worden weergegeven wanneer de leerling een verkeerd antwoord indient. Default: `none`.
* __successMsg__ | `string`: bericht dat moet worden weergegeven wanneer de leerling het juiste antwoord indient. Default: `none`.
* __disableSubmitNotification__ | `boolean`: controleert of de aanmeldingskennisgevingen moeten worden uitgeschakeld. Default: `false`.
* __until__ | `Date`: tijd tot de studenten de gelegenheid krijgen om antwoorden in te dienen. Default: `none`.
* __points__ | `number`: maximumaantal punten voor de indeling in klassen. Default: `10`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onChange__ | `function`: callback die wordt geactiveerd na het slepen van een element; heeft twee parameters: een `boolean` die aangeeft of de elementen in de juiste volgorde zijn geplaatst en `array` met de huidige volgorde. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback ingeroepen bij het indienen van een antwoord; heeft als enige parameter een `boolean` die aangeeft of de elementen in de juiste volgorde zijn geplaatst. Default: `onSubmit() {}`.


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
