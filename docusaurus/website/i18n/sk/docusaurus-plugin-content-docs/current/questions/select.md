---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

Zložka vybraných otázok.

## Možnosti

* __question__ | `(string|node)`: otázka, na ktorú musí študent vybrať jednu z dostupných možností odpovede.. Default: `''`.
* __options__ | `array (required)`: dostupné možnosti odpovedí, z ktorých si študent môže vybrať. Default: `none`.
* __solution__ | `number`: index prvku riešenia v `options`. Default: `none`.
* __preselected__ | `number`: index vopred vybranej možnosti odpovede. Default: `0`.
* __inline__ | `boolean`: riadi, či sa má komponent vykresľovať inline alebo nie.. Default: `false`.
* __hintPlacement__ | `string`: umiestnenie nápovedy (buď `hore`, `vľavo`, `vpravo` alebo `spodku`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: nápovedy, ktoré poskytujú návod, ako odpovedať na otázku. Default: `[]`.
* __feedback__ | `boolean`: ovláda, či sa majú zobrazovať tlačidlá spätnej väzby.. Default: `true`.
* __chat__ | `boolean`: kontroluje, či má mať prvok integrovaný chat. Default: `false`.
* __provideFeedback__ | `boolean`: označuje, či sa má po odoslaní odpovede žiakom zobraziť spätná väzba vrátane správnej odpovede.. Default: `true`.
* __failureMsg__ | `string`: správa, ktorá sa zobrazí, keď študent vyberie nesprávnu odpoveď. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: správa, ktorá sa zobrazí, keď študent vyberie správnu odpoveď. Default: `'That's the correct answer!'`.
* __points__ | `number`: maximálny počet bodov udelených pri klasifikácii. Default: `10`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onChange__ | `function`: spätné volanie, ktoré sa spustí po akcii odoslať. Default: `onChange() {}`.
* __onSubmit__ | `function`: spätné volanie vyvolané po odoslaní odpovede; ako prvý parameter má `boolean` označujúci, či bola odpoveď správne zodpovedaná (ak je to možné, inak `null`), a ako druhý parameter zadanú odpoveď. Default: `onSubmit() {}`.


## Príklady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Inline', value: 'inline' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'Submit Function Hints', value: 'submitFunction' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    style={{ background: 'gainsboro', boxShadow: '0 0 10px black'}}
/>
```
</TabItem>

<TabItem value="inline">

```jsx live
The usual t-test is:
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    inline
/> ... so you can us it in the midst of a longer paragraph
```
</TabItem>

<TabItem value="withHints">

```jsx live
<SelectQuestion
    question="White is "
    solution={1}
    options={[
        'a primary color',
        'not a primary color'
    ]}
    hints={[ "There are 3 primary colors", "Red is a primary color", "and so is yellow" ]}
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<SelectQuestion
    question="Select the primary color"
    solution={2}
    options={[
        'orange',
        'white',
        'red'
    ]}
    onSubmit={(result) => {
        switch ( result ) {
            case 'orange':
                alert( 'No, orange is a mix of yellow and red.' );
            break;
            case 'white':
                alert( 'White does not count as a color.' );
            break;
            case 'red':
                alert( 'That is correct.' );
            break;
        }
    }}
    provideFeedback={false}
/> 
```
</TabItem>

</Tabs>
