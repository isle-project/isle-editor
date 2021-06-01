---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

Valitud küsimuste komponent.

## Valikud

* __question__ | `(string|node)`: küsimus, mille puhul õpilane peab valima ühe olemasolevatest vastusevariantidest.. Default: `''`.
* __options__ | `array (required)`: olemasolevad vastusevariandid, mille hulgast õpilane saab valida. Default: `none`.
* __solution__ | `number`: lahenduse elemendi indeks `options`is. Default: `none`.
* __preselected__ | `number`: eelnevalt valitud vastusevariandi indeks. Default: `0`.
* __inline__ | `boolean`: kontrollib, kas komponent renderdatakse inline või mitte. Default: `false`.
* __hintPlacement__ | `string`: vihjete paigutus (kas "üleval", "vasakul", "paremal" või "all").. Default: `'top'`.
* __hints__ | `array<(string|node)>`: vihjeid, mis annavad suuniseid küsimusele vastamiseks. Default: `[]`.
* __feedback__ | `boolean`: kontrollib, kas tagasiside nuppe kuvada. Default: `true`.
* __chat__ | `boolean`: kontrollib, kas elemendil peaks olema integreeritud vestlus. Default: `false`.
* __provideFeedback__ | `boolean`: näitab, kas pärast õppijate vastuste esitamist tuleb kuvada tagasisidet, mis sisaldab õiget vastust.. Default: `true`.
* __failureMsg__ | `string`: sõnum, mis kuvatakse, kui õpilane valib vale vastuse. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: sõnum, mis kuvatakse, kui õpilane valib õige vastuse. Default: `'That's the correct answer!'`.
* __points__ | `number`: hindamisel antavate punktide maksimaalne arv. Default: `10`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onChange__ | `function`: callback, mis käivitub pärast toimingu esitamist. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, mis kutsutakse üles, kui vastus on esitatud; esimese parameetrina on "boolean", mis näitab, kas vastus on õigesti vastatud (kui see on asjakohane, vastasel juhul "null") ja teise parameetrina esitatud vastus.. Default: `onSubmit() {}`.


## Näited

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
