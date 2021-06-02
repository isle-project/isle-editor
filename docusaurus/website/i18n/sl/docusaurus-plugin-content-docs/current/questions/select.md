---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

Izbrana komponenta vprašanja.

## Možnosti

* __question__ | `(string|node)`: vprašanje, pri katerem mora učenec izbrati eno od razpoložljivih možnosti odgovora.. Default: `''`.
* __options__ | `array (required)`: razpoložljive možnosti odgovorov, med katerimi lahko učenec izbere. Default: `none`.
* __solution__ | `number`: indeks elementa rešitve v `options`. Default: `none`.
* __preselected__ | `number`: indeks vnaprej izbrane možnosti odgovora. Default: `0`.
* __inline__ | `boolean`: nadzoruje, ali se komponenta prikaže v vrstici ali ne.. Default: `false`.
* __hintPlacement__ | `string`: umestitev namigov (`zgoraj`, `levo`, `desno` ali `spodaj`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: napotki, kako odgovoriti na vprašanje.. Default: `[]`.
* __feedback__ | `boolean`: nadzoruje, ali se prikažejo gumbi za povratne informacije.. Default: `true`.
* __chat__ | `boolean`: nadzoruje, ali naj ima element integriran klepet.. Default: `false`.
* __provideFeedback__ | `boolean`: označuje, ali naj se po tem, ko učenci pošljejo svoje odgovore, prikaže povratna informacija, vključno s pravilnim odgovorom.. Default: `true`.
* __failureMsg__ | `string`: sporočilo, ki se prikaže, ko učenec izbere napačen odgovor.. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: sporočilo, ki se prikaže, ko učenec izbere pravilen odgovor.. Default: `'That's the correct answer!'`.
* __points__ | `number`: največje število točk, ki se dodelijo pri razvrščanju. Default: `10`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onChange__ | `function`: povratni klic, ki se sproži po akciji submit. Default: `onChange() {}`.
* __onSubmit__ | `function`: povratni klic, ki se sproži ob oddaji odgovora; kot prvi parameter ima `boolean`, ki označuje, ali je bil odgovor pravilen (če velja, sicer `null`), kot drugi parameter pa posredovani odgovor.. Default: `onSubmit() {}`.


## Primeri

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
