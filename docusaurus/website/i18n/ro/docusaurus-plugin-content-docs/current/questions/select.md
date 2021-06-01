---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

O componentă de întrebare selectivă.

## Opțiuni

* __question__ | `(string|node)`: întrebare pentru care elevul trebuie să selecteze una dintre variantele de răspuns disponibile. Default: `''`.
* __options__ | `array (required)`: opțiuni de răspuns disponibile din care elevul poate selecta. Default: `none`.
* __solution__ | `number`: indicele elementului de soluție din `opțiuni`. Default: `none`.
* __preselected__ | `number`: indicele opțiunii de răspuns preselectate. Default: `0`.
* __inline__ | `boolean`: controlează dacă componenta este redată în linie sau nu. Default: `false`.
* __hintPlacement__ | `string`: plasarea indicilor (fie `top`, `left`, `right`, sau `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: indicii care oferă îndrumări privind modul de răspuns la întrebare. Default: `[]`.
* __feedback__ | `boolean`: controlează dacă se afișează butoanele de feedback. Default: `true`.
* __chat__ | `boolean`: controlează dacă elementul trebuie să aibă un chat integrat. Default: `false`.
* __provideFeedback__ | `boolean`: indică dacă feedback-ul care include răspunsul corect trebuie afișat după ce cursanții își trimit răspunsurile. Default: `true`.
* __failureMsg__ | `string`: mesajul care trebuie afișat atunci când elevul selectează un răspuns greșit. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: mesajul care trebuie afișat atunci când elevul selectează răspunsul corect. Default: `'That's the correct answer!'`.
* __points__ | `number`: numărul maxim de puncte acordate în cadrul clasificării. Default: `10`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onChange__ | `function`: callback care este declanșat după acțiunea de trimitere. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback invocat atunci când răspunsul este trimis; are ca prim parametru un `boolean` care indică dacă răspunsul a fost dat corect (dacă este cazul, `null` în caz contrar) și răspunsul furnizat ca al doilea parametru. Default: `onSubmit() {}`.


## Exemple

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
