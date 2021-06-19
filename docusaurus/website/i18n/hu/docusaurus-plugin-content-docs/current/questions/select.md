---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

Válogatott kérdéskomponens.

## Opciók

* __question__ | `(string|node)`: olyan kérdés, amelynél a hallgatónak ki kell választania a válaszlehetőségek közül egyet.. Default: `''`.
* __options__ | `array (required)`: válaszlehetőségek, amelyek közül a tanuló választhat. Default: `none`.
* __solution__ | `number`: a megoldás elemének indexe az `opciókban`. Default: `none`.
* __preselected__ | `number`: az előre kiválasztott válaszlehetőség indexe. Default: `0`.
* __inline__ | `boolean`: szabályozza, hogy a komponens inline vagy nem inline megjelenítésre kerüljön-e.. Default: `false`.
* __hintPlacement__ | `string`: a tippek elhelyezése (vagy `top`, `left`, `right`, vagy `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: a kérdés megválaszolására vonatkozó útmutatásokat ad. Default: `[]`.
* __feedback__ | `boolean`: szabályozza, hogy megjelenjenek-e a visszajelző gombok. Default: `true`.
* __chat__ | `boolean`: szabályozza, hogy az elemnek legyen-e integrált chatje. Default: `false`.
* __provideFeedback__ | `boolean`: jelzi, hogy a helyes választ tartalmazó visszajelzés megjelenjen-e, miután a tanulók elküldték a válaszaikat. Default: `true`.
* __failureMsg__ | `string`: üzenet, amely akkor jelenik meg, ha a tanuló rossz választ választ választ ki. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: a helyes válasz kiválasztásakor megjelenítendő üzenet. Default: `'That's the correct answer!'`.
* __points__ | `number`: az osztályozás során adható maximális pontszám. Default: `10`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onChange__ | `function`: visszahívás, amely a submit művelet után lép működésbe.. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, amelyet a válasz elküldésekor hívnak meg; első paramétere egy "bólé", amely jelzi, hogy a válasz helyesen lett-e megválaszolva (ha alkalmazható, egyébként "nulla"), második paramétere pedig a megadott válasz.. Default: `onSubmit() {}`.


## Példák

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
