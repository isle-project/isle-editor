---
id: order-question
title: Order Question
sidebar_label: Order Question
---

Komponenta s otázkami na pořadí, která žádá studenta, aby seřadil kolekci prvků do správného pořadí.

## Možnosti

* __question__ | `(string|node)`: otázka, u které musí student seřadit dostupné možnosti do správného pořadí.. Default: `''`.
* __options__ | `array (required)`: pole textů, které má student seřadit do správného pořadí (předpokládá se, že jde o dodané pořadí).. Default: `none`.
* __provideFeedback__ | `boolean`: řídí, zda se má zobrazit oznámení o tom, zda je odeslaná odpověď správná, nebo ne.. Default: `true`.
* __hintPlacement__ | `string`: umístění nápovědy (buď `top`, `left`, `right`, nebo `bottom`).. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: nápovědy, jak odpovědět na otázku.. Default: `[]`.
* __feedback__ | `boolean`: řídí, zda se mají zobrazovat tlačítka zpětné vazby. Default: `true`.
* __chat__ | `boolean`: řídí, zda má mít prvek integrovaný chat. Default: `false`.
* __failureMsg__ | `string`: zpráva, která se zobrazí, když student odešle špatnou odpověď.. Default: `none`.
* __successMsg__ | `string`: zpráva, která se zobrazí, když student odešle správnou odpověď.. Default: `none`.
* __disableSubmitNotification__ | `boolean`: kontroluje, zda se mají vypnout oznámení o odeslání. Default: `false`.
* __until__ | `Date`: čas, do kdy by studenti měli mít možnost odevzdat odpovědi. Default: `none`.
* __points__ | `number`: maximální počet bodů udělených při klasifikaci. Default: `10`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onChange__ | `function`: zpětné volání, které se spustí po přetažení prvku; má dva parametry: `boolean`, který udává, zda byly prvky umístěny ve správném pořadí, a `array` s aktuálním pořadím.. Default: `onChange() {}`.
* __onSubmit__ | `function`: zpětné volání vyvolané při odeslání odpovědi; jako jediný parametr má `boolean`, který udává, zda byly prvky umístěny ve správném pořadí.. Default: `onSubmit() {}`.


## Příklady

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
