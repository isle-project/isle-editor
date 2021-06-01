---
id: order-question
title: Order Question
sidebar_label: Order Question
---

Komponent s otázkami o poradí, ktorý od študenta vyžaduje, aby usporiadal zbierku prvkov do správneho poradia.

## Možnosti

* __question__ | `(string|node)`: otázka, pri ktorej musí študent zoradiť dostupné možnosti do správneho poradia. Default: `''`.
* __options__ | `array (required)`: pole textov, ktoré má študent zoradiť v správnom poradí (predpokladá sa, že v dodanom poradí). Default: `none`.
* __provideFeedback__ | `boolean`: ovláda, či sa má zobraziť oznámenie o tom, či je odoslaná odpoveď správna alebo nie.. Default: `true`.
* __hintPlacement__ | `string`: umiestnenie nápovedy (buď `hore`, `vľavo`, `vpravo` alebo `spodku`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: nápovedy, ktoré poskytujú návod, ako odpovedať na otázku. Default: `[]`.
* __feedback__ | `boolean`: ovláda, či sa majú zobrazovať tlačidlá spätnej väzby.. Default: `true`.
* __chat__ | `boolean`: kontroluje, či má mať prvok integrovaný chat. Default: `false`.
* __failureMsg__ | `string`: správa, ktorá sa zobrazí, keď študent odošle nesprávnu odpoveď. Default: `none`.
* __successMsg__ | `string`: správa, ktorá sa zobrazí, keď študent odošle správnu odpoveď. Default: `none`.
* __disableSubmitNotification__ | `boolean`: kontroluje, či sa majú vypnúť oznámenia o odoslaní.. Default: `false`.
* __until__ | `Date`: čas, dokedy by študenti mali mať možnosť predložiť odpovede.. Default: `none`.
* __points__ | `number`: maximálny počet bodov udelených pri klasifikácii. Default: `10`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onChange__ | `function`: spätné volanie, ktoré sa spustí po pretiahnutí prvku; má dva parametre: `boolean`, ktorý udáva, či boli prvky umiestnené v správnom poradí, a `array` s aktuálnym poradím. Default: `onChange() {}`.
* __onSubmit__ | `function`: spätné volanie vyvolané po odoslaní odpovede; ako jediný parameter má `boolean`, ktorý udáva, či boli prvky umiestnené v správnom poradí. Default: `onSubmit() {}`.


## Príklady

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
