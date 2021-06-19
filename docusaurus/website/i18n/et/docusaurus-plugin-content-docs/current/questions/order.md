---
id: order-question
title: Order Question
sidebar_label: Order Question
---

Järjekorra küsimuste komponent, mis palub õpilasel viia elementide kogum õigesse järjekorda.

## Valikud

* __question__ | `(string|node)`: küsimus, mille puhul õpilane peab viima olemasolevad "valikud" õigesse järjekorda.. Default: `''`.
* __options__ | `array (required)`: tekstide massiivi, mille õpilane peab viima õigesse järjekorda (eeldatavasti on tegemist esitatud järjekorraga).. Default: `none`.
* __provideFeedback__ | `boolean`: kontrollib, kas näidata teadet, mis näitab, kas esitatud vastus on õige või mitte.. Default: `true`.
* __hintPlacement__ | `string`: vihjete paigutus (kas `top`, `left`, `right` või `bottom`).. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: vihjeid, mis annavad suuniseid küsimusele vastamiseks. Default: `[]`.
* __feedback__ | `boolean`: kontrollib, kas tagasiside nuppe kuvada. Default: `true`.
* __chat__ | `boolean`: kontrollib, kas elemendil peaks olema integreeritud vestlus. Default: `false`.
* __failureMsg__ | `string`: sõnum, mis kuvatakse, kui õpilane esitab vale vastuse. Default: `none`.
* __successMsg__ | `string`: sõnum, mis kuvatakse, kui õpilane esitab õige vastuse. Default: `none`.
* __disableSubmitNotification__ | `boolean`: kontrollib, kas keelata esitamisteated. Default: `false`.
* __until__ | `Date`: aega, kuni õpilastel peaks olema lubatud vastuseid esitada. Default: `none`.
* __points__ | `number`: hindamisel antavate punktide maksimaalne arv. Default: `10`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onChange__ | `function`: callback, mis käivitub pärast elemendi lohistamist; sellel on kaks parameetrit: `boolean`, mis näitab, kas elemendid on paigutatud õiges järjekorras, ja `array` praeguse järjekorraga.. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, mida kutsutakse üles, kui vastus on esitatud; ainsa parameetrina on "boolean", mis näitab, kas elemendid on paigutatud õiges järjekorras.. Default: `onSubmit() {}`.


## Näited

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
