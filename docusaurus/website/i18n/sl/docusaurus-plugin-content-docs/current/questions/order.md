---
id: order-question
title: Order Question
sidebar_label: Order Question
---

Sestavni del vprašanja o vrstnem redu, ki od učenca zahteva, da postavi zbirko elementov v pravilen vrstni red.

## Možnosti

* __question__ | `(string|node)`: vprašanje, pri katerem mora učenec pravilno razvrstiti razpoložljive možnosti.. Default: `''`.
* __options__ | `array (required)`: niz besedil, ki jih mora učenec razvrstiti v pravilnem vrstnem redu (domnevno v vrstnem redu, ki je bil predložen).. Default: `none`.
* __provideFeedback__ | `boolean`: nadzoruje, ali naj se prikaže obvestilo o tem, ali je predloženi odgovor pravilen ali ne.. Default: `true`.
* __hintPlacement__ | `string`: umestitev namigov (`top`, `left`, `right` ali `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: napotki, kako odgovoriti na vprašanje.. Default: `[]`.
* __feedback__ | `boolean`: nadzoruje, ali se prikažejo gumbi za povratne informacije.. Default: `true`.
* __chat__ | `boolean`: nadzoruje, ali naj ima element integriran klepet.. Default: `false`.
* __failureMsg__ | `string`: sporočilo, ki se prikaže, ko učenec odda napačen odgovor.. Default: `none`.
* __successMsg__ | `string`: sporočilo, ki se prikaže, ko učenec predloži pravilen odgovor.. Default: `none`.
* __disableSubmitNotification__ | `boolean`: nadzoruje, ali onemogočiti obvestila o predložitvi.. Default: `false`.
* __until__ | `Date`: čas, do katerega lahko učenci oddajo odgovore.. Default: `none`.
* __points__ | `number`: največje število točk, ki se dodelijo pri razvrščanju. Default: `10`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onChange__ | `function`: povratni klic, ki se sproži po vlečenju elementa; ima dva parametra: `boolean`, ki označuje, ali so bili elementi postavljeni v pravilnem vrstnem redu, in `array` s trenutnim vrstnim redom. Default: `onChange() {}`.
* __onSubmit__ | `function`: povratni klic, ki se sproži ob oddaji odgovora; edini parameter je `boolean`, ki označuje, ali so bili elementi postavljeni v pravilnem vrstnem redu. Default: `onSubmit() {}`.


## Primeri

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
