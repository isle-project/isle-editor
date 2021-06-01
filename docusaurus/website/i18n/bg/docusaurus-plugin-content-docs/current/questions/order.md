---
id: order-question
title: Order Question
sidebar_label: Order Question
---

Компонент с въпроси за подреждане, който изисква от ученика да подреди в правилен ред колекция от елементи.

## Опции

* __question__ | `(string|node)`: въпрос, при който ученикът трябва да подреди правилно наличните варианти.. Default: `''`.
* __options__ | `array (required)`: масив от текстове, които ученикът трябва да подреди правилно (предполага се, че това е предоставеният ред).. Default: `none`.
* __provideFeedback__ | `boolean`: контролира дали да се показва известие, показващо дали подаденият отговор е верен или не.. Default: `true`.
* __hintPlacement__ | `string`: разположение на подсказките (или `горе`, `ляво`, `дясно`, или `долу`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: подсказки, които дават насоки за това как да отговорите на въпроса. Default: `[]`.
* __feedback__ | `boolean`: контролира дали да се показват бутони за обратна връзка. Default: `true`.
* __chat__ | `boolean`: контролира дали елементът трябва да има интегриран чат. Default: `false`.
* __failureMsg__ | `string`: съобщение, което да се показва, когато ученикът подаде грешен отговор. Default: `none`.
* __successMsg__ | `string`: съобщение, което да се покаже, когато ученикът подаде правилния отговор. Default: `none`.
* __disableSubmitNotification__ | `boolean`: контролира дали да деактивира известията за подаване. Default: `false`.
* __until__ | `Date`: времето, до което учениците трябва да могат да подават отговори. Default: `none`.
* __points__ | `number`: максимален брой точки, присъждани при класирането. Default: `10`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onChange__ | `function`: обратно извикване, което се задейства след плъзгане на елемент; има два параметъра: `boolean`, показващ дали елементите са поставени в правилен ред, и `array` с текущата подредба. Default: `onChange() {}`.
* __onSubmit__ | `function`: обратна връзка, задействана при изпращане на отговора; единственият параметър е `boolean`, който показва дали елементите са поставени в правилен ред. Default: `onSubmit() {}`.


## Примери

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
