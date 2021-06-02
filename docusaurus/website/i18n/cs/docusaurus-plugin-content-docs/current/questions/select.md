---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

Složka vybraných otázek.

## Možnosti

* __question__ | `(string|node)`: otázka, u které musí student vybrat jednu z nabízených možností odpovědi.. Default: `''`.
* __options__ | `array (required)`: dostupné možnosti odpovědí, z nichž si student může vybrat. Default: `none`.
* __solution__ | `number`: index prvku řešení v `options`. Default: `none`.
* __preselected__ | `number`: index předvybrané možnosti odpovědi. Default: `0`.
* __inline__ | `boolean`: řídí, zda se komponenta vykreslí inline, nebo ne.. Default: `false`.
* __hintPlacement__ | `string`: umístění nápovědy (buď `nahoře`, `vlevo`, `vpravo`, nebo `dole`).. Default: `'top'`.
* __hints__ | `array<(string|node)>`: nápovědy, jak odpovědět na otázku.. Default: `[]`.
* __feedback__ | `boolean`: řídí, zda se mají zobrazovat tlačítka zpětné vazby. Default: `true`.
* __chat__ | `boolean`: řídí, zda má mít prvek integrovaný chat. Default: `false`.
* __provideFeedback__ | `boolean`: určuje, zda se má po odeslání odpovědi zobrazit zpětná vazba včetně správné odpovědi.. Default: `true`.
* __failureMsg__ | `string`: zpráva, která se zobrazí, když student vybere špatnou odpověď.. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: zpráva, která se zobrazí, když student vybere správnou odpověď.. Default: `'That's the correct answer!'`.
* __points__ | `number`: maximální počet bodů udělených při klasifikaci. Default: `10`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onChange__ | `function`: zpětné volání, které je spuštěno po akci odeslání.. Default: `onChange() {}`.
* __onSubmit__ | `function`: zpětné volání vyvolané po odeslání odpovědi; jako první parametr má `boolean` udávající, zda byla odpověď správně zodpovězena (pokud ano, jinak `null`), a jako druhý parametr zadanou odpověď.. Default: `onSubmit() {}`.


## Příklady

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
