---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

Izvēlētā jautājuma komponents.

## Iespējas

* __question__ | `(string|node)`: jautājums, kurā skolēnam jāizvēlas viens no pieejamajiem atbilžu variantiem.. Default: `''`.
* __options__ | `array (required)`: pieejamie atbilžu varianti, no kuriem skolēns var izvēlēties. Default: `none`.
* __solution__ | `number`: risinājuma elementa indekss `options`. Default: `none`.
* __preselected__ | `number`: iepriekš izvēlētās atbildes iespējas indekss. Default: `0`.
* __inline__ | `boolean`: kontrolē, vai komponents tiek attēlots inline vai nē.. Default: `false`.
* __hintPlacement__ | `string`: mājienu izvietojums (`augšā`, `kreisajā`, `pa labi` vai `apakšā`).. Default: `'top'`.
* __hints__ | `array<(string|node)>`: norādījumi, kā atbildēt uz jautājumu.. Default: `[]`.
* __feedback__ | `boolean`: kontrolē, vai tiek rādītas atgriezeniskās saites pogas.. Default: `true`.
* __chat__ | `boolean`: kontrolē, vai elementam ir jābūt integrētam tērzēšanas. Default: `false`.
* __provideFeedback__ | `boolean`: norāda, vai pēc tam, kad izglītojamie ir iesnieguši atbildes, ir jānorāda atgriezeniskā saite, tostarp pareizā atbilde.. Default: `true`.
* __failureMsg__ | `string`: ziņojums, kas tiks parādīts, kad skolēns izvēlēsies nepareizu atbildi.. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: ziņojums, kas tiks parādīts, kad skolēns izvēlēsies pareizo atbildi.. Default: `'That's the correct answer!'`.
* __points__ | `number`: maksimālais punktu skaits, ko piešķir klasifikācijā. Default: `10`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onChange__ | `function`: atgriezeniskais zvans, kas tiek aktivizēts pēc darbības submit.. Default: `onChange() {}`.
* __onSubmit__ | `function`: atgriezeniskais zvans, kas tiek izsaukts, kad atbilde ir iesniegta; pirmais parametrs ir `boolean`, kas norāda, vai atbilde ir pareiza (ja ir, citādi `null`), bet otrais parametrs ir sniegtā atbilde.. Default: `onSubmit() {}`.


## Piemēri

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Inline', value: 'inline' },
        { label: 'With Hints', value: 'with Hints' },
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
