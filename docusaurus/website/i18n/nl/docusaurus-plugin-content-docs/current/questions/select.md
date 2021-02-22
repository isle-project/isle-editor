---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

Een selecte vraagcomponent.

## Options

* __question__ | `(string|node)`: vraag waarvoor de student een van de beschikbare antwoordmogelijkheden moet kiezen. Default: `''`.
* __options__ | `array (required)`: beschikbare antwoordopties waaruit de student kan kiezen. Default: `none`.
* __solution__ | `number (required)`: index van oplossingselement in `opties`. Default: `none`.
* __preselected__ | `number`: index van voorgeselecteerde antwoordopties. Default: `0`.
* __inline__ | `boolean`: controleert of het onderdeel al dan niet inline wordt weergegeven. Default: `false`.
* __hintPlacement__ | `string`: plaatsing van de hints (ofwel `top`, `left`, `right`, of `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: tips die een leidraad bieden voor het beantwoorden van de vraag. Default: `[]`.
* __feedback__ | `boolean`: regelt of er terugmeldingsknoppen moeten worden weergegeven. Default: `true`.
* __chat__ | `boolean`: bepaalt of het element een geïntegreerde chat moet hebben. Default: `false`.
* __provideFeedback__ | `boolean`: geeft aan of de feedback, inclusief het juiste antwoord, moet worden weergegeven nadat de leerlingen hun antwoorden hebben ingediend. Default: `true`.
* __failureMsg__ | `string`: bericht dat moet worden weergegeven wanneer de leerling een verkeerd antwoord selecteert. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: bericht dat moet worden weergegeven wanneer de leerling het juiste antwoord selecteert. Default: `'That's the correct answer!'`.
* __points__ | `number`: maximumaantal punten voor de indeling in klassen. Default: `10`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onChange__ | `function`: callback die wordt geactiveerd na het indienen van de actie. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback ingeroepen bij het inzenden van het antwoord; heeft als eerste parameter een `boolean` die aangeeft of het antwoord correct is beantwoord (indien van toepassing, `null` anders) en het verstrekte antwoord als tweede parameter. Default: `onSubmit() {}`.


## Examples

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
    solution={2}
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
