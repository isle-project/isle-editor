---
id: order-question
title: Order Question
sidebar_label: Order Question
---

Klausimo apie tvarką komponentas, kuriame mokinys turi teisingai sudėlioti elementų rinkinį.

## Parinktys

* __question__ | `(string|node)`: klausimas, kuriame mokinys turi teisingai sudėlioti galimus variantus.. Default: `''`.
* __options__ | `array (required)`: tekstų masyvas, kurį mokinys turi surikiuoti teisinga tvarka (manoma, kad tai bus pateikta tvarka).. Default: `none`.
* __provideFeedback__ | `boolean`: kontroliuoja, ar rodyti pranešimą, ar pateiktas atsakymas yra teisingas, ar ne.. Default: `true`.
* __hintPlacement__ | `string`: užuominų vieta (`top`, `left`, `right` arba `bottom`).. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: užuominos, kuriose pateikiamos rekomendacijos, kaip atsakyti į klausimą.. Default: `[]`.
* __feedback__ | `boolean`: kontroliuoja, ar rodyti grįžtamojo ryšio mygtukus.. Default: `true`.
* __chat__ | `boolean`: kontroliuoja, ar elementas turi turėti integruotą pokalbių. Default: `false`.
* __failureMsg__ | `string`: pranešimas, rodomas mokiniui pateikus neteisingą atsakymą.. Default: `none`.
* __successMsg__ | `string`: pranešimas, kuris bus rodomas, kai mokinys pateiks teisingą atsakymą.. Default: `none`.
* __disableSubmitNotification__ | `boolean`: kontroliuoja, ar išjungti pranešimus apie pateikimą.. Default: `false`.
* __until__ | `Date`: laikas, per kurį mokiniams turėtų būti leista pateikti atsakymus.. Default: `none`.
* __points__ | `number`: maksimalus balų skaičius, suteikiamas vertinant. Default: `10`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onChange__ | `function`: grįžtamasis skambutis, kuris paleidžiamas po elemento vilkimo; turi du parametrus: `boolean`, nurodantį, ar elementai buvo išdėstyti tinkama tvarka, ir `array` su esama tvarka.. Default: `onChange() {}`.
* __onSubmit__ | `function`: grįžtamasis skambutis, inicijuojamas pateikus atsakymą; vienintelis parametras - `boolean`, nurodantis, ar elementai buvo išdėstyti teisinga tvarka.. Default: `onSubmit() {}`.


## Pavyzdžiai

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
