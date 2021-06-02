---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

En komponent för utvalda frågor.

## Alternativ

* __question__ | `(string|node)`: En fråga där studenten måste välja ett av de tillgängliga svarsalternativen.. Default: `''`.
* __options__ | `array (required)`: tillgängliga svarsalternativ som studenten kan välja mellan. Default: `none`.
* __solution__ | `number`: index för lösningselementet i `options`.. Default: `none`.
* __preselected__ | `number`: index för förvalda svarsalternativ. Default: `0`.
* __inline__ | `boolean`: kontrollerar om komponenten ska återges inline eller inte. Default: `false`.
* __hintPlacement__ | `string`: placering av tipsen (antingen "topp", "vänster", "höger" eller "botten"). Default: `'top'`.
* __hints__ | `array<(string|node)>`: tips som ger vägledning om hur frågan ska besvaras. Default: `[]`.
* __feedback__ | `boolean`: kontrollerar om återkopplingsknapparna ska visas. Default: `true`.
* __chat__ | `boolean`: kontrollerar om elementet ska ha en integrerad chatt. Default: `false`.
* __provideFeedback__ | `boolean`: anger om återkoppling, inklusive det rätta svaret, ska visas efter att eleverna skickat in sina svar.. Default: `true`.
* __failureMsg__ | `string`: Meddelande som ska visas när eleven väljer fel svar.. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: Meddelande som ska visas när eleven väljer rätt svar.. Default: `'That's the correct answer!'`.
* __points__ | `number`: Maximalt antal poäng som tilldelas vid betygsättning.. Default: `10`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onChange__ | `function`: callback som utlöses efter att åtgärden "Skicka" har slutförts.. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback som aktiveras när svaret skickas in; har som första parameter en "boolean" som anger om svaret var korrekt besvarat (om tillämpligt, annars "noll") och det lämnade svaret som andra parameter.. Default: `onSubmit() {}`.


## Exempel

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
