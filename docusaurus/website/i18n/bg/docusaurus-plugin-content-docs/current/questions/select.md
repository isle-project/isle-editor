---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

Компонент за избор на въпрос.

## Опции

* __question__ | `(string|node)`: въпрос, за който ученикът трябва да избере една от наличните възможности за отговор.. Default: `''`.
* __options__ | `array (required)`: налични възможности за отговор, от които ученикът може да избере.. Default: `none`.
* __solution__ | `number`: индекс на елемента на решението в `options`. Default: `none`.
* __preselected__ | `number`: индекс на предварително избран вариант за отговор. Default: `0`.
* __inline__ | `boolean`: контролира дали компонентът да се визуализира inline или не.. Default: `false`.
* __hintPlacement__ | `string`: разположение на подсказките (или `top`, `right`, `left`, или `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: указания за това как да отговорите на въпроса. Default: `[]`.
* __feedback__ | `boolean`: контролира дали да се показват бутони за обратна връзка. Default: `true`.
* __chat__ | `boolean`: контролира дали елементът трябва да има интегриран чат. Default: `false`.
* __provideFeedback__ | `boolean`: посочва дали да се показва обратна връзка, включваща правилния отговор, след като обучаемите изпратят отговорите си.. Default: `true`.
* __failureMsg__ | `string`: съобщение, което да се показва, когато ученикът избере грешен отговор. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: съобщение, което да се покаже, когато ученикът избере правилния отговор. Default: `'That's the correct answer!'`.
* __points__ | `number`: максимален брой точки, присъждани при класирането. Default: `10`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onChange__ | `function`: обратна връзка, която се задейства след действието submit. Default: `onChange() {}`.
* __onSubmit__ | `function`: обратна връзка, задействана при подаване на отговор; първият параметър е `boolean`, показващ дали отговорът е бил верен (ако е приложимо, `null` в противен случай), а вторият параметър е подаденият отговор. Default: `onSubmit() {}`.


## Примери

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
