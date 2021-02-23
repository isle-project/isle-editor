---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

Un volet de questions choisies.

## Options

* __question__ | `(string|node)`: question pour laquelle l'étudiant doit choisir l'une des options de réponse disponibles. Default: `''`.
* __options__ | `array (required)`: les options de réponse disponibles parmi lesquelles l'étudiant peut choisir. Default: `none`.
* __solution__ | `number (required)`: élément d'index de la solution dans les "options. Default: `none`.
* __preselected__ | `number`: index de l'option de réponse présélectionnée. Default: `0`.
* __inline__ | `boolean`: contrôle si le composant est rendu en ligne ou non. Default: `false`.
* __hintPlacement__ | `string`: l'emplacement des indices (soit "en haut", "à gauche", "à droite" ou "en bas"). Default: `'top'`.
* __hints__ | `array<(string|node)>`: des conseils sur la façon de répondre à la question. Default: `[]`.
* __feedback__ | `boolean`: contrôle l'affichage des boutons de rétroaction. Default: `true`.
* __chat__ | `boolean`: contrôle si l'élément doit avoir un chat intégré. Default: `false`.
* __provideFeedback__ | `boolean`: indique si un retour d'information comprenant la bonne réponse doit être affiché après que les apprenants aient soumis leurs réponses. Default: `true`.
* __failureMsg__ | `string`: message à afficher lorsque l'élève sélectionne une mauvaise réponse. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: message à afficher lorsque l'élève sélectionne la bonne réponse. Default: `'That's the correct answer!'`.
* __points__ | `number`: nombre maximum de points attribués dans le classement. Default: `10`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onChange__ | `function`: le rappel qui est déclenché après l'action de soumission. Default: `onChange() {}`.
* __onSubmit__ | `function`: rappel invoqué lors de la soumission de la réponse ; a comme premier paramètre un "booléen" indiquant si la réponse a été correctement donnée (le cas échéant, "nul" sinon) et la réponse fournie comme second paramètre. Default: `onSubmit() {}`.


## Exemples

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
