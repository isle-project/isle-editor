---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

Pasirinkto klausimo komponentas.

## Parinktys

* __question__ | `(string|node)`: klausimas, į kurį mokinys turi pasirinkti vieną iš galimų atsakymo variantų.. Default: `''`.
* __options__ | `array (required)`: galimi atsakymų variantai, iš kurių mokinys gali pasirinkti. Default: `none`.
* __solution__ | `number`: sprendimo elemento indeksas `options`. Default: `none`.
* __preselected__ | `number`: iš anksto pasirinkto atsakymo varianto indeksas. Default: `0`.
* __inline__ | `boolean`: kontroliuoja, ar komponentas bus atvaizduojamas į eilutę, ar ne.. Default: `false`.
* __hintPlacement__ | `string`: užuominų vieta (`top`, `left`, `right` arba `bottom`).. Default: `'top'`.
* __hints__ | `array<(string|node)>`: užuominos, kuriose pateikiamos rekomendacijos, kaip atsakyti į klausimą.. Default: `[]`.
* __feedback__ | `boolean`: kontroliuoja, ar rodyti grįžtamojo ryšio mygtukus.. Default: `true`.
* __chat__ | `boolean`: kontroliuoja, ar elementas turi turėti integruotą pokalbių. Default: `false`.
* __provideFeedback__ | `boolean`: nurodo, ar mokiniams pateikus atsakymus turėtų būti rodomas grįžtamasis ryšys, įskaitant teisingą atsakymą.. Default: `true`.
* __failureMsg__ | `string`: pranešimas, rodomas mokiniui pasirinkus neteisingą atsakymą.. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: pranešimas, kuris bus rodomas, kai mokinys pasirinks teisingą atsakymą.. Default: `'That's the correct answer!'`.
* __points__ | `number`: maksimalus balų skaičius, suteikiamas vertinant. Default: `10`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onChange__ | `function`: grįžtamasis skambutis, kuris paleidžiamas po veiksmo pateikti. Default: `onChange() {}`.
* __onSubmit__ | `function`: grįžtamasis skambutis, iškviečiamas, kai pateikiamas atsakymas; pirmasis parametras yra `boolean`, nurodantis, ar atsakymas buvo teisingas (jei tinka, `null`, jei ne), o antrasis parametras - pateiktas atsakymas.. Default: `onSubmit() {}`.


## Pavyzdžiai

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
