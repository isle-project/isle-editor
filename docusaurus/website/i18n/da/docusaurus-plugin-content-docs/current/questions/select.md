---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

En komponent med udvalgte spørgsmål.

## Indstillinger

* __question__ | `(string|node)`: spørgsmål, hvor den studerende skal vælge en af de tilgængelige svarmuligheder. Default: `''`.
* __options__ | `array (required)`: tilgængelige svarmuligheder, som den studerende kan vælge mellem. Default: `none`.
* __solution__ | `number`: indeks for løsningselementet i `options`.. Default: `none`.
* __preselected__ | `number`: indeks for forudvalgt svarmulighed. Default: `0`.
* __inline__ | `boolean`: styrer, om komponenten skal gengives inline eller ej. Default: `false`.
* __hintPlacement__ | `string`: placeringen af vejledningerne (enten "top", "venstre", "højre" eller "nederst"). Default: `'top'`.
* __hints__ | `array<(string|node)>`: tips, der giver vejledning om, hvordan spørgsmålet skal besvares. Default: `[]`.
* __feedback__ | `boolean`: styrer, om der skal vises feedback-knapper. Default: `true`.
* __chat__ | `boolean`: kontrollerer, om elementet skal have en integreret chat. Default: `false`.
* __provideFeedback__ | `boolean`: angiver, om der skal vises feedback, herunder det korrekte svar, efter at eleverne har indsendt deres svar. Default: `true`.
* __failureMsg__ | `string`: meddelelse, der skal vises, når den studerende vælger et forkert svar. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: meddelelse, der skal vises, når den studerende vælger det rigtige svar. Default: `'That's the correct answer!'`.
* __points__ | `number`: det maksimale antal point, der kan tildeles ved bedømmelsen. Default: `10`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onChange__ | `function`: callback, der udløses efter indsendelseshandlingen. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, der påkaldes, når svaret er indsendt; har som første parameter en `boolean`, der angiver, om svaret blev besvaret korrekt (hvis det er relevant, ellers `null`), og det indsendte svar som anden parameter. Default: `onSubmit() {}`.


## Eksempler

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
